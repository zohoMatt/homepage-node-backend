/**
 * Created by hao.zuo on 2017/8/10.
 */

/******************** Library requirement *******************/
const express = require('express');

/******************** Sub-controller requirement *******************/
const diagnosis = require('./diagnosis').api;

/*****************************************/
// Establish root controller
const root = express();

// Distribute requests to different sub controllers
root.use('/api/', diagnosis);

// Export the module
exports.root = root;
