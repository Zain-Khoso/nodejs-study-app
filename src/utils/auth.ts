// Lib Imports.
import { betterAuth } from 'better-auth';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';

// Local Imports.
import { env, database } from './config';

// Better Auth configuration.
export const auth = betterAuth({
  baseURL: env.BETTER_AUTH_URL,
  database: mongodbAdapter(database.connection.db!, {
    client: database.connection.getClient(),
    usePlural: true,
  }),
  trustedOrigins: [env.FRONTEND_ORIGIN],
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      accessType: 'offline',
      prompt: 'select_account consent',
    },
  },
  experimental: {
    joins: true,
  },
});
