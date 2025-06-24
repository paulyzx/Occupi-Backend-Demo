import { PaymentService } from "./services/paymentService";
import { createPaymentController } from "./controllers/payment";
import { CompanyService } from "./services/companyService";
import { createCompanyController } from "./controllers/company";
import { CustomerService } from "./services/customerService";
import { createCustomerController } from "./controllers/customer";

const paymentService = new PaymentService();
export const paymentController = createPaymentController(paymentService);

const companyService = new CompanyService();
export const companyController = createCompanyController(companyService);

const customerService = new CustomerService();
export const customerController = createCustomerController(customerService);