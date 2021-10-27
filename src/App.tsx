import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
const App = () => {
  
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Atividade Exemplo', done: false},
   
  ]);
  return (
    <>
  <C.Container>
    <C.Area>
      <C.Header>Lista de Tarefas</C.Header>

      {/*Area de adicionar*/}
      
      {list.map((item, index) => (
        <C.Lista>{item.name}</C.Lista>
      ))}

    </C.Area>
  </C.Container>
    </>
  )
}

export default App;