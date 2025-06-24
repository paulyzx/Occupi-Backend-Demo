import { IPaymentService } from "./interfaces/IPaymentService";
import { Payment } from "../db/entity/payment";
import { AppDataSource } from "../db/data-source";

export class PaymentService implements IPaymentService {
    private paymentRepository = AppDataSource.getRepository(Payment);

    async getPayments(customerId?: number): Promise<Payment[]> {
        const where = customerId ? { customer: { id: customerId } } : {};
        return this.paymentRepository.find({ where, relations: ["customer", "company"] });
    }

    async getPaymentById(id: number): Promise<Payment | null> {
        return this.paymentRepository.findOne({ where: { id }, relations: ["customer", "company"] });
    }

    async createPayment(payment: Payment) {
        const newPayment = this.paymentRepository.create(payment);
        await this.paymentRepository.save(newPayment);
        return newPayment;
    }

    async updatePayment(id: number, updates: Partial<Payment>) {
        await this.paymentRepository.update(id, updates);
        const updated = await this.paymentRepository.findOne({ where: { id } });
        return updated;
    }

    async removePayment(id: number) {
        await this.paymentRepository.delete(id);
    }
}


// const paymentRepository = AppDataSource.getRepository(Payment);

// export const getPayments = async (customerId?: number): Promise<Payment[]> => {
//     const where = customerId ? { customer: { id: customerId } } : {};
//     return paymentRepository.find({ where, relations: ["customer", "company"] });
// };

// export const getPaymentById = async (id: number): Promise<Payment | null> => {
//     return paymentRepository.findOne({ where: { id }, relations: ["customer", "company"] });
// };

// export const createPayment = async (payment: Payment) => {
//     const newPayment = paymentRepository.create(payment);
//     await paymentRepository.save(newPayment);
//     return newPayment;
// };

// export const update = async (id: number, updates: Partial<Payment>) => {
//     await paymentRepository.update(id, updates);
//     const updated = await paymentRepository.findOne({ where: { id } });
//     return updated;
// };

// export const remove = async (id: number) => {
//     await paymentRepository.delete(id);
// };