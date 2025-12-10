import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import TabBar from './components/TabBar';
import HomeScreen from './components/HomeScreen';
import BeerCounter from './components/BeerCounter';
import PetiscosList from './components/Petisco';
import CallWaiter from './components/Garcom';
import BillScreen from './components/Conta';
import CustomizeScreen from './components/Boteco';
import EscapeGame from './components/Jogo';
import ErrorsScreen from './components/Error';
import PiadasScreen from './components/Piadas';

import { THEMES } from './styles/theme';
import { styles } from './styles/styles';

const TABS = [
  'Home',
  'Cerveja',
  'Petiscos',
  'Garcom',
  'Conta',
  'Personalizar',
  'Escape',
  'Erros',
  'Piadas'
];

export default function App() {
  // navegação manual (didática)
  const [active, setActive] = useState('Home');

  // temas
  const [themeName, setThemeName] = useState('mesa');
  const theme = THEMES[themeName];

  // estado global de conta
  const [bill, setBill] = useState([]);

  // ⭐ MODO APRENDIZ
  const [modoAprendiz, setModoAprendiz] = useState(true);

  // ======================
  // FUNÇÕES DE CONTA
  // ======================
  function addToBill(item) {
    setBill(prev => {
      const found = prev.find(p => p.id === item.id);
      if (found) {
        return prev.map(p =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  }

  function removeFromBill(id) {
    setBill(prev => prev.filter(p => p.id !== id));
  }

  function clearBill() {
    setBill([]);
  }

  // ======================
  // GAMIFICAÇÃO
  // ======================
  const nivelCliente =
    bill.length < 2
      ? '🧍 Cliente Perdido'
      : bill.length < 5
      ? '🍺 Frequentador'
      : '🧠 Dev do Boteco';

  // ======================
  // RENDER
  // ======================
  return (
    <SafeAreaView
      style={[
        styles.appContainer,
        { backgroundColor: theme.appBg }
      ]}
    >
      {/* INDICADOR DE MODO APRENDIZ */}
      {modoAprendiz && (
        <View
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 999,
            backgroundColor: '#111',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 8
          }}
        >
          <Text style={{ color: '#fff', fontSize: 12 }}>
            📚 Modo Aprendiz ATIVO
          </Text>
        </View>
      )}

      {/* CONTEÚDO */}
      <View style={{ flex: 1 }}>
        {active === 'Home' && (
          <HomeScreen
            theme={theme}
            nivel={nivelCliente}
            modoAprendiz={modoAprendiz}
          />
        )}

        {active === 'Cerveja' && (
          <BeerCounter theme={theme} modoAprendiz={modoAprendiz} />
        )}

        {active === 'Petiscos' && (
          <PetiscosList
            theme={theme}
            onAddToBill={addToBill}
            modoAprendiz={modoAprendiz}
          />
        )}

        {active === 'Garcom' && (
          <CallWaiter theme={theme} modoAprendiz={modoAprendiz} />
        )}

        {active === 'Conta' && (
          <BillScreen
            theme={theme}
            bill={bill}
            onRemove={removeFromBill}
            onClear={clearBill}
            modoAprendiz={modoAprendiz}
          />
        )}

        {active === 'Personalizar' && (
          <CustomizeScreen
            theme={theme}
            onChangeTheme={setThemeName}
            currentThemeName={themeName}
            modoAprendiz={modoAprendiz}
          />
        )}

        {active === 'Escape' && (
          <EscapeGame theme={theme} modoAprendiz={modoAprendiz} />
        )}

        {active === 'Erros' && (
          <ErrorsScreen theme={theme} modoAprendiz={modoAprendiz} />
        )}

        {active === 'Piadas' && (
          <PiadasScreen theme={theme} modoAprendiz={modoAprendiz} />
        )}
      </View>

      {/* BOTÃO DO MODO APRENDIZ */}
      <TouchableOpacity
        onPress={() => setModoAprendiz(prev => !prev)}
        style={{
          backgroundColor: modoAprendiz ? '#8B0000' : '#006400',
          marginHorizontal: 20,
          marginBottom: 6,
          padding: 10,
          borderRadius: 8,
          alignItems: 'center'
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>
          {modoAprendiz
            ? '🔴 Desativar Modo Aprendiz'
            : '🟢 Ativar Modo Aprendiz'}
        </Text>
      </TouchableOpacity>

      {/* TAB BAR */}
      <TabBar
        tabs={TABS}
        active={active}
        onPress={setActive}
        theme={theme}
      />
    </SafeAreaView>
  );
}
