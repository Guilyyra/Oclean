import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Home from '../views/Home';
import Lixo from '../views/Lixo';
import Perfil from '../views/Perfil';
import Comunidade from '../views/Comunidade';
import PerfilStack from './SubStack';
import SubStack from './SubStack';

const tab = createBottomTabNavigator()

export default props => (
    <tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size}) => {
                let iconName

                switch(route.name) {
                    case 'HomeStack':
                        iconName = focused
                            ? 'home'
                            : 'home'
                        break;
                    case 'LixoStack':
                        iconName = focused
                            ? 'map'
                            : 'map'
                        break;
                    case 'PerfilStack':
                        iconName = focused
                            ? 'person'
                            : 'person'
                        break;
                }
    
                return <MaterialIcons name={iconName} size={size} color={color}/>;
            },
            headerShown: false,     
            tabBarActiveBackgroundColor: '#63E1FD',
            tabBarInactiveBackgroundColor: '#63E1FD',
            tabBarActiveTintColor: 'rgba(255, 255, 255, 0.68)',
            tabBarinactiveTintColor: '#fff',
            tabBarShowLabel: false,

        })}>
        <tab.Screen name="HomeStack" component={SubStack} initialParams={{ Tela: "Home"}}/>
        <tab.Screen name="LixoStack" component={SubStack} initialParams={{ Tela: "Lixo"}}/>
        <tab.Screen name="PerfilStack" component={SubStack} initialParams={{ Tela: "Perfil"}}/>
    </tab.Navigator>

)