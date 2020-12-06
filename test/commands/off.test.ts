import {expect, test} from '@oclif/test'

describe('off', () => {
  test
  .stdout()
  .command(['off'])
  .exit(0)
  .it('turns lights on', ctx => {
    expect(ctx.stdout).to.contain(' 0%')
  })
})
