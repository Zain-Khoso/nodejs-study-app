// Lib Imports.
import { Schema, model } from 'mongoose';

// Account Schema.
const schema = new Schema(
  {
    id: String,
    userId: { type: String, required: true, ref: 'user' },
    accountId: { type: String, required: true },
    providerId: { type: String, required: true },
    accessToken: String,
    refreshToken: String,
    accessTokenExpiresAt: Date,
    refreshTokenExpiresAt: Date,
    scope: String,
    idToken: String,
    password: String,
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
  },
  { _id: false, timestamps: false }
);

// Account model definition.
export default model('account', schema);
