import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Stack from './Stack';
import Tab from './Tab';

//console.disableYellowBox = true;

export default props => (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer >
            <Stack />
        </NavigationContainer>
    </SafeAreaView>
)