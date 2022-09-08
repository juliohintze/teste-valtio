import { MouseEvent, useState } from "react";

import { TOPPINGS_ARRAY, TOPPINGS_MAP } from "../../consts/toppings";
import { calcTotal } from "../../helpers/calc-total";
import { toToppingsArray } from "../../helpers/to-toppings-array";
import { makeModal } from "../../hoc/make-modal";
import { TTopping } from "../../types/topping";

import './toppings.css';

interface ToppingsProps {
  onAccept(selected: Record<string, boolean>): void;
  onCancel(): void;
  initialSelected: Record<string, boolean>;
}

export const Toppings = makeModal<ToppingsProps>(function ToppingsContent({
  initialSelected,
  onAccept,
  onCancel,
}) {
  const onModalClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }
  const [selected, setSelected] = useState({ ...initialSelected });
  const total = calcTotal(toToppingsArray(selected));
  const onChange = (topping: TTopping, checked: boolean) => {
    setSelected(oldSelected => ({
      ...oldSelected,
      [topping.id]: checked,
    }));
  }
  const allSelected = Object.values(selected).every(value => value);
  const toggleAll = () => {
    const newChecked = !allSelected;

    setSelected(
      Object.keys(TOPPINGS_MAP)
        .reduce((obj, key) => ({ ...obj, [key]: newChecked }), {})
    );
  }

  return (
    <div className="toppings" onClick={onModalClick}>
      <h2>Coberturas</h2>

      <ul>
        <li>
          <label>
            <input
              type="checkbox"
              checked={allSelected}
              onChange={toggleAll}
            />

            Selecionar tudo
          </label>
        </li>
        {TOPPINGS_ARRAY.map(top => (
          <li key={top.id}>
            <label>
              <input
                type="checkbox"
                checked={selected[top.id] || false}
                onChange={(e) => onChange(top, e.target.checked)}
              />

              {top.text} (+R$ {top.price.toFixed(2)})
            </label>
          </li>
        ))}
      </ul>

      <p>
        Total: R$ {total.toFixed(2)}
      </p>
      
      <div className="toppings-options">
        <button onClick={onCancel}>Cancelar</button>
        <button onClick={() => onAccept(selected)}>Concluir</button>
      </div>
    </div>
  )
});
