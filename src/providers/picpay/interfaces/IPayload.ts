import IBuyer from './IBuyer';

export default interface IPayload {
  referenceId: string;
  value: number;
  callbackUrl: string;
  buyer: IBuyer;
  expiresAt?: string;
  returnUrl?: string;
}