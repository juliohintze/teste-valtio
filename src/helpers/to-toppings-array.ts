import { TOPPINGS_MAP } from "../consts/toppings";

export function toToppingsArray(selectedToppings: Record<string, boolean>) {
  return Object.entries(selectedToppings)
    .filter(([, selected]) => selected)
    .map(([id]) => TOPPINGS_MAP[id]);
}