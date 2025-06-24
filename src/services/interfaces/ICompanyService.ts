import { Company } from "../../db/entity/company";

export interface ICompanyService {
  getAll(): Promise<Company[]>;
  getOne(id: number): Promise<Company | null>;
  create(company: Company): Promise<Company>;
  exportCompanyToIntegration(company: Company): Promise<void>;
}