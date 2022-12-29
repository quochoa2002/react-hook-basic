import './App.scss';
import ColorBox from './components/ColorBox';
import { useState } from 'react';
import TodoList from './components/TodoList ';
import TodoForm from './components/TodoForm';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
    ]);

    function handleTodoClick(todo) {
      console.log(todo)
      const index = todoList.findIndex(x => x.id === todo.id); 
      if(index < 0) return; 
      

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    }

    function handleTodoFromSubmit(fromValues) {
      console.log(fromValues)
      // add new todo 
      const newTodo = {
        id: todoList.length + 1,
        ...fromValues,
      }
      const newTodoList = [...todoList]
      newTodoList.push(newTodo)

      setTodoList(newTodoList)
    }

  return (
    <div className="app">
      <h1>hello reactjs</h1>
      <TodoForm onSubmit={handleTodoFromSubmit}/>
      <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
      <ColorBox />
    </div>
  );
}

export default App;
