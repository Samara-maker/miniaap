import React, { useState } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import ItemConta from "../components/ItemConta";
import global from "../styles/global";

const CATALOG = [
  { id: 1, nome: "Bolinha de queijo", preco: 8 },
  { id: 2, nome: "Torresmo", preco: 12 },
  { id: 3, nome: "Heineken", preco: 14 },
];

export default function ContaScreen() {
  const [itens, setItens] = useState([]);

  function addItem(prod) {
    // se já existir, incrementa
    setItens(prev => {
      const found = prev.find(p => p.id === prod.id);
      if (found) {
        return prev.map(p => p.id === prod.id ? { ...p, qtd: p.qtd + 1 } : p);
      }
      return [...prev, { ...prod, qtd: 1 }];
    });
  }

  const total = itens.reduce((s, it) => s + it.preco * it.qtd, 0);

  return (
    <ScrollView style={global.container}>
      <Text style={global.title}>Simulador de Conta</Text>

      {CATALOG.map(p => (
        <View key={p.id} style={{ marginBottom: 8 }}>
          <Text style={{ fontWeight: "700" }}>{p.nome} — R$ {p.preco.toFixed(2)}</Text>
          <Button title="Adicionar" onPress={() => addItem(p)} />
        </View>
      ))}

      <View style={{ marginTop: 16 }}>
        <Text style={{ fontWeight: "700", marginBottom: 8 }}>Itens no pedido:</Text>
        {itens.length === 0 ? <Text>Nenhum item</Text> : itens.map(it => (
          <ItemConta key={it.id} nome={it.nome} preco={it.preco} qtd={it.qtd} />
        ))}
      </View>

      <View style={{ marginTop: 12 }}>
        <Text style={{ fontSize: 18 }}>Total: R$ {total.toFixed(2)}</Text>
        {total > 80 && <Text style={{ marginTop: 8, fontStyle: "italic" }}>Se deu mais de R$ 80, é porque alguém pediu Heineken.</Text>}
      </View>
    </ScrollView>
  );
}
