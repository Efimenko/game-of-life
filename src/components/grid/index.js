// @flow
import React from 'react'
import classNames from 'classnames'
/**/
import {COL_SIZE, GRID_COLS} from '../../config'
import {type GridData} from '../../types'
import './style.css'

type PropsT = {
  gridData: GridData,
}

export const Grid = ({gridData}: PropsT) => (
  <div
    className="grid"
    style={{'--grid-width': `${COL_SIZE * GRID_COLS + 2}px`}}
  >
    {gridData.map((row, rowIndex) => {
      return (
        <div key={rowIndex} className="row">
          {row.map((col, colIndex) => {
            return (
              <div
                key={colIndex}
                className={classNames('col', {'col--active': col})}
                style={{'--col-size': `${COL_SIZE}px`}}
              ></div>
            )
          })}
        </div>
      )
    })}
  </div>
)
