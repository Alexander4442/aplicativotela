import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotaoPersonalizado = ({ titulo, onPress, backgroundColor = '#3498db', corTexto = '#fff', estiloExtra }) => {
  return (
    <TouchableOpacity
      style={[styles.botao, { backgroundColor }, estiloExtra]}
      onPress={onPress}
    >
      <Text style={[styles.textoBotao, { color: corTexto }]}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BotaoPersonalizado;