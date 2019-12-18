// @flow
export type GridData = Array<Array<boolean>>

export type GetLiveNeighborsCountFn = ({
  state: GridData,
  rowIndex: number,
  colIndex: number,
}) => number

export type GetNewStateForColFn = ({
  col: boolean,
  liveNeighborsCount: number,
}) => boolean

export type GetInitialStateFn = ({
  gridRows: number,
  gridCols: number,
}) => () => GridData

export type UpdateStateBaseOnPrevStateFn = (GridData) => GridData
