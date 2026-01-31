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
  user: {
    additionalFields: {
      headline: {
        type: 'string',
        required: true,
        defaultValue: 'Hi there! I am new.',
      },
      currentStreak: {
        type: 'number',
        required: true,
        defaultValue: 0,
      },
      longestStreak: {
        type: 'number',
        required: true,
        defaultValue: 0,
      },
    },
  },
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      accessType: 'offline',
      prompt: 'select_account consent',
    },
    discord: {
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    },
    facebook: {
      clientId: env.FACEBOOK_CLIENT_ID,
      clientSecret: env.FACEBOOK_CLIENT_SECRET,
    },
    twitter: {
      clientId: env.TWITTER_CLIENT_ID,
      clientSecret: env.TWITTER_CLIENT_SECRET,
    },
  },
  trustedOrigins: [env.FRONTEND_ORIGIN],
  experimental: {
    joins: true,
  },
});
