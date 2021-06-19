import React from 'react'
import MyParagraph from './MyParagraph'

const DemoOutput = (props) => {
  console.log('DEMO OUTOUT RUNNING......')
  return (
    <div>
      <MyParagraph>{props.show ? 'This is the paragraph' : ''}</MyParagraph>
    </div>
  )
}

export default React.memo(DemoOutput)
