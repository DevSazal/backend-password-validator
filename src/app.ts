import express, { Express } from 'express';
import { json } from 'body-parser';
import { defaultAPI } from './routes/default';
import { passwordValidatorAPI } from './routes/passwordValidator';

// initialize express
const app: Express = express();
app.use(json());

// initialize routes
app.use(defaultAPI);
app.use(passwordValidatorAPI);

export { app };
