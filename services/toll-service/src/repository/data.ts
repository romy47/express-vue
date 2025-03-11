import { IBooth } from "../types/booth";
import { ITicket } from "../types/ticket";
import { IVehicle } from "../types/vehicle";
import { getDemoBooths } from "./demo-data";

class Data {
  private static _instance: Data;

  private pendingTickets: ITicket[] = [];
  private processedTickets: ITicket[] = [];
  private pendingVehicles: IVehicle[] = [];
  private availableBooths: IBooth[] = [];

  private constructor() {
    this.availableBooths = getDemoBooths();
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  public getAllPendingTickets(): ITicket[] {
    return this.pendingTickets;
  }

  public getAllBooths(): IBooth[] {
    return this.availableBooths;
  }

  public updateBooth(booth: IBooth) {
    this.availableBooths = this.availableBooths.map((ab) =>
      ab.boothId === booth.boothId ? booth : ab
    );
  }
}

export const data = Data.Instance;
