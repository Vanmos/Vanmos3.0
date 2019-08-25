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

class LoginScreen extends Component {
  static navigationOptions = { 
    title: 'Login',
    header: null
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      
      <Container style={{backgroundColor: '#ECBF06'  }}>
        <Header style={{backgroundColor: '#ECBF06'}}>
          <Body style={{alignItems: "center", }}>
            <Title style={{color: "black"}}>VANMOS</Title>
          </Body>
        </Header>
        <Content style={{marginTop: 100}}>
          <Form>
            <Item floatingLabel last style={{ borderBottomColor: "black" }}>
              <Icon active name="mail" /> 
              <Label>E-mail</Label>
              <Input />
            </Item>
            
            <Item floatingLabel last style={{ borderBottomColor: "black" }}>
              <Icon active name="key" /> 
              <Label>Senha</Label>
              <Input secureTextEntry />
            </Item>

           
          </Form>
          <Button block onPress={() => navigate('Home')} style={{ margin: 15, marginTop: 50, backgroundColor: '#F49D05', borderRadius: 25, width: AppStyles.buttonWidth.main, marginLeft: 60}}>
            <Text>Entrar</Text>
          </Button>
          <Text onPress={() => navigate('Cadastro')} style={{ marginLeft: 100}}>Novo Aqui? Cadastre-se</Text>
        </Content>
      </Container>
    );
  }
}






















// import React from "react";
// import { StyleSheet, Text, TextInput, View } from "react-native";
// import Button from "react-native-button";
// import { AppStyles } from "../AppStyles";

// class LoginScreen extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  
  

  

//   render() {
//     return (
//       <View style={{backgroundColor: '#ECBF06'}}>
//           <View style={styles.container}>
//             <Text style={[styles.title, styles.leftTitle]}>VANMOS</Text>
//             <View style={styles.InputContainer}>
//               <TextInput
//                 style={styles.body}
//                 placeholder="E-mail"
//                 placeholderTextColor="black"
//                 underlineColorAndroid="transparent"
//               />
//             </View>
//             <View style={styles.InputContainer}>
//               <TextInput
//                 style={styles.body}
//                 secureTextEntry={true}
//                 placeholder="Senha"
//                 placeholderTextColor="black"
//                 underlineColorAndroid="transparent"
//               />
//             </View>
//             <Button
//               containerStyle={styles.loginContainer}
//               style={styles.loginText}
//             >
//               Entrar
//             </Button>
//             <Text style={styles.or}>Ou</Text>
//             <Button
//               containerStyle={styles.facebookContainer}
//               style={styles.facebookText}
//             >
//               Cadastre-se
//             </Button>
//           </View>
//         </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center"
//   },
//   or: {
//     fontFamily: AppStyles.fontName.main,
//     color: "black",
//     marginTop: 10,
//   },
//   title: {
//     fontSize: AppStyles.fontSize.title,
//     fontWeight: "bold",
//     color: "black",
//     marginTop: 50,
//     marginBottom: 20
//   },
//   leftTitle: {
//     alignSelf: "stretch",
//     textAlign: "center",
//   },
//   content: {
//     paddingLeft: 50,
//     paddingRight: 50,
//     textAlign: "center",
//     fontSize: AppStyles.fontSize.content,
//     color: AppStyles.color.text
//   },
//   loginContainer: {
//     width: AppStyles.buttonWidth.main,
//     backgroundColor: '#FF8000',
//     borderRadius: AppStyles.borderRadius.main,
//     padding: 10,
//     marginTop: 30
//   },
//   loginText: {
//     color: AppStyles.color.white
//   },
//   placeholder: {
//     fontFamily: AppStyles.fontName.text,
//     color: "red"
//   },
//   InputContainer: {
//     width: AppStyles.textInputWidth.main,
//     marginTop: 30,
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderColor: "black",
//     borderRadius: AppStyles.borderRadius.main
//   },
//   body: {
//     height: 42,
//     paddingLeft: 20,
//     paddingRight: 20,
//     color: AppStyles.color.text
//   },
//   facebookContainer: {
//     width: AppStyles.buttonWidth.main,
//     backgroundColor: AppStyles.color.facebook,
//     borderRadius: AppStyles.borderRadius.main,
//     padding: 10,
//     marginTop: 10
//   },
//   facebookText: {
//     color: AppStyles.color.white
//   }
// });

export default LoginScreen;
