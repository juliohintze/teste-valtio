import { MouseEvent } from "react";
import { COBERTURAS } from "../../consts/coberturas";
import { TCobertura } from "../../types/cobertura";
import './coberturas.css';

interface CoberturasProps {
  coberturasSelecionadas: Record<number, boolean>;
  toggleCobertura: (cobertura: TCobertura, selecionado: boolean) => void;
  onConcluir: () => void;
  total: number;
}

export function Coberturas({
  coberturasSelecionadas,
  onConcluir,
  toggleCobertura,
  total
}: CoberturasProps) {
  const onModalClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }

  return (
    <div className="coberturas-container" onClick={onConcluir}>
      <div className="coberturas" onClick={onModalClick}>
        <h2>Coberturas</h2>

        <ul>
          {COBERTURAS.map(cob => (
            <li key={cob.id}>
              <label>
                <input
                  type="checkbox"
                  checked={coberturasSelecionadas[cob.id]}
                  onChange={(e) => toggleCobertura(cob, e.target.checked)}
                />

                {cob.text} (+R$ {cob.price.toFixed(2)})
              </label>
            </li>
          ))}
        </ul>

        <p>
          Total: R$ {total.toFixed(2)}
        </p>

        <button onClick={onConcluir}>Concluir</button>
      </div>
    </div>
  )
}
