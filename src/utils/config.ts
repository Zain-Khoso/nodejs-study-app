// Reads environment variables.
import 'dotenv/config';

// Lib Imports.
import mongoose from 'mongoose';

// Type definition for environment variables.
type EnvironmentVariables = {
  NODE_ENV: string;
  PORT: number;
  MONGO_URI: string;
  MONGO_DB: string;
};

// Type-safe access to environment variables.
const env: EnvironmentVariables = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT ? parseInt(process.env.PORT) : 8000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017',
  MONGO_DB: process.env.MONGO_DB || 'preplus',
};

const database = await mongoose.connect(env.MONGO_URI, { dbName: env.MONGO_DB });

export { env, database };
