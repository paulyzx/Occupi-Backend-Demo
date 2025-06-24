import { ICustomerService } from "../services/interfaces/ICustomerService";

export const createCustomerController = (customerService: ICustomerService) => ({
  getAll: () => customerService.getAll(),
  getOne: (id: number) => customerService.getOne(id),
  create: (customer: any) => customerService.create(customer),
  update: (id: number, updates: Partial<any>) => customerService.update(id, updates),
  remove: (id: number) => customerService.remove(id)
});
