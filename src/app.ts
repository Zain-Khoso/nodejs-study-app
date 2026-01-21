// Lib Imports.
import express from 'express';
import { toNodeHandler } from 'better-auth/node';

// Local Imports.
import { env } from './utils/config';
import { auth } from './utils/auth';

// Express Server Definition.
const app = express();

// Authentication.
app.all('/api/auth/*splat', toNodeHandler(auth));

// Dummy Route.
app.get('/', (_req, res) => res.send('Hello World!'));

// Running the server.
app.listen(env.PORT);
