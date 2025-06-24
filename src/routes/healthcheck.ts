import { Router } from "express";

const HealthCheckRouter = Router();

HealthCheckRouter.get("/health-check", (_req, res) => {
  res.status(200).send({
    status: 200,
    body: "The application is running and accessible.",
  });
});

export default HealthCheckRouter;
