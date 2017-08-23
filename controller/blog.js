/**
 * Created by hao.zuo on 2017/8/17.
 */
const path = require('path');
const express = require('express');
const blogApi = express();

/******************** Model handlers *******************/
const getAllBlogsAsync = require('../model/blogDataHandler').getAllBlogsAsync;

/**======================================================**/
/**                  Pre-middleware                      **/
/**======================================================**/

/**======================================================**/
/**                    Project APIs                      **/
/**======================================================**/

/******************** GET *******************/
/**
 * @api {get} /api/blog/all Get all blog information details.
 * @apiName GetAllBlogs
 * @apiGroup Blog
 * @apiVersion 0.1.0
 *
 * @apiSuccess {Number}     id                          Response timestamp
 * @apiSuccess {Object[]}   list                        Container of results
 * @apiSuccess {String}     list.id                     ID of blog, unique.
 * @apiSuccess {String}     list.title                  Title of blog.
 * @apiSuccess {String}     list.archive                Archive folder for this blog.
 * @apiSuccess {String[]}   list.tagList                Tags for the blog; array.
 * @apiSuccess {String}     list.intro                  Brief summary for this blog
 */
blogApi.get('/all', (req, res) => {
  getAllBlogsAsync()
  .then((data) => {
    res.send({
      id: Date.now(),
      list: data
    })
  })
  .catch((err) => {
    console.log(`!! ERROR WHILE GETTING ALL BLOGS !! ${err}`.red);
  });
});


/**======================================================**/
/**                  Post-middleware                     **/
/**======================================================**/



/******************** Exports *******************/
exports.api = blogApi;