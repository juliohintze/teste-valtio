import { useState } from 'react'
import { useSnapshot } from 'valtio';

import './App.css'
import { Toppings } from './components/Toppings'
import { setNewSelected } from './store/controller';
import { toppingsState } from './store/state';

function App() {
  const snap = useSnapshot(toppingsState);
  
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const onAccept = (selected: Record<string, boolean>) => {
    setNewSelected(selected);
    hideModal();
  }

  return (
    <div>
      <h1>Seu pedido está quase pronto!</h1>

      <p>
        Adicione abaixo as coberturas extras para o seu sorvete!
      </p>

      <ul>
        {snap.selectedArray.map(top => (
          <li key={top.id}>
            {top.text} (+R$ {top.price.toFixed(2)})
          </li>
        ))}

        {!snap.selectedArray.length && (
          <li>
            Sem cobertura
          </li>
        )}
      </ul>

      <button onClick={showModal}>Adicionar cobertura</button>

      <p>
        Total a pagar pelas coberturas: R$ {snap.total.toFixed(2)}
      </p>

      <Toppings
        onAccept={onAccept}
        onCancel={hideModal}
        onBackgroundClick={hideModal}
        initialSelected={snap.selected}
        modalVisible={modalVisible}
      />
    </div>
  )
}

export default App
