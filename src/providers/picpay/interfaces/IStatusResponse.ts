import { EStatus } from '../enums/EStatus';

export default interface IStatusResponse {
  authorizationId: string;
  referenceId: string;
  status: EStatus;
}
