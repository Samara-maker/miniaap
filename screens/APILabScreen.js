import React, { useState } from 'react';
import { View, Text, Button, Vibration, StyleSheet } from 'react-native';
import global from '../styles/global';
import PlaygroundBox from '../components/PlaygroundBox';

export default function APILabScreen() {
  const [vibeCount, setVibeCount] = useState(0);

  function vibrar() {
    Vibration.vibrate(200);
    setVibeCount(vibeCount + 1);
  }

  return (
    <View style={global.page}>
      <Text style={global.titleLight}>Lab — APIs nativas</Text>
      <Text style={[global.textLight, { marginTop: 6 }]}>
        Teste vibração e veja informações básicas simuladas.
      </Text>

      <PlaygroundBox title="Vibração" style={{ marginTop: 16 }}>
        <Text style={global.textLight}>Toque para vibrar o dispositivo:</Text>
        <View style={{ marginTop: 10 }}>
          <Button title="Vibrar" onPress={vibrar} />
        </View>

        <Text style={[global.textLight, { marginTop: 10 }]}>
          Vibrações realizadas: {vibeCount}
        </Text>
      </PlaygroundBox>

      <PlaygroundBox title="Mock de Localização">
        <Text style={global.textLight}>Latitude: -10.9402 (simulado)</Text>
        <Text style={global.textLight}>Longitude: -61.9674 (simulado)</Text>
      </PlaygroundBox>

      <PlaygroundBox title="Mock de Câmera">
        <Text style={global.textLight}>
          Nesta demonstração, mostramos somente como seria o retorno:
        </Text>
        <Text style={[global.textLight, { marginTop: 8 }]}>
          {"{ status: 'OK', foto: 'data:image/png;base64,...' }"}
        </Text>
      </PlaygroundBox>
    </View>
  );
}
