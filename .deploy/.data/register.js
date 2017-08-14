/**
 * Created by hao.zuo on 2017/8/10.
 */
/**================================================================
 1. All code is asynchronous and be careful when using queries
    just after the database is updated.

 2. This register is for initialize the database only!
 ================================================================**/

const Blog = require('../../model/Schema').Blog;
const Project = require('../../model/Schema').Project;

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

