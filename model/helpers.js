/**
 * Created by hao.zuo on 2017/8/17.
 */

/**======================================================**/
/**                     Helpers                          **/
/**======================================================**/
const removeAttrs = (docWithTag) => {
  delete docWithTag._id;
  delete docWithTag.__v;
  docWithTag.tagList.map((tag) => {
    return tag.tag;
  });
  return docWithTag;
};



/******************** Exports *******************/
exports.removeAttrs = removeAttrs;