import express from 'express';
import { json } from 'body-parser';
import { defaultAPI } from './routes/default';

// initialize express
const app = express();
app.use(json());

// initialize routes
app.use(defaultAPI);

export { app };
