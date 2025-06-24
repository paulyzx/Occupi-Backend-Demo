import "reflect-metadata";
import "dotenv/config";

import { DataSource } from "typeorm";
import { Company } from "./entity/company";
import { Payment } from "./entity/payment";
import { Customer } from "./entity/customer";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [Company, Customer, Payment],
  subscribers: [],
});
