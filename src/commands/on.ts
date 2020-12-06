import { Command, flags } from '@oclif/command'
import { setBrightness } from '../util/teknilight'

export default class On extends Command {
  static description = 'Turns the light on with maximum brightness'

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = []

  async run() {
    const { } = this.parse(On)

    const { success } = await setBrightness(100)
    
    if (success) {
      this.exit(0)
    } else {
      this.exit(1)
    }
  }
}
