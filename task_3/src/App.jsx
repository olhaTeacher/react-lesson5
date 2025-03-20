import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([])

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res)=> res.json())
      .then((data) => setUsers(data))
    
  },[]);

  return (
    <>
       <div>
      <h1>Список користувачів</h1>
      <UserList users={users} />
    </div>
    </>
  )
}

export default App
