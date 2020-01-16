import { add } from './math.js'

test('测试加法 3+3',()=>{
  expect(add(3,3)).toBe(6)
})

test('测试加法 10+0',()=>{
  expect(add(10,0)).toEqual(10)
})