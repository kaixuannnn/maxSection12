import React, { useState } from 'react'
import Button from './components/UI/Button/Button'

import './App.css'
import DemoOutput from './components/Demo/DemoOutput'

function App() {
  const [showParagraph, setIsShowParagraph] = useState(false)

  console.log('APP CHANGESSS')

  const toggleParagraphHandler = () => {
    setIsShowParagraph((prevShowParagraph) => !prevShowParagraph)
  }
  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  )
}

export default App
