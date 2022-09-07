import { useMemo, useState } from 'react'
import './App.css'
import { Coberturas } from './components/Coberturas'
import { toCoberturasSelecionadasArray } from './helpers/to-coberturas-selecionadas-array';
import { TCobertura } from './types/cobertura';

function App() {
  const [coberturasSelecionadas, setCoberturasSelecionadas] = useState<Record<number, boolean>>({});
  const [coberturasVisiveis, setCoberturasVisiveis] = useState(false);
  const coberturasSelecionadasArray = useMemo(
    () => toCoberturasSelecionadasArray(coberturasSelecionadas),
    [coberturasSelecionadas]
  );
  const total = useMemo(
    () => coberturasSelecionadasArray.reduce((total, cob) => total + cob.price, 0),
    [coberturasSelecionadasArray]
  );

  const toggleCobertura = (cobertura: TCobertura, selecionado: boolean) => {
    setCoberturasSelecionadas(coberturas => ({
      ...coberturas,
      [cobertura.id]: selecionado
    }));
  }

  const showCoberturas = () => setCoberturasVisiveis(true);
  const hideCoberturas = () => setCoberturasVisiveis(false);

  return (
    <div>
      <h1>Seu pedido está quase pronto!</h1>

      <p>
        Adicione abaixo as coberturas extras para o seu sorvete!
      </p>

      <ul>
        {coberturasSelecionadasArray.map(cob => (
          <li key={cob.id}>
            {cob.text} (+R$ {cob.price.toFixed(2)})
          </li>
        ))}

        {!coberturasSelecionadasArray.length && (
          <li>
            Sem cobertura
          </li>
        )}
      </ul>

      <button onClick={showCoberturas}>Adicionar cobertura</button>

      <p>
        Total a pagar pelas coberturas: R$ {total.toFixed(2)}
      </p>

      {coberturasVisiveis && (
        <Coberturas
          coberturasSelecionadas={coberturasSelecionadas}
          onConcluir={hideCoberturas}
          toggleCobertura={toggleCobertura}
          total={total}
        />
      )}
    </div>
  )
}

export default App
