"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Load .env data:
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db = require('./connection');
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
// Express Configuration
app.use(express_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// Routes
const blogRoutes = require('./routes/blogs');
app.use('/', blogRoutes(db));
app.listen(port, () => {
    console.log(`Express is listening on port ${port}!`);
});
