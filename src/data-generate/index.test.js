import {
  getNewStateForCol,
  getLiveNeighborsCount,
  getInitialState,
} from './index'

describe('getNewStateForCol function', () => {
  it('Should return false when col is true and liveNeighborsCount 1', () => {
    const col = true
    const liveNeighborsCount = 1
    const expectedResult = false

    expect(getNewStateForCol({col, liveNeighborsCount})).toBe(expectedResult)
  })
  it('Should return true when col is false and liveNeighborsCount 3', () => {
    const col = false
    const liveNeighborsCount = 3
    const expectedResult = true

    expect(getNewStateForCol({col, liveNeighborsCount})).toBe(expectedResult)
  })
})

describe('getLiveNeighborsCount function', () => {
  it('Should return 2 live neighbors', () => {
    const state = [
      [false, true, false],
      [false, false, true],
      [false, false, false],
    ]
    const rowIndex = 1
    const colIndex = 1
    const expectedResult = 2
    expect(getLiveNeighborsCount({state, rowIndex, colIndex})).toBe(
      expectedResult
    )
  })
  it('Should return 0 live neighbors', () => {
    const state = [
      [false, false, false],
      [false, false, false],
      [true, true, false],
    ]
    const rowIndex = 0
    const colIndex = 1
    const expectedResult = 0
    expect(getLiveNeighborsCount({state, rowIndex, colIndex})).toBe(
      expectedResult
    )
  })
})

describe('getInitialState function', () => {
  const gridRows = 10
  const gridCols = 10
  const initialState = getInitialState({gridRows, gridCols})()
  it('Should return data with right size', () => {
    const expectedRowSize = gridRows
    const expectedColSize = gridCols

    expect(initialState.length).toBe(expectedRowSize)
    initialState.forEach((row) => {
      expect(row.length).toBe(expectedColSize)
    })
  })
  it('Should contains boolean values in cols', () => {
    initialState.forEach((row) => {
      row.forEach((col) => {
        expect(col).toBe.boolean
      })
    })
  })
})
