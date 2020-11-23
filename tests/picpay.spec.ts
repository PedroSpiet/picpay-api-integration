import IBuyer from "../src/providers/picpay/interfaces/IBuyer";
import IPayload from "../src/providers/picpay/interfaces/IPayload";
import Payment from "../src/providers/picpay/payment";

describe('Payments', () => {
  const xPicPayToken = 'Your PicPay Token';
  const xSellerToken = 'Your Seller PicPay Token';

  const refId = `dev-${Math.random().toString().slice(2)}`;

  const buyer: IBuyer = {
    firstName: 'Jon Doe',
    lastName: 'Doe',
    document: '11478945',
    email: 'programmer.jondoe@gmail.com',
    phone: '+5547898774265',
  };
  
  const payload: IPayload = {
    referenceId: refId,
    value: 2.51,
    callbackUrl: 'http://www.sualoja.com.br/callback',
    returnUrl: `http://www.sualoja.com.br/cliente/pedido/${refId}`,
    expiresAt: '2022-05-01T16:00:00-03:00',
    buyer,
  };

  const payment = new Payment(xPicPayToken, xSellerToken);

  it('Make Payment', async () => {
    const response = await payment.send(payload);
    expect(response).toMatchObject({ data: { referenceId: refId } });
  });

  it('Status Payment', async () => {
    const response = await payment.status(payload.referenceId);
    expect(response).toMatchObject({ data: { referenceId: refId } });
  });

  it('Cancel Payment', async () => {
    const response = await payment.cancel({ referenceId: payload.referenceId });
    expect(response).toMatchObject({ data: { referenceId: refId } });
  });
});
