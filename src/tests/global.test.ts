import { expect, describe, it } from 'vitest'

const me = {
  name: 'John',
  age: 20,
  location: 'London'
}
describe('global unit test', () => {
  it('should be an object', () => {
    expect(me.name).toBe('John')
  })
})
