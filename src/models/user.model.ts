// Lib Imports.
import { Schema, model } from 'mongoose';

// User Schema.
const schema = new Schema(
  {
    _id: String,
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    emailVerified: { type: Boolean, required: true },
    image: String,
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
  },
  { _id: false, timestamps: false }
);

// User model definition.
export default model('user', schema);
