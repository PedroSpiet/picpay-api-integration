import Api from './api';
import { ICancel } from './interfaces/ICancel';
import ICancelResponse from './interfaces/ICancelResponse';
import { IPayload } from './interfaces/IPayload';
import IPaymentResponse from './interfaces/IPaymentResponse';
import IErrorResponse from './interfaces/IStatusResponse';
import IStatusResponse from './interfaces/IStatusResponse';

export default class Payment {
  public httpClient: any;

  public picpayToken: string;

  public sellerToken: string;

  constructor(picpayToken: string, sellerToken: string) {
    this.picpayToken = picpayToken;
    this.sellerToken = sellerToken;

    this.httpClient = new Api(this.picpayToken, this.sellerToken);
  }

  /**
   * Solicitar o pagamento de um pedido no PicPay
   *
   * @param {IPayload} payload
   */

  async send(payload: IPayload): Promise<IPaymentResponse | IErrorResponse> {
    const uri = '/payments';
    const response = await this.httpClient.post(uri, payload);

    return response;
  }

  /**
   * cancelamento/estorno de um pedido
   */

  async cancel(body: ICancel): Promise<ICancelResponse | IErrorResponse> {
    const uri = `/payments/${body.referenceId}/cancellations`;

    const response = await this.httpClient.post(uri, body);
 
    return response;
  }

  /**
   * consultar o status de uma transação.
   *
   * @param {string} referenceId Identificador da transação
   */

  async status(referenceId: string): Promise<IStatusResponse | IErrorResponse> {
    const uri = `/payments/${referenceId}/status`;
    const response = await this.httpClient.get(uri);

    return response;
  }
}
