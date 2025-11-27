import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import global from '../styles/global';
import PlaygroundBox from '../components/PlaygroundBox';
import ColorPicker from '../components/ColorPicker';
import Slider from '@react-native-community/slider';


export default function LabComponentsScreen() {
    const [label, setLabel] = useState('Olá, React Labs!');
    const [bg, setBg] = useState('#0ea5e9');
    const [textColor, setTextColor] = useState('#fff');
    const [fontSize, setFontSize] = useState(18);


    return (
        <View style={global.page}>
            <Text style={global.titleLight}>Lab — Componentes</Text>
            <Text style={[global.textLight, { marginTop: 8 }]}>Altere props do cartão e veja a prévia ao vivo.</Text>


            <PlaygroundBox title="Controles">
                <Text style={global.textLight}>Texto</Text>
                <TextInput value={label} onChangeText={setLabel} style={styles.input} placeholder="Texto do componente" />


                <Text style={[global.textLight, { marginTop: 8 }]}>Cor do cartão</Text>
                <ColorPicker value={bg} onChange={setBg} />


                <Text style={[global.textLight, { marginTop: 8 }]}>Cor do texto</Text>
                <ColorPicker value={textColor} onChange={setTextColor} />


                <Text style={[global.textLight, { marginTop: 8 }]}>Tamanho do texto: {Math.round(fontSize)}</Text>
                <Slider
                    value={fontSize}
                    onValueChange={setFontSize}
                    minimumValue={10}
                    maximumValue={40}
                    step={1}
                />


            </PlaygroundBox>


            <PlaygroundBox title="Pré-visualização" style={{ marginTop: 12 }}>
                <TouchableOpacity style={[previewStyles.card, { backgroundColor: bg }]} activeOpacity={0.8}>
                    <Text style={{ color: textColor, fontSize }}>{label}</Text>
                </TouchableOpacity>
            </PlaygroundBox>


            <View style={{ marginTop: 18 }}>
                <Text style={global.smallText}>Dica: explique para a turma que props são apenas valores passados a componentes.</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#123248',
        padding: 8,
        borderRadius: 8,
        marginTop: 6,
        color: '#fff',
        backgroundColor: '#051027'
    }
});


const previewStyles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    }
});