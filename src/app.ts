// Lib Imports.
import express from 'express';
import { toNodeHandler } from 'better-auth/node';
import cors from 'cors';

// Local Imports.
import { env } from './utils/config';
import { auth } from './utils/auth';
import { session } from './utils/session.middleware';

// Express Server Definition.
const app = express();

// CORS Policy.
app.use(
  cors({
    origin: env.FRONTEND_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  })
);

// Better-Auth handler.
app.all('/api/auth/*splat', toNodeHandler(auth));

// Middlewares.
app.use(express.json());
app.use(session);

// Running the server.
app.listen(env.PORT);
