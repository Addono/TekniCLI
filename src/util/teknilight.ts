import { connectAsync, IClientPublishOptions } from 'async-mqtt'

const ENVIRONMENT = "prod"

const MQTT_OPTIONS: IClientPublishOptions = { qos: 2, retain: true }
const MQTT_CHANNEL_PREFIX = `tek/${ENVIRONMENT}/light/1`

const asyncClient = () => connectAsync("wss://mqtt.flespi.io:443", { username: "tfDgEAF5LmNkImKnaz2eTTjjs6NPWgMglfkPENKdZmnvyXJxlBB2kL9DFMgsTTw2"})

export const setBrightness = async (brightness: number): Promise<{ success: boolean }> => {
  // Input validation
  if (brightness < 0) {
    console.error(`Brightness cannot be lower than 0%, received ${brightness}%`)
    return { success: false }
  }
  if (brightness > 100) {
    console.error(`Brightness cannot be higher than 100%, received ${brightness}%`)
    return { success: false }
  }
  if (!Number.isFinite(brightness)) {
    console.error(`Brightness should be a percentage as a number, received ${brightness}`)
    return { success: false }
  }

  // Show the user that we are working on it
  console.error(`💡 Setting brightness to ${brightness}%`) 

  // Attempt to update the brightness
  try {
    const client = await asyncClient()
    client.publish(`${MQTT_CHANNEL_PREFIX}/brightness`, JSON.stringify({ brightness: brightness / 100 }), MQTT_OPTIONS)
  } catch (e) {
    console.error(`❌ Updating brightness failed (${e.message})`)
    return { success: false }
  }

  return { success: true }
}
