const assert = require('assert')
const Thread = require('../src/thread')
const {logger} = require("../src/config");

describe('deleting thread tests', () => {
    let testThread;

    beforeEach((done) => {
        logger.log('test')
        testThread = new Thread({
            title: "test",
            content: "test"
        })
        testThread.save()
            .then(() => {
                logger.log('test thread added')
                done()
            })
    })

    it('should successfully delete a thread using findById', function (done) {
        Thread.findByIdAndRemove(testThread._id)
            .then(() => {
                Thread.findOne({title: testThread.title})
            })
            .then((post) => {
                logger.debug(post)
                assert(post === undefined)
                done()
            })
    });

    it('should ', function () {
        //test test
    });
})