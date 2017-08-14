/**
 * Created by hao.zuo on 2017/8/10.
 */
/******************** Library *******************/
const mocha     = require('mocha');
const assert    = require('assert');

/******************** Functions to test *******************/
const getProjectsAsync    = require('../model/projectDataHandler').getProjectsAsync;

/******************** File *******************/
describe('MongoDB database tests', () => {
    // This is not a quite reliable test.
    it('should get at least 3 project info', () => {
        getProjectsAsync().then((res) => {
            assert(res.length >= 3);
        });
    });
});