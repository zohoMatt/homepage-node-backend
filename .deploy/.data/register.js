/**
 * Created by hao.zuo on 2017/8/10.
 */
/**================================================================
 1. All code is asynchronous and be careful when using queries
    just after the database is updated.

 2. This register is for initialize the database only!
 ================================================================**/


/******************** Library *******************/
const mongoose  = require('mongoose');
const fs        = require('fs');
const path      = require('path');
const ccolor    = require('colors');

const Schema    = mongoose.Schema;

// Connect with database
const HOMEPAGE_DB = mongoose.connect('mongodb://localhost:20000/HOME_PAGE');

/**======================================================**/
/**                      Schema                          **/
/**======================================================**/
// Blogs
const BlogSchema = new Schema({
    id:                     { type: String, unique: true, index: true },    // id of blog article
    title:                  String,                                         // Title of article
    archive:                String,                                         // Archived folder for this article
    tagList: [{
        tag:                String                                          // Tag name
    }],
    context:                String,                                         // Content of article
    feedback: {
        likes:              Number,                                         // Likes
        cmt_no:             Number,                                         // The number of comments todo Depends on length of comment
    },
    comment: [{
        userid:             String,                                         // id of commenter
        usermail:           String,                                         // Email address of commenter
        time:               String,                                         // Time of comment todo Present time by default
        text:               String                                          // Content of comment
    }],
    public:                 Boolean                                         // Whether this article can be read by public
});

// Projects
const ProjectSchema = new Schema({
    id:                     { type: String, unique: true, index: true },    // id of project
    pname:                  String,                                         // Name of project
    tagList: [{
        tag:                String                                          // Tag name
    }],
    description:            String,                                         // Brief introduction to project
    repo:                   String,                                         // URL for repository
    playable:               Boolean                                         // Whether user can play this project online
});

// Gallery
const PictureSchema = new Schema({
    id:                     { type: String, unique: true, index: true },
    pic_title:              String,
    pic_intro:              String,
    pic_size:               Number,                                         // Size of pic file (by MB)
    pic_info:[{                                                             // todo All important pic parameters like shutter, aperture, etc

    }],
    feedback: [{
        likes:              Number,
    }],
    comment: [{
        userid:             String,                                         // id of commenter
        usermail:           String,                                         // Email address of commenter
        time:               String,                                         // Time of comment todo Present time by default
        text:               String                                          // Content of comment
    }],
    public:                 Boolean
});

const VideoSchema = new Schema({
    // TODO
});

/**======================================================**/
/**                       Model                          **/
/**======================================================**/
const Blog      = mongoose.model('Blog', BlogSchema);
const Project   = mongoose.model('Project', ProjectSchema);
const Picture   = mongoose.model('Picture', PictureSchema);
const Video     = mongoose.model('Video', VideoSchema);


/**======================================================**/
/**                   Data Register                      **/
/**======================================================**/
// fixme .findOneAndUpdate method with upsert option does not working while entry does not exists
// Project
[
    {
        id:                     'PF001',
        pname:                  'mattzo.life',
        tagList: [
            {tag: 'web-app'},
            {tag: 'react'},
            {tag: 'redux'},
            {tag: 'webpack'}
        ],
        description:            'Just the site you are visiting!',
        repo:                   'https://github.com/zohoMatt/zohoMatt.github.io',
        playable:               true
    },
    {
        id:                     'PF010',
        pname:                  'canvas-tree',
        tagList: [
            {tag: 'canvas'}
        ],
        description:            'Draw a tree!',
        repo:                   'https://github.com/zohoMatt/canvas-tree',
        playable:               true
    },
    {
        id:                     'PF011',
        pname:                  'frogger-game',
        tagList: [
            {tag: 'canvas'}
        ],
        description:            'A simple game.',
        repo:                   'https://github.com/zohoMatt/frogger-game',
        playable:               true
    },
    {
        id:                     'PA002',
        pname:                  'everlink-md',
        tagList: [
            {tag: 'application'},
            {tag: 'electron'},
            {tag: 'react'},
            {tag: 'reddux'},
            {tag: 'webpack'}
        ],
        description:            'A desktop markdown editor linked with evernote.',
        repo:                   'https://github.com/zohoMatt/everlink-md',
        playable:               false
    },
    {
        id:                     'PB012',
        pname:                  'homepage-node-backend',
        tagList: [
            {tag: 'node'},
            {tag: 'express'},
            {tag: 'mongodb'}
        ],
        description:            'Just the site you are visiting!',
        repo:                   'homepage-node-backend',
        playable:               true
    }
].forEach((obj) => {
    Project.findOneAndUpdate(obj, obj, {upsert: true});
});

// Blog
[
    {
        id:                     'M0001',
        title:                  'Welcome to my blog',
        archive:                'Tests',
        tagList: [
            {tag: 'test'}
        ],
        context:                fs.readFileSync(path.join(__dirname, `../../static/blog/Welcome to my blog.md`)),
        feedback: {
            likes:              0,
            cmt_no:             0,
        },
        comment: [],
        public:                 true
    },
    {
        id:                     'R0001',
        title:                  'MacdownHelp',
        archive:                'Tests',
        tagList: [
            {tag: 'test'}
        ],
        context:                fs.readFileSync(path.join(__dirname, `../../static/blog/MacdownHelp.md`)),
        feedback: {
            likes:              0,
            cmt_no:             0,
        },
        comment: [],
        public:                 true
    }
].forEach((obj) => {
    Blog.findOneAndUpdate(obj, obj, {upsert: true});
});

HOMEPAGE_DB.disconnect();

/******************** Exports *******************/
exports.Blog        = Blog;
exports.Project     = Project;
exports.Picture     = Picture;
exports.Video       = Video;
exports.DB          = HOMEPAGE_DB;