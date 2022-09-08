import { proxy } from 'valtio';
import { TOPPINGS_ARRAY } from '../consts/toppings';

import { TTopping } from '../types/topping';
import { effects } from './effects';

export const toppingsState = proxy({
  selected: TOPPINGS_ARRAY.reduce((obj, top) => ({
    ...obj,
    [top.id]: false,
  }), {} as Record<string, boolean>),
  selectedArray: [] as TTopping[],
  total: 0,
});

export type ToppingsState = typeof toppingsState;

effects.forEach(fn => fn(toppingsState));
