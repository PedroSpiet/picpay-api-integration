import { Request, Response } from 'express';
import IBuyer from '../providers/picpay/interfaces/IBuyer';
import  IPayload  from '../providers/picpay/interfaces/IPayload';
import Payment from '../providers/picpay/payment';
import CreatePaymentService from '../services/CreatePaymentService';
import ShowPaymentService from '../services/ShowPaymentService';

export default class IntegrationApiController {
  public async payment(req: Request, res: Response): Promise<Response> {

    const xPicPayToken = process.env.XPIC_PAY_TOKEN || 'default';

    const xSellerToken = process.env.X_SELLER_TOKEN || 'default';

    const refId = `${Math.random().toString().slice(2)}`;

    const buyer: IBuyer = {
      firstName: req.body.buyer.firstName,
      lastName: req.body.buyer.lastName,
      document: req.body.buyer.document,
      email: req.body.buyer.email,
      phone: req.body.buyer.phone,
    };

    const payload: IPayload = {
      referenceId: refId,
      value: req.body.value,
      callbackUrl: `http://www.sualoja.com.br/callback`,
      returnUrl: `http://www.sualoja.com.br/cliente/pedido/${refId}`,
      expiresAt: req.body.expiresAt,
      buyer,
    };

    const payment = new Payment(xPicPayToken, xSellerToken);

    // console.log(payload);

    const resPayment = await payment.send(payload);

    console.log(resPayment);

    if (!resPayment) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const createPayment = new CreatePaymentService();

    const {
      referenceId,
      paymentUrl,
      expiresAt,
    } = resPayment.data;


    const paymenter = await createPayment.execute({
      expiresAt,
      paymentUrl,
      referenceId,
      value: req.body.value,
    });

    return res.json(resPayment);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const paymentShow = new ShowPaymentService();
    const resPayment = await paymentShow.execute(id);

    return res.status(200).json(resPayment);
  }
}
