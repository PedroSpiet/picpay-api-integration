import { getRepository } from "typeorm";
import PaymentModel from "../models/Payments";
import Payment from "../providers/picpay/payment";
import AppError from "../shared/errors/AppError";

export default class ShowPaymentService {
  public async execute(id: string): Promise<any> {
    const paymentRepository = getRepository(PaymentModel);
    const payment = await paymentRepository.findOne({
      where: { referenceId: id },
    });

    if (!payment) {
      throw new AppError('Payment not found', 401);
    }

    const xPicPayToken = process.env.XPIC_PAY_TOKEN || 'default';

    const xSellerToken = process.env.X_SELLER_TOKEN || 'default';

    const PaymentsController = new Payment(xPicPayToken, xSellerToken);

    const showPayment = await PaymentsController.status(payment.referenceId);

    // console.log(showPayment);

    if (!showPayment) {
      throw new AppError('Failed', 500);
    }

    return showPayment;
  }
}