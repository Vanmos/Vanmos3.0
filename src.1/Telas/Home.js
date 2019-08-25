import React, { StatusBar, Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text, 
  Picker
} from "native-base";

class Home extends Component {
  static navigationOptions = { 
    title: 'Home',
    header: null
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      
      <Container style={{backgroundColor: '#ECBF06' }}>
        <Header style={{backgroundColor: '#ECBF06'}}>
          <Body style={{alignItems: "center"}}>
            <Title style={{color: "black"}}>Home</Title>
          </Body>
        </Header>
        <Content > 
            <Body>
                
                <Text>Exemplos</Text>

                <Text onPress={() => navigate('CadastroTransportadora')}>Cadastro Empresa</Text>
                
                <Text onPress={() => navigate('CadastroVeiculo')}>Cadastro Veiculos</Text>
                
                <Text onPress={() => navigate('CadastroMotorista')}>Cadastro Motorista</Text>
            </Body>
        </Content>
          
      </Container>
    );
  }
}

export default Home