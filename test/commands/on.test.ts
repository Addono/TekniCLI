import {expect, test} from '@oclif/test'

describe('on', () => {
  test
  .stdout()
  .command(['on'])
  .exit(0)
  .it('turns lights on', ctx => {
    expect(ctx.stdout).to.contain('100%')
  })
})
