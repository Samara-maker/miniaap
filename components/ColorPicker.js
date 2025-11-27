import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const PRESET = ['#e11d48', '#fb923c', '#f59e0b', '#10b981', '#0ea5e9', '#7c3aed', '#94a3b8', '#ffffff'];

export default function ColorPicker({ value, onChange }) {
    return (
        <View style={styles.row}>
            {PRESET.map(c => (
                <TouchableOpacity 
                    key={c} 
                    onPress={() => onChange(c)} 
                    style={[
                        styles.swatch, 
                        { 
                            backgroundColor: c, 
                            borderColor: c === value ? '#fff' : 'transparent' 
                        }
                    ]} 
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    row: { 
        flexDirection: 'row', 
        flexWrap: 'wrap',
    },
    swatch: {
        width: 34,
        height: 34,
        borderRadius: 6,
        marginRight: 8,
        marginBottom: 8,
        borderWidth: 2,
    },
});
