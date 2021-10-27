import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/Listitem/index';
import { AddArea } from './components/Listitem/AddArea'; 
const App = () => {
  
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Atividade Exemplo', done: false},
    { id: 1, name: 'Atividade Exemplo 2', done: false }
   
  ]);
  return (
    <>
  <C.Container>
    <C.Area>
      <C.Header>Lista de Tarefas</C.Header>

      <AddArea />
        
      {list.map((item, index) => (
        
        <ListItem key={index} item={item} />
        
      ))}

    </C.Area>
  </C.Container>
    </>
  )
}

export default App;