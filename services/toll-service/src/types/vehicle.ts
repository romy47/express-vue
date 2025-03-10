export enum VehicleType {
  MOTORBIKE,
  SEDAN,
  SUV,
  TRUCK,
  SEMITRUCK,
}
export interface IVehicle {
  licensePlate: string;
  type: VehicleType;
}
