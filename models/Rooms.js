
const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomSchema = new Schema({
  roomNumber: {
    type: Number,
    required: true,
    unique: true
  },
  type: {
    type: String,
    enum: ['studio', 'single', 'double'],
    required: true
  },
  maxOccupancy: {
    type: Number,
    required: true
  },
  additionalFeatures: {
    type: Map,
    of: String
  },
  isAvailable: {
    type: Boolean,
    required: true,
    default: true
  },
  lastModifiedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  modificationHistory: [{
    modifiedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    modifiedAt: {
      type: Date,
      default: Date.now
    }
  }]
}, { timestamps: true });

const Rooms = mongoose.model('Rooms', roomSchema);

module.exports = Rooms;
