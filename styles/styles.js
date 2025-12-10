import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  appContainer: { flex: 1 },
  screenContainer: { padding: 16 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  subTitle: { fontSize: 16, fontWeight: '600', marginTop: 12 },
  paragraph: { fontSize: 14, lineHeight: 20, marginBottom: 8 },
  bulletList: { marginTop: 8, marginBottom: 8 },
  bulletItem: { fontSize: 14, marginVertical: 2 },
  note: { fontSize: 12, marginTop: 12, fontStyle: 'italic' },

  tabBar: { flexDirection: 'row', padding: 8, justifyContent: 'space-around', borderTopWidth: 1 },
  tabButton: { paddingHorizontal: 8, paddingVertical: 6 },
  tabText: { fontSize: 12 },

  counterBox: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 12, marginTop: 12, borderRadius: 8 },
  counterBtn: { padding: 12, borderRadius: 8 },
  counterBtnText: { color: '#fff', fontWeight: '700' },
  counterValue: { fontSize: 18 },
  humorText: { fontSize: 16, marginTop: 6 },

  petiscoCard: { flexDirection: 'row', padding: 12, borderRadius: 8, marginBottom: 8, borderWidth: 1 },
  petiscoName: { fontSize: 16, fontWeight: '700' },
  petiscoDesc: { fontSize: 13 },
  petiscoPrice: { fontSize: 14, fontWeight: '700', marginBottom: 8 },
  addBtn: { padding: 8, borderRadius: 6, marginTop: 6 },
  addBtnText: { color: '#fff', fontWeight: '700' },

  actionBtn: { padding: 12, borderRadius: 8, marginTop: 12, alignSelf: 'flex-start' },
  actionBtnText: { color: '#fff', fontWeight: '700' },
  apiCard: { padding: 12, borderRadius: 8, marginTop: 12, borderWidth: 1 },
  smallNote: { fontSize: 12, marginTop: 8 },
  errorText: { marginTop: 8, fontWeight: '700' },

  billItem: { flexDirection: 'row', padding: 10, borderRadius: 8, borderWidth: 1, marginBottom: 8 },
  billName: { fontWeight: '700' },
  billPrice: { fontSize: 13 },
  removeBtn: { padding: 8, backgroundColor: 'crimson', borderRadius: 6, alignItems: 'center', justifyContent: 'center' },
  totalBox: { marginTop: 12, padding: 12 },
  totalText: { fontSize: 18, fontWeight: '700' },
  smallAction: { padding: 8, borderRadius: 6, marginLeft: 8 },

  label: { fontSize: 13, marginBottom: 6 },
  input: { borderWidth: 1, padding: 8, borderRadius: 6 },
  themeSwatch: { padding: 6, borderRadius: 6, borderWidth: 1, borderColor: '#ccc' },

  character: { width: 64, height: 64, borderRadius: 8, marginRight: 8, alignItems: 'center', justifyContent: 'center' }
});
