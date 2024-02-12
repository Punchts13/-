import * as React from 'react';
import { View, Text } from 'react-native';

export default function Id_cardScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                
                style={{ fontSize: 26, fontWeight: 'bold' }}>บัตรนักศึกษา</Text>
        </View>
    );
}