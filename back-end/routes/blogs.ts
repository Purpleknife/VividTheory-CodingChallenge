import express, { Express, Request, Response } from 'express';
const router  = express.Router();

module.exports = (db: any) => {

  // Route to fetch blogs count to setup number of pages in the front-end:
  router.get('/blogs', (req: Request, res: Response) => {
    const queryString: string = `
      SELECT COUNT(*) FROM blogs
      WHERE published_at IS NOT NULL;
      `;

    db.query(queryString)
      .then((data: any) => {
        res.json(data.rows[0]);
      })
      .catch((error: Error) => {
        console.log(error.message);
      });
  });



  // Route to fetch ALL blogs:
  router.get('/blogs/:page', (req: Request, res: Response) => {
    const page: string = req.params.page;
    const limitPerPage: number = 6;
    let offset: number = 0;

    if (Number(page) >= 2) {
      offset = limitPerPage * (Number(page) - 1);
    }

    const queryString: string = `
      SELECT * FROM blogs
      WHERE published_at IS NOT NULL
      ORDER BY published_at DESC
      LIMIT ${limitPerPage} OFFSET ${offset};
      `;

    db.query(queryString)
      .then((data: any) => {
        res.json(data.rows);
      })
      .catch((error: Error) => {
        console.log(error.message);
      });
  });


  // Route to fetch a specific blog depending on its slug:
  router.get('/:slug', (req: Request, res: Response) => {
    const slug: string = req.params.slug;

    const queryParams: string[] = [slug];

    const queryString: string = `
      SELECT * FROM blogs
      WHERE published_at IS NOT NULL
      AND slug = $1;
      `;

    db.query(queryString, queryParams)
      .then((data: any) => {
        res.json(data.rows[0]);
      })
      .catch((error: Error) => {
        console.log(error.message);
      });
  });


  return router;
}