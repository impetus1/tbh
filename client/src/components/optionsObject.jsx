// Import contracts
import SimpleStorage from './../build/contracts/SimpleStorage.json'
import TutorialToken from './../build/contracts/TutorialToken.json'

const options = {
  contracts: [
    SimpleStorage
  ]
}

const drizzleStore = generateStore(this.props.options)
const drizzle = new Drizzle(this.props.options, drizzleStore)