import type { IVehicle } from '@/types/vehicle'

export interface ITicket {
  booth: number
  vehicle: IVehicle
  tollAmount: number
  isProcessed: boolean
}
