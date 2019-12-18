// @flow
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

import {Grid} from './components/grid'
import {TICK} from './config'
import {getInitialState, updateStateBaseOnPrevState} from './data-generate'
import './style.css'

const App = () => {
  const [gridData, setGridData] = useState(getInitialState)

  /* Run update grid after mount with TICK delay */
  useEffect(() => {
    const intervalId = setInterval(
      () => setGridData(updateStateBaseOnPrevState),
      TICK
    )
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="wrapper">
      <Grid gridData={gridData} />
    </div>
  )
}

const root = document.getElementById('app')

if (root !== null) {
  ReactDOM.render(<App />, root)
}
