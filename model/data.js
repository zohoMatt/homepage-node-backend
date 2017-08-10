/**
 * Created by hao.zuo on 2017/8/10.
 */

const mongoose = require('mongoose');

/**======================================================**/
/**                     Database                         **/
/**======================================================**/
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

