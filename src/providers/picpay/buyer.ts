import IBuyer from './interfaces/IBuyer';

export default class Buyer {
  public firstName: string;

  public lastName: string;

  public document: string;

  public email: string;

  public phone: string;

  constructor(buyer: IBuyer) {
    this.document = buyer.document;
    this.email = buyer.email;
    this.firstName = buyer.firstName;
    this.lastName = buyer.lastName;
    this.phone = buyer.phone;
  }

}