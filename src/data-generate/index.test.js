import {getNewStateForCol} from './index'

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
