/**
 * Created by hao.zuo on 2017/8/14.
 */
const path = require('path');
const express = require('express');
const projectApi = express();

/******************** Model handlers *******************/
const getAllProjectsAsync       = require('../model/projectDataHandler').getAllProjectsAsync;
const getProjectAsync           = require('../model/projectDataHandler').getProjectAsync;

/**======================================================**/
/**                  Pre-middleware                      **/
/**======================================================**/

/**======================================================**/
/**                    Project APIs                      **/
/**======================================================**/

/******************** GET *******************/

/**
 * @api {get} /api/project/ Get project with params.
 * @apiName GetProject
 * @apiGroup Project
 * @apiVersion 0.1.0
 * @apiSuccess {String}     id                          ID of project, unique.
 * @apiSuccess {String}     pname                       Name of project.
 * @apiSuccess {String}     tag                         Tag name.
 * @apiSuccess {String}     kword                       Brief description for this project
 * @apiSuccess {Boolean}    play                        Whether can be visited as web application.
 *
 * @apiSuccess {Number}     id                          Response timestamp.
 * @apiSuccess {Object[]}   list                        Container of results, even response with only one project.
 * @apiSuccess {String}     list.id                     ID of project, unique.
 * @apiSuccess {String}     list.pname                  Name of project.
 * @apiSuccess {Object[]}   list.tagList                Tags for the project; array.
 * @apiSuccess {String}     list.tagList.tag            Tag name.
 * @apiSuccess {String}     list.description            Brief description for this project
 * @apiSuccess {String}     list.repo                   URL of repository of this project.
 * @apiSuccess {Boolean}    list.playable               Whether can be visited as web application.
 */
projectApi.get('/', (req, res) => {
    getProjectAsync(req.query)
        .then((data) => {
            res.send({
                id: Date.now(),
                list: data
            });
        })
        .catch((err) => {
            console.log(`!! ERROR WHILE GETTING PROJECT INFO !! ${err}`.red);
        });
});

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
    getAllProjectsAsync()
        .then((data) => {
            res.send({
                id: Date.now(),
                list: data
            })
        })
        .catch((err) => {
            console.log(`!! ERROR WHILE GETTING ALL PROJECTS !! ${err}`.red);
        });
});



/**======================================================**/
/**                  Post-middleware                     **/
/**======================================================**/



/******************** Exports *******************/
exports.api = projectApi;