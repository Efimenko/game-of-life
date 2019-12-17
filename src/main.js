// @flow
import React from 'react'
import ReactDOM from 'react-dom'

import {Grid} from './components/grid'

const App = () => <Grid rows={10} cols={10} />

const root = document.getElementById('app')

if (root !== null) {
  ReactDOM.render(<App />, root)
}
