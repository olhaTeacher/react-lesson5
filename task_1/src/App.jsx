import { useState } from 'react'
import { useRef } from 'react'
import './App.css'


function App() {
  const [data, setData] = useState([{
    name: '',
    surname: '',
    email: ''
  }]);
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();

  const onSetData = (e)=> {
    let name = nameRef.current.value
    let surname = surnameRef.current.value
    let email = emailRef.current.value

    const newData = ({
      name: name,
      surname: surname,
      email: email
    })
    setData(newData)
    console.log(newData)
  }

 
  return (
    <>
     <form >
        <input type="text" ref={nameRef} placeholder='Name'/>
        <br />
        <input type="text" ref={surnameRef} placeholder='Surname'/>
        <br />
        <input type="email" ref={emailRef} placeholder='Email'/>
        <br />
        <button onClick={onSetData} type='button'>Set data</button>
     </form>
    </>
  )
}

export default App
