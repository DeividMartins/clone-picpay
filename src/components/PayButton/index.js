import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { TouchableNativeFeedback } from 'react-native';
// import { Container } from './styles';
import { Button, Label } from './styles';


export default function PayButton({ onPress, focused }) {
    return (
        < TouchableNativeFeedback onPress={onPress}>
            <Button
                colors={
                    focused
                        ? ['#fff', '#ccc']
                        : ['#00fc6c', '#00ac4a']
                }
                start={[1, 0.2]}
            >
                <MaterialIcons
                    name='attach-money'
                    size={30}
                    color={focused ? '#000' : '#fff'}
                />
                <Label focused={focused}>Pagar</Label>
            </Button>
        </TouchableNativeFeedback>
    )
};