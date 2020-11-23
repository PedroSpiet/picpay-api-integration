import { getRepository } from 'typeorm';
import ICreatePaymentDTO from '../DTOs/ICreatePaymentDTO';
import Payments from '../models/Payments';


export default class CreatePaymentService {
  public async execute({
    referenceId,
    paymentUrl,
    value,
    expiresAt,
  }: ICreatePaymentDTO): Promise<Payments> {
    const PaymentRepository = getRepository(Payments);

    const data = {
      referenceId,
      paymentUrl,
      value,
      expiresAt,
    };

    const payment = PaymentRepository.create(data);

    await PaymentRepository.save(payment);

    return payment;
  }
}