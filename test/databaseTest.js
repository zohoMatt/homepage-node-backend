/**
 * Created by hao.zuo on 2017/8/10.
 */
/******************** Library *******************/
const mocha     = require('mocha');         // Not necessarily
const assert    = require('assert');

/******************** Functions to test *******************/
const getAllProjectsAsync   = require('../model/projectDataHandler').getAllProjectsAsync;
const getProjectAsync       = require('../model/projectDataHandler').getProjectAsync;

/******************** File *******************/
describe('MongoDB database tests', () => {
    // This is not a quite reliable test.
    it('should get at least 3 project info', (done) => {
        getAllProjectsAsync().then((res) => {
            assert(res.length >= 3);
            done();
        });
    });

    it('should get proper result with query params', (done) => {
        getProjectAsync({id: 'PF001'}).then((res) => {
            assert(res.length > 0);
            assert(res[0].pname === 'mattzo.life');
            done();
        });
    });
});