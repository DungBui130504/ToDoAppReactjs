import { useState, useEffect, useRef } from 'react'
import './App.css'
import ToDoForm from './toDoForm'
import ToDoItem from './toDoItem';

function App() {
  //Khoi tao danh sach todo
  const [todos, setToDos] = useState([]);

  const addToDo = (text) => {
    //todo moi 
    const newToDo = {
      id: Date.now(),
      text: text,
      complete: false
    }

    //Them todo moi vua tao vao danh sach
    setToDos([...todos, newToDo]);
  }

  const deleteToDo = (id) => {
    setToDos(todos.filter(todo => todo.id !== id));
    console.log("Delete !!!");
  }

  const completeToDo = (id) => {
    // setToDos(todos.map(todo => { // Khong dung return phai bo ngoac {}
    //   todo.complete ? console.log('Incomplete !!!') : console.log('Completed !!');
    //   return todo.id === id ? { ...todo, complete: !todo.complete } : todo
    // }))

    setToDos(todos.map(todo => {
      if (todo.id === id) {
        console.log(todo.complete ? `${todo.text} is incompleted !!!` : `${todo.text} is completed !!`);
        return { ...todo, complete: !todo.complete }
      }
      else return todo;
    }))
  }

  return (
    <div id='app-container'>
      <h1>To Do App</h1>
      <ToDoForm addToDo={addToDo} />
      <ol>
        {
          todos.map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              onDelete={deleteToDo}
              onToggle={completeToDo}
            />
          ))
        }
      </ol>
    </div>
  )
}

export default App
