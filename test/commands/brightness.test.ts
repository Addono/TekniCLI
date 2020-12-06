import {expect, test} from '@oclif/test'

describe('brightness', () => {
  test
  .stdout()
  .command(['brightness'])
  .exit(1)
  .it('exits with code 1 when with 1 when requires brightness param is missing')

  test
  .stdout()
  .command(['brightness', '101'])
  .exit(1)
  .it('exits with code 1 when brightness value larger than 100 is entered')

  test
  .stdout()
  .command(['brightness', '-1'])
  .exit(1)
  .it('exits with code 1 when brightness value smaller than 0 is entered')

  test
  .stdout()
  .command(['brightness', '100'])
  .exit(0)
  .it('sets brightness to 100', ctx => {
    expect(ctx.stdout).to.contain('100%')
  })
})
