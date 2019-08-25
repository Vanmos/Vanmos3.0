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

import { AppStyles } from "../AppStyles";

class CadastroPassageiro extends Component {
    static navigationOptions = { 
        title: 'Cadastro',
        header: null
      };
  render() {
    const {navigate} = this.props.navigation;
    return (
      
      <Container style={{backgroundColor: '#ECBF06'  }}>
        <Header style={{backgroundColor: '#ECBF06'}}>
          <Body style={{alignItems: "center", }}>
            <Title style={{color: "black"}}>Cadastro Passageiro</Title>
          </Body>
        </Header>
        <Content style={{marginTop: 100}}>
          <Form>
            <Item floatingLabel last style={{ borderBottomColor: "black" }}>
              <Label>Nome </Label>
              <Input />
            </Item>
            
            <Item floatingLabel last style={{ borderBottomColor: "black" }}>
              <Label>E-mail</Label>
              <Input />
            </Item>

            <Item floatingLabel last style={{ borderBottomColor: "black" }}>
              <Label>CPF</Label>
              <Input />
            </Item>

            <Item floatingLabel last style={{ borderBottomColor: "black" }}>
              <Label>UF</Label>
              <Input />
            </Item>

            <Item floatingLabel last style={{ borderBottomColor: "black" }}>
              <Label>Senha</Label>
              <Input secureTextEntry />
            </Item>

          </Form>
          <Button block onPress={() => navigate('Login')} style={{ margin: 15, marginTop: 50, backgroundColor: '#F49D05', borderRadius: 25, width: AppStyles.buttonWidth.main, marginLeft: 60}}>
            <Text>Salvar</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default CadastroPassageiro;