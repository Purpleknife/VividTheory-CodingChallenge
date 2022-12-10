// Load .env data:
import dotenv from 'dotenv';
dotenv.config();

const db = require('./connection');
import express, { Express } from 'express';
import bodyParser from 'body-parser';

const app: Express = express();
const port = process.env.PORT || 8080;

// Express Configuration
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
const blogRoutes = require('./routes/blogs');
app.use('/', blogRoutes(db));

app.listen(port, () => {
  console.log(`Express is listening on port ${port}!`);
});
