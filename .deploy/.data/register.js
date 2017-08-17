/**
 * Created by hao.zuo on 2017/8/10.
 */
/**================================================================
 1. All code is asynchronous and be careful when using queries
    just after the database is updated.

 2. This register is for initialize the database only!
 ================================================================**/

const fs        = require('fs');
const path      = require('path');
const cclor     = require('colors');

const Blog = require('../../model/Schema').Blog;
const Project = require('../../model/Schema').Project;

/**======================================================**/
/**                   Data Register                      **/
/**======================================================**/
// fixme .findOneAndUpdate method with upsert option does not working while entry does not exists
// attention You must assign a callback function coz FOUR params are permitted while THREE params are not
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
        playUrl:                'http://mattzo.life'
    },
    {
        id:                     'PF010',
        pname:                  'canvas-tree',
        tagList: [
            {tag: 'canvas'}
        ],
        description:            'Draw a tree!',
        repo:                   'https://github.com/zohoMatt/canvas-tree',
        playUrl:                'https://zohomatt.github.io/canvas-tree/'
    },
    {
        id:                     'PF011',
        pname:                  'frogger-game',
        tagList: [
            {tag: 'canvas'},
            {tag: 'game'}
        ],
        description:            'A simple game.',
        repo:                   'https://github.com/zohoMatt/frogger-game',
        playUrl:                'https://zohomatt.github.io/frogger-game'
    },
    {
        id:                     'PA002',
        pname:                  'everlink-md',
        tagList: [
            {tag: 'application'},
            {tag: 'electron'},
            {tag: 'react'},
            {tag: 'redux'},
            {tag: 'webpack'}
        ],
        description:            'A desktop markdown editor linked with evernote.',
        repo:                   'https://github.com/zohoMatt/everlink-md',
        playUrl:                ''
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
        playUrl:                ''
    }
].forEach((obj) => {
    Project.findOneAndUpdate({id: obj.id}, obj, {upsert: true, 'new': true}, function (err, doc) {
        console.log(`${'>>'.blue}Succeeding in adding/updating document ${JSON.stringify(obj)}`);
    });
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
    Blog.findOneAndUpdate({id: obj.id}, obj, {upsert: true, 'new': true}, function (err, doc) {
        console.log(`${'>>'.blue}Succeeding in adding/updating document ${JSON.stringify(obj)}`);

    });
});

