import './App.scss';
import ColorBox from './components/ColorBox';
import { useState, useEffect } from 'react';
import queryString from 'query-string';

import TodoList from './components/TodoList ';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from'./components/Pagination';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
    ]);

    const [postList, setPostList] = useState([])
    const [pagination, setPagination] = useState({
      _page: 1, 
      _limit: 10,
      _totalRows: 1,
    });
    const [filters, setFilters] = useState({
      _limit: 10,
      _page: 1,
    });

    useEffect(() => {
      async function fetchPostList() {

        try {
          const paramsString = queryString.stringify(filters)
          const requese = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
          const response = await fetch(requese)
          const responseJSON = await response.json();
          console.log({ responseJSON })

          const { data, pagination } = responseJSON;
          setPostList(data)
          setPagination(pagination)
        } catch (error) {
          alert('Failed to fetch post list')
        }

        
      }

      fetchPostList()
    }, [filters])

    function handlePageChange(newPage) {
      console.log('New page', newPage);
      setFilters({
        ...filters,
        _page: newPage,
      })
    }

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
      {/* <TodoForm onSubmit={handleTodoFromSubmit}/> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick}/> */}
      {/* <ColorBox /> */}
      <PostList posts={postList}/>
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
