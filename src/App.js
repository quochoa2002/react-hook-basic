import './App.scss';
import { useState } from "react";
import Hero from './components/Hero';
import MagicBox from './components/MagicBox';
import Clock from './components/Clock';
import Reward from './components/Reward';
import TodoListF8 from './components/TodoListF8';
import Content from './components/UseEffectF8/Content';
import HandleCancel from './components/UseCallbackF8';
import UseMemoF8 from './components/UseMemoF8/USeMemoF8';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <h1>TodoListF8</h1> */}

      {/* <MagicBox />

      <Clock /> */}

      {/* <p>{count}</p> */}
      {/* <button onClick={() => setCount(count + 1)}>Click</button> */}
      
      {/* <TodoListF8/> */}

      {/* <HandleCancel/> */}

      <UseMemoF8/>

    </div>
  )
}

export default App;