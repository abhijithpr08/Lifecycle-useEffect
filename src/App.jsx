import React from 'react'
import ComponentDidMount from './components/ComponentDidMount'
import Users from './components/Users'
import MultipleUseEffect from './components/MultipleUseEffect'
import LayoutEffectExample from './components/LayoutEffectExample'

const App = () => {
  return (
    <div>
      {/* <ComponentDidMount/> */}
      {/* <Users/> */}
      <MultipleUseEffect/>
      <LayoutEffectExample/>
    </div>
  )
}

export default App