// Reads environment variables.
import 'dotenv/config';

// Lib Imports.
import mongoose from 'mongoose';

// Type definition for environment variables.
type EnvironmentVariables = {
  NODE_ENV: string;
  PORT: number;
  FRONTEND_ORIGIN: string;
  MONGO_URI: string;
  MONGO_DB: string;

  // Auth.
  BETTER_AUTH_SECRET: string;
  BETTER_AUTH_URL: string;

  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;

  DISCORD_CLIENT_ID: string;
  DISCORD_CLIENT_SECRET: string;

  FACEBOOK_CLIENT_ID: string;
  FACEBOOK_CLIENT_SECRET: string;

  TWITTER_CLIENT_ID: string;
  TWITTER_CLIENT_SECRET: string;
};

// Type-safe access to environment variables.
const env: EnvironmentVariables = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT ? parseInt(process.env.PORT) : 8000,
  FRONTEND_ORIGIN: process.env.FRONTEND_ORIGIN || 'http://locahost:3000',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017',
  MONGO_DB: process.env.MONGO_DB || 'preplus',

  // Auth.
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET!,
  BETTER_AUTH_URL: process.env.BETTER_AUTH_URL!,

  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID!,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET!,

  DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID!,
  DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET!,

  FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID!,
  FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET!,

  TWITTER_CLIENT_ID: process.env.TWITTER_CLIENT_ID!,
  TWITTER_CLIENT_SECRET: process.env.TWITTER_CLIENT_SECRET!,
};

const database = await mongoose.connect(env.MONGO_URI, { dbName: env.MONGO_DB });

export { env, database };
