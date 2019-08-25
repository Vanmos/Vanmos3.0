/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoginScreen from './src.1/Telas/LoginScreen'
import CadastroTransportadora from './src.1/Telas/CadastroTransportadora'
import Routes from './src.1/navigations/Routes'

AppRegistry.registerComponent(appName, () => Routes);
