// Lib Imports.
import express from 'express';

// Local Imports.
import { env } from './utils/config';

// Express Server Definition.
const app = express();

// Dummy Route.
app.get('/', (_req, res) => res.send('Hello World!'));

// Running the server.
app.listen(env.PORT);
