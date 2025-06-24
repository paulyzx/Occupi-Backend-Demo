import { AppDataSource } from "../db/data-source";
import { Customer } from "../db/entity/customer";
import { ICustomerService } from "./interfaces/ICustomerService";

export class CustomerService implements ICustomerService {
    private customerRepository = AppDataSource.getRepository(Customer);

    async getAll(): Promise<Customer[]> {
        return this.customerRepository.find({ relations: ["payments"] });
    }

    async getOne(id: number): Promise<Customer | null> {
        return this.customerRepository.findOne({
            where: { id },
            relations: ["payments"],
        });
    }

    async create(customer: Customer): Promise<Customer> {
        const newCustomer = this.customerRepository.create(customer);
        await this.customerRepository.save(newCustomer);
        return newCustomer;
    }

    async update(id: number, updates: Partial<Customer>): Promise<Customer | null> {
        await this.customerRepository.update(id, updates);
        return this.customerRepository.findOne({ where: { id } });
    }

    async remove(id: number): Promise<void> {
        await this.customerRepository.delete(id);
    }
}
