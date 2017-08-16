/**
 * Created by hao.zuo on 2017/8/14.
 */


/******************** Library *******************/
const mongoose  = require('mongoose');
const ccolor    = require('colors');

const Schema    = mongoose.Schema;

// Connect with database
const HOMEPAGE_DB = mongoose.connect('mongodb://localhost/HOME_PAGE');

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
    playUrl:                String                                         // Whether user can play this project online
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


/******************** Exports *******************/
exports.Blog        = Blog;
exports.Project     = Project;
exports.Picture     = Picture;
exports.Video       = Video;
exports.DATABASE    = HOMEPAGE_DB;