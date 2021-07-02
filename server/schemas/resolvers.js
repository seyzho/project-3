const { Events, Comments } = require('../models');

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
    }
};

module.exports = resolvers;