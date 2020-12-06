import {Command, flags} from '@oclif/command'
import {setBrightness} from '../util/teknilight'

export default class Off extends Command {
  static description = 'Turns the light off'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    this.parse(Off)

    const {success} = await setBrightness(0)

    if (success) {
      this.exit(0)
    } else {
      this.exit(1)
    }
  }
}
