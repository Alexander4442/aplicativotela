import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

  const telaLogin = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const fazerLogin = () => {
      if (email === 'teste@email.com' && password === '123456') {
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        navigation.navigate('Home');
      } else {
        Alert.alert('Erro', 'Credenciais inválidas');
      }
    };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/logo.png')}
      />
      <Text>Bem-vindo(a)</Text>
      <Text>Faça login para continuar</Text>
      <StatusBar style="auto" />
      <TextInput
          label="seu email"
          onChangeText={setEmail}
          value={email}
          placeholder="digite seu email"
          keyboardType="email-address"
          style={styles.input}
        />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  }
});

export default telaLogin;