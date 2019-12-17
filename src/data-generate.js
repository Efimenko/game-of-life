// @flow
import {GRID_ROWS, GRID_COLS, NEIGHBORS_COORDINATES} from './config'

type GridData = Array<Array<boolean>>

type GetLiveNeighborsCountType = ({
  state: GridData,
  rowIndex: number,
  colIndex: number,
}) => number

type GetNewStateForColType = ({
  col: boolean,
  liveNeighborsCount: number,
}) => boolean

const getLiveNeighborsCount: GetLiveNeighborsCountType = ({
  state,
  rowIndex,
  colIndex,
}) =>
  NEIGHBORS_COORDINATES.map(
    ([x, y]) => state[rowIndex + x] && state[rowIndex + x][colIndex + y]
  ).filter((col) => col).length

const getNewStateForCol: GetNewStateForColType = ({col, liveNeighborsCount}) =>
  col
    ? liveNeighborsCount <= 3 && liveNeighborsCount >= 2
    : liveNeighborsCount === 3

export const getInitialState: () => GridData = () =>
  Array(GRID_ROWS)
    .fill()
    .map(() =>
      Array(GRID_COLS)
        .fill()
        .map(() => Boolean(Math.round(Math.random())))
    )

export const updateStateBaseOnPrevState: (GridData) => GridData = (prevState) =>
  prevState.map((row, rowIndex) =>
    row.map((col, colIndex) => {
      const liveNeighborsCount = getLiveNeighborsCount({
        state: prevState,
        rowIndex,
        colIndex,
      })

      return getNewStateForCol({col, liveNeighborsCount})
    })
  )
