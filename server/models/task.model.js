const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
  title: { type: String },
  description: { type: String },
  done: { type: Boolean, default: false },
}, {
  timestamps: true,
});

module.exports = mongoose.model('task', taskSchema);
