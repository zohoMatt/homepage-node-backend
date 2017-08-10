/**
 * Created by hao.zuo on 2017/8/9.
 */
/**======================================================**/
/**                      Imports                         **/
/**======================================================**/
/******************** Modular Requirements *******************/
const express = require('express');
const mongoose = require('mongoose');

const ccolor = require('colors');
const path = require('path');

/******************** File imports *******************/
// controllers
const root = require('./controller/root').root;

const router = express.Router();

/**======================================================**/
/**                    Middleware                        **/
/**======================================================**/

/**======================================================**/
/**                 Server Configuration                 **/
/**======================================================**/
// Listen at port localhost:3000
root.listen(3000, () => {
    console.log('>> API server is running at port 3000...'.green);
});

/**======================================================**/
/**                     Database                         **/
/**======================================================**/
// Testing
mongoose.connect('mongodb://localhost/MY_HOME_PAGE');

const Project = mongoose.model('Project', {
    id: Number,
    name: String,
    playable: Boolean
});

let everlink_md = new Project({
    id: 200,
    name: 'everlink-md',
    playable: false
});

// everlink_md.save((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Succeed!');
//     }
// });

Project.find({}, function (err, data) {
    console.log(data);
});
