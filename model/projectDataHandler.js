/**
 * Created by hao.zuo on 2017/8/14.
 */

const ccolor = require('colors');

const Project = require('./Schema').Project;

/**======================================================**/
/**                     Helpers                         **/
/**======================================================**/
const removeAttrs = (project) => {
    delete project._id;
    delete project.__v;
    project.tagList.map((tag) => {
        delete tag._id;
    });
    return project;
};



/**======================================================**/
/**                     Interface                        **/
/**======================================================**/

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
                removeAttrs(obj);
            });
            // Passing params while succeeding
            resolve(data);
        });
    });
};

/**
 * Get projects with params as query. Parameters are explained in the API file.
 *
 * @param id        {String}
 * @param pname     {String}
 * @param tag       {String}
 * @param kword     {String}
 * @param play      {Boolean}
 *
 * @returns {Promise}
 */
const getProjectAsync = ({id, pname, tag, kword, play}) => {
    // Modify the query
    const query = {
        id:             id      ? new RegExp(id, 'i')       : undefined,
        pname:          pname   ? new RegExp(pname, 'i')    : undefined,
        description:    kword   ? new RegExp(kword, 'i')    : undefined,
        'tagList.tag':  tag     ? new RegExp(tag, 'i')      : undefined,
        playable:       play || undefined
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
            if (data) {
                // Modifying data
                data.map((d) => {
                    removeAttrs(d);
                });
            }
            // Passing data through
            resolve(data);
        });
    });
};

/*****************************************/
exports.getAllProjectsAsync = getAllProjectsAsync;
exports.getProjectAsync = getProjectAsync;