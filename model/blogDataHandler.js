/**
 * Created by hao.zuo on 2017/8/17.
 */
const ccolor = require('colors');

const Blog = require('./Schema').Blog;

const removeAttrs = require('./helpers').removeAttrs;

/**======================================================**/
/**                     Interface                        **/
/**======================================================**/

/**
 *
 */
const getAllBlogsAsync = () => {
  return new Promise((resolve, reject) => {
    Blog.find({ public: true }).lean().exec(function(err, data) {
      // Handling error
      if (err) {
        reject(err);
        return;
      }
      // Modify data
      data.map((blog) => {
        removeAttrs(blog);
        blog.context = blog.context.slice(0, 100);
      });
      // Pass data forward
      resolve(data);
    });
  });
};



/*****************************************/
exports.getAllBlogsAsync = getAllBlogsAsync;