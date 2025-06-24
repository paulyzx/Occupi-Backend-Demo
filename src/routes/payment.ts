import { Router } from "express";
import asyncHandler from "express-async-handler";
import { paymentController } from "../controllerRegistry";

const PaymentRouter = Router();

PaymentRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const payment = await paymentController.getOne(Number(req.params.id));
    res.status(200).send({
      status: 200,
      body: payment,
    });
  })
);

PaymentRouter.get(
  "/customer/:customerId",
  asyncHandler(async (req, res) => {
    const payments = await paymentController.get(Number(req.params.customerId));
    res.status(200).send({
      status: 200,
      body: payments,
    });
  })
);

PaymentRouter.get(
  "/",
  asyncHandler(async (_req, res) => {
    const payments = await paymentController.get();
    res.status(200).send({
      status: 200,
      body: payments,
    });
  })
);

PaymentRouter.post("/", asyncHandler(paymentController.create));

export default PaymentRouter;
