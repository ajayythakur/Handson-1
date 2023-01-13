// import { render } from '@testing-library/react'
import React from 'react'

class ClassBox extends React.Component {
  render() {
    return (
        <div id="classBox">
        <h1>This is created using Class Component</h1>
        <p>This is done using External CSS</p>
        <p style={{ color: "red" }}>This is done Using inline CSS</p>
      </div> 
    )
  }
  }

export default ClassBox
