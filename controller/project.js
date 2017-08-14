/**
 * Created by hao.zuo on 2017/8/14.
 */
const express = require('express');
const projectApi = express();

/******************** Data handlers *******************/
const getProjectsAsync = require('../model/projectDataHandler').getProjectsAsync;

/**======================================================**/
/**                  Pre-middleware                      **/
/**======================================================**/

/**======================================================**/
/**                    Project APIs                      **/
/**======================================================**/

/******************** GET *******************/

/**
 * @api {get} /api/project/all Get all project information details.
 * @apiName GetAllProjects
 * @apiGroup Project
 * @apiVersion 0.1.0
 *
 * @apiSuccess {Number}     id                          Response timestamp
 * @apiSuccess {Object[]}   list                        Container of results
 * @apiSuccess {String}     list.id                     ID of project, unique.
 * @apiSuccess {String}     list.pname                  Name of project.
 * @apiSuccess {Object[]}   list.tagList                Tags for the project; array.
 * @apiSuccess {String}     list.tagList.tag            Tag name.
 * @apiSuccess {String}     list.description            Brief description for this project
 * @apiSuccess {String}     list.repo                   URL of repository of this project.
 * @apiSuccess {Boolean}    list.playable               Whether can be visited as web application.
 */
projectApi.get('/all', (req, res) => {
    getProjectsAsync().then((data) => {
        res.send({
            id: Date.now(),
            list: data
        });
    });
});



/**======================================================**/
/**                  Post-middleware                     **/
/**======================================================**/



/******************** Exports *******************/
exports.api = projectApi;