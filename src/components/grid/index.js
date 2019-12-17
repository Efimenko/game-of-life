// @flow
import React from 'react'
import classNames from 'classnames'
/**/
import './style.css'

type GridType = {
  gridData: Array<Array<boolean>>,
}

export const Grid = ({gridData}: GridType) => (
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