/** @format */

import { AppRegistry } from 'react-native'
import App from './App'

AppRegistry.registerComponent('appName', () => App)
AppRegistry.runApplication('appName', {
  rootTag: document.getElementById('root'),
})
