import IQRcode from './IQRCode';

export default interface IPaymentResponse {
  referenceId: string;
  paymentUrl: string;
  expiresAt: Date;
  qrcode: IQRcode;
}