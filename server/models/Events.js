const { Schema, model } = require('mongoose');
const commentSchema = require('./Comments');
const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema(
    {
        // id: {
            // id: _id
        // },
        eventTitle: {
            type: String,
            required: "Please add you event's information"
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        eventDay: {
            type: String,
        },
        eventTime: {
            type: Int,
        },
        eventLength: {
            type: int
        },
        comment: [commentSchema]
    },
    {
        toJson: {
            getters: true
        }
    }
);

eventSchema.virtual('commentCount').get(function() {
    return this.comments.length;
});

const Events = model('Events', eventSchema);

module.exports = Events;