import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Stack from './Stack';

export default props => (
    <NavigationContainer style={{flex: 1}}>
        <Stack />
    </NavigationContainer>
)