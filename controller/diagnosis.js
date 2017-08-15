/**
 * Created by hao.zuo on 2017/8/10.
 */

const express = require('express');
const diagnosis = express();              // App under /diagnosis/

/**======================================================**/
/**                  Pre-middleware                      **/
/**======================================================**/


/**======================================================**/
/**                     Diagnosis                        **/
/**======================================================**/

/******************** GET *******************/

/**
 * @api {get} /test Test if the application runs well.
 * @apiName TestServer
 * @apiGroup Test
 *
 * @apiSuccess {String}     id              Response ID.
 * @apiSuccess {String}     state           Server state.
 * @apiSuccess {String}     state.code      Server state code.
 * @apiSuccess {String}     state.intro     Introduction on server state.
 *
 */
diagnosis.get('/con', (req, res) => {
    const reqInfo = JSON.stringify(req.headers, null, 4);
    res.send(`Hello, your request is as following:\n${reqInfo}`);
});


diagnosis.get('/db', (req, res) => {
    // todo Check if database works well
    res.send(`Well.. OK!`);
});


/**======================================================**/
/**                  Post-middleware                     **/
/**======================================================**/


/******************** Exports *******************/
exports.api = diagnosis;
