// @flow
import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import {Grid} from './components/grid'

const GRID_ROWS = 30
const GRID_COLS = 10

const getInitialState = () =>
  Array(GRID_ROWS)
    .fill()
    .map(() =>
      Array(GRID_COLS)
        .fill()
        .map(() => Boolean(Math.round(Math.random())))
    )

const App = () => {
  const [gridData, setGridData] = useState(getInitialState)
  return <Grid gridData={gridData} />
}

const root = document.getElementById('app')

if (root !== null) {
  ReactDOM.render(<App />, root)
}
