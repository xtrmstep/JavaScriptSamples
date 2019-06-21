var allEvents = {};

module.exports = {

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        if (!allEvents[event]) allEvents[event] = [];
        allEvents[event].push({
            ctx: subscriber,
            func: handler
        })
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        if (allEvents.hasOwnProperty(event)) {
            var handlers = [].slice.call(allEvents[event]);
            handlers = handlers.filter(item => item.ctx != subscriber);
            allEvents[event] = handlers;
        }
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        if (allEvents.hasOwnProperty(event)) {
            allEvents[event].forEach(item => item.func.call(item.ctx));
        }
        return this;
    }
};
