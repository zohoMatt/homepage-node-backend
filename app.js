/**
 * Created by hao.zuo on 2017/8/9.
 */

/**======================================================**/
/**                      Imports                         **/
/**======================================================**/
/******************** Library Requirements *******************/
const express = require('express');

const ccolor = require('colors');
const path = require('path');

/******************** File imports *******************/
// controllers
const root = require('./controller/root').root;
// database
// require('./model/data');


/**======================================================**/
/**                 Server Configuration                 **/
/**======================================================**/
const PORT = 3000;

// Disable X-POWERED-BY in header
root.disable('x-powered-by');

// Listen at port localhost:3000
root.listen(PORT, () => {
    console.log('>> API server is running at port 3000...'.blue);
});

