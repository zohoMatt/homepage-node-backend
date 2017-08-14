/**
 * Created by hao.zuo on 2017/8/14.
 */

const ccolor = require('colors');

const Project = require('./Schema').Project;

/**
 * Get all projects and their details. Modify data and delete unnecessary attributes.
 *
 * @returns {Promise} Returns a Promise function passing the data through.
 */
const getProjectsAsync = () => {
    return new Promise((resolve, reject) => {
        Project.find({}).lean().exec(function (err, res) {
            // Handling error
            if (err) {
                console.log(`!! ERROR WHILE GET ALL PROJECTS !! ${err}`.red);
                reject(err);
                return;
            }
            // Modifying result, removing unnecessary attributes
            res.map((obj) => {
                delete obj._id;
                delete obj.__v;
                obj.tagList.map((tag) => {
                    delete tag._id;
                    return tag;
                });
                return obj;
            });
            // Passing params while succeeding
            resolve(res);
        });
    });
};

/*****************************************/
exports.getProjectsAsync = getProjectsAsync;