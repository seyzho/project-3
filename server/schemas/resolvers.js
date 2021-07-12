const { AuthenticationError} = require("apollo-server-express");
const { Events } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('coworkers')
                .populate('events');
      
              return userData;
            }
      
            throw new AuthenticationError('Not logged in');
          },
          users: async () => {
            return User.find()
              .select('-__v -password')
              .populate('coworkers')
              .populate('events');
          },
          user: async (parent, { username }) => {
            return User.findOne({ username })
              .select('-__v -password')
              .populate('coworkers')
              .populate('events');
          },
        // get all calendar event by username
        events: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Events.find(params).sort({ createdAt: -1 });
        },
        // get calendar event by id
        event: async (parent, { _id }) => {
            return Event.findOne({ _id });
        }
    },
    Mutation: {
        addEvent: async (parent, args, context) => {
            if (context.user) { 
                const event = await Events.create( { ...args, username: context.user.username });
    
                await User.findByIdAndUpdate(
                    { _id: context.event._id },
                    { $push: { events: event._id } },
                    { new: true }
                );
    
                return event;
            }

            throw new AuthenicationError("Please log in first");
        },
        updateEvent: async (parent, { _id }, context) => {
            if (context.user) {
                const updateEvent = await Events.findOneAndUpdate(
                    { _id: context.event._id},
                    { $push: { events: event._id}},
                    { new: true}
                );

                return updateEvent;
            }

            throw new AuthenicationError("Please log in first");
        },
        deleteEvent: async (parent, { _id }, context) => {
            if (context.user) {
                const deleteEvent = await Events.findOneAndDelete(
                    { _id: eventId },
                    { $pull: { events: event._id}},
                    { new: true }
                );

                return deleteEvent;
            }

            throw new AuthenicationError("Please log in first");
        },
        addComment: async (parent, { eventId, commentBody }, context) => {
            if (context.user) { 
            const updatedEvent = await Events.findOneAndUpdate(
                { _id: eventId },
                { $push: { comments: { commentBody, username: context.user.username }}},
                { new: true, runValidators: true }
            );

            return updatedEvent;
            }

            throw new AuthenticationError("Please log in first");
        },
        updateComment: async (parent, { _id }, context) => {
            if (context.user) {
                const updateComment = await Events.findOneAndUpdate(
                    { _id: context.event._id},
                    { $push: { events: event._id}},
                    { new: true}
                );

                return updateComment;
            }

            throw new AuthenicationError("Please log in first");
        },
        deleteComment: async (parent, { _id }, context) => {
            if (context.user) {
                const deleteComment = await Events.findOneAndDelete(
                    { _id: eventId },
                    { $pull: { events: event._id}},
                    { new: true }
                );

                return deleteComment;
            }

            throw new AuthenicationError("Please log in first");
        },
    }
};

module.exports = resolvers;