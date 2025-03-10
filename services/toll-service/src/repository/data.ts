import { ITicket } from "../types/ticket";

class Data {
  private static _instance: Data;

  private pendingTickets: ITicket[] = [];
  private processedTickets: ITicket[] = [];

  private constructor() {
    //...
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  public getAllPendingTickets(): ITicket[] {
    return this.pendingTickets;
  }
}

export const data = Data.Instance;
