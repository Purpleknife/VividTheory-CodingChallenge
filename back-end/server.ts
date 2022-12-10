// Load .env data:
import dotenv from 'dotenv';
dotenv.config();

const db = require('./connection');
import express, { Express } from 'express';

const app: Express = express();
const port = process.env.PORT || 8080;


app.listen(port, () => {
  console.log(`Express is listening on port ${port}!`);
});
