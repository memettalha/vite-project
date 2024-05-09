import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import styled from 'styled-components'
import { Shop } from './shop';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Shop/>
        

     
      </div>
    
    </>
  )
}

export default App
