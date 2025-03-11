import { IBooth } from "../types/booth";

export function getDemoBooths(): IBooth[] {
  return [
    {
      boothId: 1,
      header: "Semi Trucks",
      isOpen: true,
    },
    {
      boothId: 2,
      header: "Sedans & Suvs",
      isOpen: true,
    },
    {
      boothId: 3,
      header: "Sedans & Suvs",
      isOpen: true,
    },
    {
      boothId: 4,
      header: "Emergency Responders",
      isOpen: true,
    },
  ];
}
