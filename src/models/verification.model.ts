// Lib Imports.
import { Schema, model } from 'mongoose';

// Verification Schema.
const schema = new Schema(
  {
    _id: String,
    identifier: { type: String, required: true },
    value: { type: String, required: true },
    expiresAt: { type: Date, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
  },
  { _id: false, timestamps: false }
);

// Verification model definition.
export default model('verification', schema);
