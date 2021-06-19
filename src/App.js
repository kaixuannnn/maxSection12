import React, { useCallback, useState } from 'react'
import Button from './components/UI/Button/Button'

import './App.css'
import DemoOutput from './components/Demo/DemoOutput'

function App() {
  const [showParagraph, setIsShowParagraph] = useState(false)

  console.log('APP CHANGESSS')

  //in this case, we would like to tell react that this callback function, will never change as it has no dependencies
  // the object is always the same as the the app component rerenders
  const toggleParagraphHandler = useCallback(() => {
    setIsShowParagraph((prevShowParagraph) => !prevShowParagraph)
  }, [])

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  )
}

export default App
