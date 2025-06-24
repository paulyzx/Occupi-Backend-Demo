import { AppDataSource } from "../db/data-source";
import { Company } from "../db/entity/company";
import { ICompanyService } from "./interfaces/ICompanyService";

export class CompanyService implements ICompanyService {
    private companyRepository = AppDataSource.getRepository(Company);

    async getAll(): Promise<Company[]> {
        return this.companyRepository.find();
    }

    async getOne(id: number): Promise<Company | null> {
        return this.companyRepository.findOne({ where: { id } });
    }

    async create(company: Company): Promise<Company> {
        const newCompany = this.companyRepository.create(company);
        await this.companyRepository.save(newCompany);
        await this.exportCompanyToIntegration(newCompany);
        return newCompany;
    }

    async exportCompanyToIntegration(company: Company): Promise<void> {
        // This is a template function meant to simulate exporting a company
        // to a third party integration.
        console.log("Company successfully exported.", company);
    }
}
