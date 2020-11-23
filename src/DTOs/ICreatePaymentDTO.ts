export default interface ICreatePaymentDTO {
  referenceId: string;
  paymentUrl: string;
  value: number;
  expiresAt: string;
}