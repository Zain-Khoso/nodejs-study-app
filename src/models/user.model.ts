// Lib Imports.
import { Schema, model } from 'mongoose';

// User Schema.
const schema = new Schema(
  {
    // Better-Auth Fields.
    _id: String,
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    emailVerified: { type: Boolean, required: true },
    image: String,
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },

    // Custom Fields.
    headline: { type: String, required: true, default: 'Hi there! I am new.' },
    currentStreak: { type: Number, required: true, default: 0 },
    longestStreak: { type: Number, required: true, default: 0 },
  },
  { _id: false, timestamps: false }
);

// User model definition.
export default model('user', schema);
