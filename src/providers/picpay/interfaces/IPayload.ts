import IBuyer from './IBuyer';

export interface IPayload {
  referenceId: string;
  value: number;
  callbackUrl: string;
  buyer: IBuyer;
  expiresAt?: string;
  returnUrl?: string;
}