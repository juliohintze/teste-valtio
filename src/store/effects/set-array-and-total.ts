import { subscribe } from 'valtio';

import { calcTotal } from '../../helpers/calc-total';
import { toToppingsArray } from '../../helpers/to-toppings-array';
import { ToppingsState } from '../state';

export function setArrayAndTotal(state: ToppingsState) {
  return subscribe(state.selected, () => {
    const array = toToppingsArray(state.selected);
  
    const total = calcTotal(array);
  
    state.selectedArray.length = 0;
    state.selectedArray.push(...array);
    state.total = total;
  });
}
