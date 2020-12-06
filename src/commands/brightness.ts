import {Command, flags} from '@oclif/command'
import { setBrightness } from '../util/teknilight';

export default class Brightness extends Command {
  static description = 'Set the brightness of the light'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'brightness'}]

  async run() {
    const {args} = this.parse(Brightness)
    const brightness = parseFloat(args.brightness)

    const { success } = await setBrightness(brightness)
    
    if (success) {
      this.exit(0)
    } else {
      this.exit(1)
    }
  }
}
