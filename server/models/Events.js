const { Schema, model } = require('mongoose');
const commentSchema = require('./Comments');
const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema(
    {
        eventTitle: {
            type: String,
            required: "Please add a title to your event"
        },
        eventBody: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        eventDay: {
            type: String,
            required: true
        },
        eventStart: {
            type: Int,
            required: true
        },
        eventEnd: {
            type: Int,
            required: true
        },
        zoomLink: {
            type: String,
            required: false
        },
        timezone: {
            type: String,
            required: true
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
    return this.comment.length;
});

const Events = model('Events', eventSchema);

module.exports = Events;