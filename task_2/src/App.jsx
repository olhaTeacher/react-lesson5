import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log("Стан оновлено:", count);
  });

  return (
    <>
      <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
    </div>
    </>
  )
}

export default App
