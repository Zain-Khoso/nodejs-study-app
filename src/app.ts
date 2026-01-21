// Lib Imports.
import express from 'express';
import { toNodeHandler } from 'better-auth/node';
import cors from 'cors';

// Local Imports.
import { env } from './utils/config';
import { auth } from './utils/auth';

// Express Server Definition.
const app = express();

// Authentication.
app.all('/api/auth/*splat', toNodeHandler(auth));

// Middlewares.
app.use(
  cors({
    origin: env.FRONTEND_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  })
);
app.use(express.json());

// Running the server.
app.listen(env.PORT);
