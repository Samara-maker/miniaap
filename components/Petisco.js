import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { PETISCOS } from '../data/petiscos';
import { styles } from '../styles/styles';

export default function PetiscosList({ theme, onAddToBill, modoAprendiz }) {
  return (
    <View style={styles.screenContainer}>
      <Text style={[styles.title, { color: theme.primary }]}>
        Lista de Petiscos 🍟
      </Text>

      <Text style={[styles.paragraph, { color: theme.text }]}>
        FlatList: pressione + para adicionar à conta.
      </Text>

      {/* 📚 EXPLICAÇÃO DIDÁTICA */}
      {modoAprendiz && (
        <View
          style={{
            backgroundColor: theme.cardBg,
            borderLeftWidth: 4,
            borderLeftColor: theme.primary,
            padding: 10,
            borderRadius: 6,
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 13, color: theme.text }}>
            📚 <Text style={{ fontWeight: 'bold' }}>O que você aprende aqui:</Text>
            {'\n'}• FlatList renderiza listas de forma eficiente
            {'\n'}• Cada item precisa de uma chave única (keyExtractor)
            {'\n'}• O botão + envia dados para o componente pai usando props
          </Text>
        </View>
      )}

      <FlatList
        data={PETISCOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.petiscoCard,
              {
                borderColor: theme.border,
                backgroundColor: theme.cardBg,
              },
            ]}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={[styles.petiscoName, { color: theme.text }]}
              >
                {item.name}
              </Text>

              <Text
                style={[styles.petiscoDesc, { color: theme.text }]}
              >
                {item.desc}
              </Text>

              {modoAprendiz && (
                <Text style={{ fontSize: 11, color: theme.primary }}>
                  🔎 Este texto vem do objeto do item renderizado.
                </Text>
              )}
            </View>

            <View style={{ alignItems: 'flex-end' }}>
              <Text
                style={[styles.petiscoPrice, { color: theme.primary }]}
              >
                R$ {item.price.toFixed(2)}
              </Text>

              <TouchableOpacity
                style={[
                  styles.addBtn,
                  { backgroundColor: theme.button },
                ]}
                onPress={() => onAddToBill(item)}
              >
                <Text style={styles.addBtnText}>+</Text>
              </TouchableOpacity>

              {modoAprendiz && (
                <Text style={{ fontSize: 11, marginTop: 4 }}>
                  📦 Enviando item para a conta via props
                </Text>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
}
