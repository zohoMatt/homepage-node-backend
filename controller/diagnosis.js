/**
 * Created by hao.zuo on 2017/8/10.
 */

const express = require('express');
const diagnosis = express();              // App under /diagnosis/

/**======================================================**/
/**                     Diagnosis                        **/
/**======================================================**/
// Diagnose the server.
/**
 * @diagnosis {get} /test Test if the application runs well.
 * @apiName TestServer
 * @apiGroup Test
 * @apiVersion 0.1.0
 *
 * @apiSuccess {String}     id              Response ID.
 * @apiSuccess {String}     state           Server state.
 * @apiSuccess {String}     state.code      Server state code.
 * @apiSuccess {String}     state.intro     Introduction on server state.
 *
 */
diagnosis.get('/test:id?', (req, res) => {
    res.send(`Hello, your request is received, id is ${req.params.id}, req's path is ${req.path}.`);
});

exports.api = diagnosis;
