const { Events } = require('../models');
const commentSchema = require('../models/Comments');

const resolvers = {
    Query: {
        // get calendar event by username
        events: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Events.find(params).sort({createdAt: -1 });
        },
        // get calendar event by id
        events: async (parent, { _id }) => {
            return Event.findOne({ _id });
        }
    },
    Mutation: {
        addEvent: async (parent, args) => {
            const event = await Events.create( { ...args, username: user.username });

            await Events.findByIdAndUpdate(
                { _id: event._id },
                { $push: { events: event._id } },
                { new: true }
            );

            return event;
        },
        updateEvent: async (parent, { _id }) => {
            return Event.findOneAndUpdate({ _id });
        },
        // deleteEvent
        addComment: async (parent, { eventId, commentBody }) => {
            const updatedEvent = await Events.findByIdAndUpdate(
                { _id: event._id },
                { $push: { comments: { commentBody, username: user.username }}},
                { new: true, runValidators: true }
            );

            return updatedEvent;
        },
        updateComment: async (parent, { _id }) => {
            return Comment.findOneAndUpdate({ _id });
        }
        // deleteComment
    }
};

module.exports = resolvers;