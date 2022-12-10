"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
module.exports = (db) => {
    // Route to fetch blogs count to setup number of pages in the front-end:
    router.get('/blogs', (req, res) => {
        const queryString = `
      SELECT COUNT(*) FROM blogs
      WHERE published_at IS NOT NULL;
      `;
        db.query(queryString)
            .then((data) => {
            res.json(data.rows[0]);
        })
            .catch((error) => {
            console.log(error.message);
        });
    });
    // Route to fetch ALL blogs:
    router.get('/blogs/:page', (req, res) => {
        const page = req.params.page;
        const limitPerPage = 6;
        let offset = 0;
        if (Number(page) >= 2) {
            offset = limitPerPage * (Number(page) - 1);
        }
        const queryString = `
      SELECT * FROM blogs
      WHERE published_at IS NOT NULL
      ORDER BY published_at DESC
      LIMIT ${limitPerPage} OFFSET ${offset};
      `;
        db.query(queryString)
            .then((data) => {
            console.log('blogs in back-end', data.rows);
            res.json(data.rows);
        })
            .catch((error) => {
            console.log(error.message);
        });
    });
    return router;
};
