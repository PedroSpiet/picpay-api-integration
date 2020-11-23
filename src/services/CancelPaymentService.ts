import { getRepository } from "typeorm";
import Payments from "../models/Payments";
import Payment from "../providers/picpay/payment";
import AppError from "../shared/errors/AppError";

export default class CancelPaymentService {
  public async execute(id: string): Promise<void> {
    const paymentRepository = getRepository(Payments);
    const payment = await paymentRepository.findOne({
      where: { referenceId: id },
    });
    if (!payment) {
      throw new AppError('Payment not found', 401);
    }

    const xPicPayToken = process.env.XPIC_PAY_TOKEN || 'default';

    const xSellerToken = process.env.X_SELLER_TOKEN || 'default';

    const PaymentsController = new Payment(xPicPayToken, xSellerToken);
    const cancelPayment = await PaymentsController.cancel(payment);

    if (!cancelPayment) {
      throw new AppError('Failed', 500);
    }

    /*
     *if you want to remove
     *canceled orders from
     *the database, just
     *uncomment this code below.
     */
    // const removePayment = await paymentRepository.remove(payment);
  }
}