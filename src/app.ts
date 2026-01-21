// Lib Imports.
import express from 'express';
import mongoose from 'mongoose';

// Local Imports.
import { env } from './utils/config';

// Express Server Definition.
const app = express();

// Dummy Route.
app.get('/', (_req, res) => res.send('Hello World!'));

mongoose.connect(env.MONGO_URI, { dbName: env.MONGO_DB });

// Running the server.
app.listen(env.PORT);
