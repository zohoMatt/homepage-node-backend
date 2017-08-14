/**
 * Created by hao.zuo on 2017/8/14.
 */
const express = require('express');
const projectApi = express();

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
 * @apiSuccess {String}     id                      ID of project, unique.
 * @apiSuccess {String}     pname                   Name of project.
 * @apiSuccess {Object[]}   tagList                 Tags for the project; array.
 * @apiSuccess {String}     tagList.tag             Tag name.
 * @apiSuccess {String}     description             Brief description for this project
 * @apiSuccess {String}     repo                    URL of repository of this project.
 * @apiSuccess {Boolean}    playable                Whether can be visited as web application.
 */
projectApi.get('/all', (req, res) => {

});



/**======================================================**/
/**                  Post-middleware                     **/
/**======================================================**/



/******************** Exports *******************/
exports.api = projectApi;