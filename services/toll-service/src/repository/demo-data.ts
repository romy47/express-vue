import { IBooth } from "../types/booth";

export function getDemoBooths(): IBooth[] {
  return [
    {
      boothId: 1,
      header: "Sedan & Suvs",
      isOpen: true,
    },
  ];
}
