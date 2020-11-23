import ITypeErro from "./ITypeError";

export default interface IErrorResponse {
  message: string;
  errors?: ITypeErro;
}