/**
 * Created by hao.zuo on 2017/8/10.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Connect with database
mongoose.connect('mongodb://localhost/MY_HOME_PAGE');

/**======================================================**/
/**                      Schema                          **/
/**======================================================**/
// Blogs
const BlogSchema = new Schema({
    id:                     Number,         // id of blog article
    title:                  String,         // Title of article
    archive:                String,         // Archived folder for this article
    tagList: [{
        tag:                String          // Tag name
    }],
    context:                String,         // Content of article
    feedback: {
        likes:              Number,         // Likes
        cmt_no:             Number,         // The number of comments todo Depends on length of comment
    },
    comment: [{
        userid:             String,         // id of commenter
        usermail:           String,         // Email address of commenter
        time:               String,         // Time of comment todo Present time by default
        text:               String          // Content of comment
    }],
    public:                 Boolean         // Whether this article can be read by public
});

// Projects
const ProjectSchema = new Schema({
    id:                     Number,         // id of project
    pname:                  String,         // Name of project
    tagList: [{
        tag:                String          // Tag name
    }],
    description:            String,         // Brief introduction to project
    repo:                   String,         // URL for repository
    playable:               Boolean         // Whether user can play this project online
});

// Gallery
const PictureSchema = new Schema({
    id:                     Number,
    pic_title:              String,
    pic_intro:              String,
    pic_size:               Number,         // Size of pic file (by MB)
    pic_info:[{                             // todo All important pic parameters like shutter, aperture, etc

    }],
    feedback: [{
        likes:              Number,
    }],
    comment: [{
        userid:             String,         // id of commenter
        usermail:           String,         // Email address of commenter
        time:               String,         // Time of comment todo Present time by default
        text:               String          // Content of comment
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
exports = {
    ...exports,
    Blog,
    Project,
    Picture,
    Video
};

/*****************************************/
// const Project = mongoose.model('Project', {
//     id: Number,
//     name: String,
//     playable: Boolean
// });
//
// let everlink_md = new Project({
//     id: 200,
//     name: 'everlink-md',
//     playable: false
// });

// everlink_md.save((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Succeed!');
//     }
// });

// Project.find({}, function (err, data) {
//     console.log(data);
// });