/**
 * Created by hao.zuo on 2017/8/10.
 */

/******************** Library requirement *******************/
const express = require('express');

/******************** Sub-controller requirement *******************/
const diagnosis = require('./diagnosis').api;
const projectApi = require('./project').api;

/*****************************************/
// Establish root controller
const root = express();

// Distribute requests to different sub controllers
root.use('/api/test/', diagnosis);
root.use('/api/project/', projectApi);

// Export the module
exports.root = root;
