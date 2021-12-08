const mongoose = require('mongoose')
const {Schema} = require("mongoose");
const CommentSchema = require('./comment').schema

const ThreadSchema = new Schema({
    title: {
        type: String,
        required: [true, 'A title is required']
        //TODO can not be changed
    },
    content: {
        type: String,
        required: [true, 'Content is required']
    },
    upvotes: "Number",
    downvotes: "Number",
    comments: [CommentSchema]
    //TODO check if this is embedded correctly

    // comments: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Comment"
    // }]
 }
)

module.exports = mongoose.model('Thread', ThreadSchema)