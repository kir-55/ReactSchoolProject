import 'bootstrap/dist/css/bootstrap.min.css';

import TaskList from './TaskList.tsx';
import type { ItemProps } from './item/Item.tsx';
import { useState } from 'react';


function App(){
  const [title, setTitle] = useState("Item");
  const [tasks, setTasks] = useState<ItemProps[]>([]);

  function addItem(title: string){
    setTasks([...tasks, {key: tasks.length + 1, id: tasks.length, title: title, checked: false}]);
  }

  function onToggle(id: number, checked: boolean){
    tasks[id].checked = checked;
    setTasks([...tasks]);
  }
  
  return(
    <div>
      <div>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value) } />
        <button disabled={title.length === 0} onClick={() => {addItem(title);}}>Add Item</button>
      </div>


      <TaskList title="TO DO" items={tasks} onToggle={onToggle} />

      <div>Left to do: {tasks.filter((task) => !task.checked).length}</div>
    </div>
  );
}


export default App;
