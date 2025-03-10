import { IVehicle } from "./vehicle";

export interface ITicket {
  booth: number;
  vehicle: IVehicle;
  tollAmount: number;
  isProcessed: boolean;
}
