/**
 * Created by hao.zuo on 2017/8/14.
 */

const ccolor = require('colors');

const Project = require('./Schema').Project;

/**
 * Get all projects and their details.
 *
 * @returns {Promise} Returns a Promise function passing the data through.
 */
const getProjectsAsync = () => {
    return new Promise((resolve, reject) => {
        Project.find({}, function (err, res) {
            // Handling error
            if (err) {
                console.log(`!! ERROR WHILE GET ALL PROJECTS !! ${err}`.red);
                reject(err);
                return;
            }
            // Passing params while succeeding
            resolve(res);
        });
    });
};

/*****************************************/
exports.getProjectsAsync = getProjectsAsync;