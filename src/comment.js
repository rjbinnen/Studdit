const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const commentSchema = new Schema({
    content: String,
    upvotes: "Number",
    downvotes: "Number",
    originalComment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }

})

module.exports = mongoose.model('Comment', commentSchema)