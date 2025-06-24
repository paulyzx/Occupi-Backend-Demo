import { ICompanyService } from "../services/interfaces/ICompanyService";

export const createCompanyController = (companyService: ICompanyService) => ({
  getAll: () => companyService.getAll(),
  getOne: (id: number) => companyService.getOne(id),
  create: (company: any) => companyService.create(company),
  exportCompanyToIntegration: (company: any) => companyService.exportCompanyToIntegration(company)
});
