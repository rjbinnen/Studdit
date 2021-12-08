// const assert = require('assert')
// const Thread = require('../src/thread')
// const {logger} = require("../src/config");
//
// describe('tests on the thread api calls', () => {
//     let thread;
//
//     it('should successfully add a thread', function (done) {
//         thread = new Thread({
//             title: "omelette du fromage",
//             content: 'Bier'
//         })
//         thread.save()
//             .then(() => {
//                 logger.debug(thread)
//                 assert(!thread.isNew)
//                 assert(thread.title)
//                 assert(thread.content)
//                 done();
//             })
//     });
//
//     xit('should successfully edit content', (done => {
//
//
//     }))
//
//
// })