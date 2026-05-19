import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  let navigate = useNavigate();
  return (
    <div>
      <h2>OOPS USERNAME DOESNT MATCHES !!</h2>
      <h3>Enter correct spelling </h3>

      <button onClick={()=>{
        navigate('/')
      }}>HOME PAGE</button>
    </div>
  )
}

export default NotFound
