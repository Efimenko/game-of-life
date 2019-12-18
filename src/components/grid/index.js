// @flow
import React from 'react'
import classNames from 'classnames'
/**/
import {type GridData} from '../../types'
import './style.css'

type PropsT = {
  gridData: GridData,
}

export const Grid = ({gridData}: PropsT) => (
  <div className="grid">
    {gridData.map((row, rowIndex) => {
      return (
        <div key={rowIndex}>
          {row.map((col, colIndex) => {
            return (
              <div
                key={colIndex}
                className={classNames('col', {'col--active': col})}
              ></div>
            )
          })}
        </div>
      )
    })}
  </div>
)
