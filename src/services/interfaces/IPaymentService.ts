export interface IPaymentService {
    getPayments(customerId?: number): Promise<any[]>;
    getPaymentById(id: number): Promise<any>;
    createPayment(payment: any): Promise<any>;
}