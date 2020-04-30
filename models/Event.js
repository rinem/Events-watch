const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String, 
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  date: {
    type: String,
    
  }
});

module.exports = mongoose.model('event', EventSchema);
