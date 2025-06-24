/* eslint-disable no-console */
import "dotenv/config";
import express from "express";
import cors from "cors";

import routes from "./routes";
import { AppDataSource } from "./db/data-source";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const PORT = 4444;

    app.use((req, res, next) => {
      express.json()(req, res, next);
    });
    app.use(express.urlencoded({ extended: true }));
    app.use(
      cors() // enable all for dev
    );

    app.use(routes);

    app.listen(PORT, () => {
      console.log(`Starting API`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
