import { Router } from "express";
import asyncHandler from "express-async-handler";
import { companyController } from "../controllerRegistry";

const CompanyRouter = Router();

CompanyRouter.get(
  "/:id",
  asyncHandler(async (req: any, res: any): Promise<void> => {
    try {
      const company = await companyController.getOne(req.params.id);
      res.status(200).send({
        status: 200,
        body: company,
      });
    } catch (error) {
      res.status(500).send({
        status: 500,
        body: "There was an error finding this company.",
      });
    }
  })
);

CompanyRouter.get(
  "/",
  asyncHandler(async (_, res: any): Promise<void> => {
    try {
      const companies = await companyController.getAll();
      res.status(200).send({
        status: 200,
        body: companies,
      });
    } catch (error) {
      res.status(500).send({
        status: 500,
        body: "There was an error finding companies.",
      });
    }
  })
);

CompanyRouter.post(
  "/",
  asyncHandler(async (req: any, res: any): Promise<void> => {
    try {
      const newCompany = await companyController.create(req.body);
      res.status(200).send({
        status: 200,
        body: newCompany,
      });
    } catch (error) {
      console.log("error", error);
      res.status(500).send({
        status: 500,
        body: "There was an error creating a company.",
      });
    }
  })
);

export default CompanyRouter;
