// Lib Imports.
import { Schema, model } from 'mongoose';

// Session Schema.
const schema = new Schema(
  {
    _id: String,
    userId: { type: String, required: true, ref: 'User' },
    token: { type: String, required: true, unique: true },
    expiresAt: { type: Date, required: true },
    ipAddress: String,
    userAgent: String,
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
  },
  { _id: false, timestamps: false }
);

// Session model definition.
export default model('session', schema);
