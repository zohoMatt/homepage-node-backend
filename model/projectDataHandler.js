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
const getAllProjectsAsync = () => {
    return new Promise((resolve, reject) => {
        Project.find({}).lean().exec(function (err, data) {
            // Handling error
            if (err) {
                reject(err);
                return;
            }
            // Modifying result, removing unnecessary attributes
            data.map((obj) => {
                delete obj._id;
                delete obj.__v;
                obj.tagList.map((tag) => {
                    delete tag._id;
                    return tag;
                });
                return obj;
            });
            // Passing params while succeeding
            resolve(data);
        });
    });
};


const getProjectAsync = ({id, pname, tag, kword, play}) => {
    // Modify the query
    const query = {
        id: id ? new RegExp(id) : undefined,
        pname: pname || undefined,
        description: kword ? new RegExp(kword) : undefined,
        playable: play || undefined
    };
    for (const key of Object.keys(query)) {
        if (query[key] === undefined) {
            delete query[key];
        }
    }

    // todo Searching tag
    return new Promise((resolve, reject) => {
        // Find in database
        Project.find(query).lean().exec(function (err, data) {
            if (err) {
                reject(err);
                return;
            }
            // Passing data through
            resolve(data);
        });
    });
};

/*****************************************/
exports.getAllProjectsAsync = getAllProjectsAsync;
exports.getProjectAsync = getProjectAsync;