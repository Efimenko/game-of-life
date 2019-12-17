// @flow
import React from 'react'
/**/
import './style.css'

type GridType = {
  rows: number,
  cols: number,
}

export const Grid = ({rows, cols}: GridType) => (
  <div className="grid">
    {Array.from({length: rows}).map((row, rowIndex) => {
      return (
        <div key={rowIndex}>
          {Array.from({length: cols}).map((col, colIndex) => {
            return <div key={colIndex} className="col"></div>
          })}
        </div>
      )
    })}
  </div>
)
