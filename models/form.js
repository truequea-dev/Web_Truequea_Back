const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: {type: String, maxLength: 45},
  email: {type: String, maxLength: 45},
  phone: {type: String, maxLength: 45},
  message: {type: String, maxLength: 45}
});

module.exports = mongoose.model('form', formSchema);