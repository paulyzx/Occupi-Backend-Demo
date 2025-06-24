import { Customer } from "../../db/entity/customer";

export interface ICustomerService {
  getAll(): Promise<Customer[]>;
  getOne(id: number): Promise<Customer | null>;
  create(customer: Customer): Promise<Customer>;
  update(id: number, customer: Partial<Customer>): Promise<Customer | null>;
  remove(id: number): Promise<void>;
}