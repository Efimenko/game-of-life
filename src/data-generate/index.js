// @flow
import {NEIGHBORS_COORDINATES} from '../config'
import {
  type GetLiveNeighborsCountFn,
  type GetNewStateForColFn,
  type GetInitialStateFn,
  type UpdateStateBaseOnPrevStateFn,
} from '../types'

export const getLiveNeighborsCount: GetLiveNeighborsCountFn = ({
  state,
  rowIndex,
  colIndex,
}) =>
  NEIGHBORS_COORDINATES.map(
    ([x, y]) => state[rowIndex + x] && state[rowIndex + x][colIndex + y]
  ).filter((col) => col).length

export const getNewStateForCol: GetNewStateForColFn = ({
  col,
  liveNeighborsCount,
}) =>
  col
    ? liveNeighborsCount <= 3 && liveNeighborsCount >= 2
    : liveNeighborsCount === 3

export const getInitialState: GetInitialStateFn = ({
  gridRows,
  gridCols,
}) => () =>
  Array(gridRows)
    .fill()
    .map(() =>
      Array(gridCols)
        .fill()
        .map(() => Boolean(Math.round(Math.random())))
    )

export const updateStateBaseOnPrevState: UpdateStateBaseOnPrevStateFn = (
  prevState
) =>
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
