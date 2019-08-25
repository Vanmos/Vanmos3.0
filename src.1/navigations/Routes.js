import LoginScreen from '../Telas/LoginScreen'
import CadastroPassageiro from '../Telas/CadastroPassageiro';
import Home from '../Telas/Home'
import CadastroVeiculo from '../Telas/CadastroVeiculo'
import CadastroMotorista from '../Telas/CadastroMotorista'
import CadastroTransportadora from '../Telas/CadastroTransportadora';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const Navigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Cadastro: {screen: CadastroPassageiro},
  Home: {screen: Home},
  CadastroVeiculo: {screen: CadastroVeiculo},
  CadastroTransportadora: {screen: CadastroTransportadora},
  CadastroMotorista: {screen: CadastroMotorista}
});

const Routes = createAppContainer(Navigator);

export default Routes;