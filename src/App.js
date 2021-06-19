import React, { useCallback, useState } from 'react'
import Button from './components/UI/Button/Button'

import './App.css'
import DemoOutput from './components/Demo/DemoOutput'

function App() {
  const [showParagraph, setIsShowParagraph] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)

  console.log('APP CHANGESSS')

  //in this case, we would like to tell react that this callback function, will never change as it has no dependencies
  // the object is always the same as the the app component rerenders
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setIsShowParagraph((prevShowParagraph) => !prevShowParagraph)
    }
  }, [allowToggle])
  // As you can see in the toggleParagraphHandler, the allowToggle variable is locked and stored as a constant for function definition
  // whihc means next time the toggleParagraphHandler is called, the STORED VARIABLE is be used.
  // so we need an array dependecies, in this case is
  const allowToggleHandler = () => {
    setAllowToggle(true)
  }

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Toggle Here!</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  )
}

export default App
