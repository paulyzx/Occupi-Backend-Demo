import { Router } from "express";
import asyncHandler from "express-async-handler";
import { customerController } from "../controllerRegistry";

const CustomerRouter = Router();

CustomerRouter.get(
  "/:id",
  asyncHandler(async (req: any, res: any): Promise<void> => {
    try {
      const customer = await customerController.getOne(req.params.id);
      res.status(200).send({
        status: 200,
        body: customer,
      });
    } catch (error) {
      res.status(500).send({
        status: 500,
        body: "There was an error finding this customer.",
      });
    }
  })
);

CustomerRouter.get(
  "/",
  asyncHandler(async (_, res: any): Promise<void> => {
    try {
      const customers = await customerController.getAll();
      res.status(200).send({
        status: 200,
        body: customers,
      });
    } catch (error) {
      console.log("ERROR", error);
      res.status(500).send({
        status: 500,
        body: "There was an error finding customers.",
      });
    }
  })
);

CustomerRouter.post(
  "/",
  asyncHandler(async (req: any, res: any): Promise<void> => {
    try {
      const newCustomer = await customerController.create(req.body);
      res.status(200).send({
        status: 200,
        body: newCustomer,
      });
    } catch (error) {
      console.log("error", error);
      res.status(500).send({
        status: 500,
        body: "There was an error creating a customer.",
      });
    }
  })
);

export default CustomerRouter;
