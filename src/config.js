const mongoose = require('mongoose')
const logger = require('tracer').colorConsole({level: 1})
module.exports = {
    mongoose, logger
}