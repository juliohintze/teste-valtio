import { TTopping } from "../types/topping";

export function calcTotal(toppings: TTopping[]) {
  return toppings.reduce((total, top) => total + top.price, 0);
}