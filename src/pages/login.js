import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import {styleLogin} from '../styles/styleLogin'

export function Login({navigation}) {
  return (
    <View style={styleLogin.container}>
      <View style={styleLogin.title}>
        <Text>ola mundo</Text>
      </View>
      <View style={styleLogin.form}>
        <Text style={styleLogin.text}>Usuário: </Text>
        <TextInput style={styleLogin.textInput}/>
        <Text style={styleLogin.text}>Senha: </Text>
        <TextInput style={styleLogin.textInput} secureTextEntry={true}/>
        <TouchableOpacity style={styleLogin.btnEntrar}>
          <Text style={styleLogin.textEntrar} onPress={() => {navigation.push('Drawer')}}>Entrar</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styleLogin.btnRec}>
          <Text style={styleLogin.textRec}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
