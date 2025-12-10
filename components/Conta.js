import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles/styles';

function BillItem({ item, onRemove }){
  return (
    <View style={styles.billItem}>
      <View style={{ flex: 1 }}>
        <Text style={styles.billName}>{item.name}</Text>
        <Text style={styles.billPrice}>R$ {item.price.toFixed(2)} x {item.qty}</Text>
      </View>
      <TouchableOpacity onPress={()=>onRemove(item.id)} style={styles.removeBtn}><Text style={{ color: '#fff' }}>Rem</Text></TouchableOpacity>
    </View>
  );
}

export default function BillScreen({ theme, bill, onRemove, onClear }){
  const total = bill.reduce((s,it)=> s + it.price * it.qty, 0);
  return (
    <View style={styles.screenContainer}>
      <Text style={[styles.title, { color: theme.primary }]}>Conta 🧾</Text>

      {bill.length === 0 ? (
        <Text style={[styles.paragraph, { color: theme.text }]}>Nenhum item na conta ainda.</Text>
      ) : (
        <FlatList data={bill} keyExtractor={it=>it.id} renderItem={({item})=> <BillItem item={item} onRemove={onRemove} />} />
      )}

      <View style={styles.totalBox}>
        <Text style={[styles.totalText, { color: theme.primary }]}>Total: R$ {total.toFixed(2)}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[styles.smallAction, { backgroundColor: 'crimson' }]} onPress={onClear}><Text style={{ color: '#fff' }}>Limpar</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.smallAction, { backgroundColor: theme.button }]} onPress={()=> Alert.alert('Pagamento', `Total: R$ ${total.toFixed(2)}\nBoa sorte!`)}><Text style={{ color: '#fff' }}>Pagar</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
