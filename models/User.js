
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  googleId: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum: ['owner', 'worker'],
    required: true
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
