// Reads environment variables.
import 'dotenv/config';

// Type definition for environment variables.
type EnvironmentVariables = {
  NODE_ENV: string;
  PORT: number;
};

// Type-safe access to environment variables.
const env: EnvironmentVariables = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT ? parseInt(process.env.PORT) : 8000,
};

export { env };
