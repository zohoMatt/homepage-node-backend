/**
 * Created by hao.zuo on 2017/8/10.
 */

/******************** Library requirement *******************/
const path = require('path');
const express = require('express');
const cors = require('cors');

/******************** Sub-controller requirement *******************/
const diagnosis = require('./diagnosis').api;
const projectApi = require('./project').api;
const blogApi = require('./blog').api;

/*****************************************/
// Establish root controller
const root = express();

// Allow CORS
root.use(cors());

/**======================================================**/
/**                  Static Resource                     **/
/**======================================================**/
/******************** Projects *******************/
// fixme Need another Node application to manage static files
// root.use('/project/canvas-tree', express.static(path.resolve('./static/project/canvas-tree')));


/**======================================================**/
/**                 Dynamic Request                      **/
/**======================================================**/
// Distribute requests to different sub controllers
root.use('/api/test/', diagnosis);
root.use('/api/project/', projectApi);
root.use('/api/blog/', blogApi);

// Export the module
exports.root = root;
