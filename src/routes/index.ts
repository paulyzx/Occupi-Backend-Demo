import { Router } from "express";
import HealthCheckRouter from "./healthcheck";
import CompanyRouter from "./company";
import CustomerRouter from "./customers";
import PaymentRouter from "./payment";

const router = Router();

router.use("/", HealthCheckRouter);
router.use("/companies", CompanyRouter);
router.use("/customers", CustomerRouter);
router.use("/payments", PaymentRouter);

export default router;
