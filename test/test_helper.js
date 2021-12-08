const config = require('../src/config')
const {logger} = require("../src/config");
const {mongoose} = require("../src/config");

mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connect('mongodb://localhost/studdit_test')
    mongoose.connection
        .once('open', () => {
            logger.log('connected')
            done();
        })
        .on('error', (error) => {
            logger.warn('Error', error)
        })
})

beforeEach((done) => {
    const {threads} = mongoose.connection.collections;
    threads.drop(() => {
        logger.info('thread test table dropped')
        done()
    });

})