var emitter = require('./index.js');

var notifications = {
  counter: 0,
  count: function() {
    this.counter++;
  }
}

emitter
.on('new_notification', notifications, notifications.count)
.off('new_notification', {})
.on('new_notification', notifications, notifications.count);

emitter.emit('new_notification');

console.log(notifications.counter);

// 1