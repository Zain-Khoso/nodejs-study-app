// Lib Imports.
import { betterAuth } from 'better-auth';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';

// Local Imports.
import { database } from './config';

// Better Auth configuration.
export const auth = betterAuth({
  database: mongodbAdapter(database.connection.db!),
});
