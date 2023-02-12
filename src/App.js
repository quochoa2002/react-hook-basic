import './App.scss';
import { useState } from "react";
import Hero from './components/Hero';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>React hooks - Clock</h1>

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>

      <Hero name="Hoa Cute"/>
    </div>
  )
}

export default App;