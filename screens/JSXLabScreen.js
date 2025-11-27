import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import global from '../styles/global';
import PlaygroundBox from '../components/PlaygroundBox';

export default function JSXLabScreen() {
  const [name, setName] = useState('Samara');

  return (
    <View style={global.page}>
      <Text style={global.titleLight}>Lab — JSX</Text>
      <Text style={[global.textLight, { marginTop: 6 }]}>
        Edite o valor no campo e veja como o JSX reage ao vivo.
      </Text>

      <PlaygroundBox title="Editar JSX" style={{ marginTop: 16 }}>
        <Text style={global.textLight}>Seu nome:</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
      </PlaygroundBox>

      <PlaygroundBox title="Prévia JSX">
        <Text style={{ color: '#fff', fontSize: 22 }}>
          Olá, {name}! 👋
        </Text>
      </PlaygroundBox>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#061122',
    borderWidth: 1,
    borderColor: '#234',
    padding: 8,
    marginTop: 8,
    color: '#fff',
    borderRadius: 8,
  },
});
