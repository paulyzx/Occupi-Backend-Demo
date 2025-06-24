import { IPaymentService } from "../services/interfaces/IPaymentService";

export const createPaymentController = (paymentService: IPaymentService) => ({
  get: (customerId?: number) => paymentService.getPayments(customerId),
  getOne: (id: number) => paymentService.getPaymentById(id),
  create: (payment: any) => paymentService.createPayment(payment)
});
