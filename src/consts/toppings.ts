import { TTopping } from "../types/topping";

export const TOPPINGS_ARRAY: TTopping[] = [
  { id: '1', price: 0.5, text: 'Chocolate' },
  { id: '2', price: 1, text: 'Morango' },
  { id: '3', price: 1, text: 'Limão' },
  { id: '4', price: 1, text: 'Cereja' },
  { id: '5', price: 2, text: 'Leite condensado' },
];

export const TOPPINGS_MAP: Record<string, TTopping> = TOPPINGS_ARRAY.reduce((obj, top) => ({
  ...obj,
  [top.id]: top,
}), {});
