import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'

import { Home } from '../screens/Home'
import { Potes } from '../screens/Potes'
import { Sorteio } from '../screens/Sorteio';

const { Screen, Navigator } = createBottomTabNavigator();


export function TabsRoutes() {


    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: '#9A1032',
                tabBarInactiveTintColor: '#696761',
                tabBarStyle: {backgroundColor: '#FBF1CD'},
                headerShown: false,
            }}
        >

            <Screen
                name="home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="home"
                            color={color}
                            size="40px"
                        />
                    )
                }}
            />

            <Screen
                name="potes"
                component={Potes}
                options={{
                    tabBarLabel: 'Potes',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="flag"
                            color={color}
                            size="40px"
                        />
                    )
                }}
            />

            <Screen
                name="sorteio"
                component={Sorteio}
                options={{
                    tabBarLabel: 'Sorteio',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="work"
                            color={color}
                            size="40px"
                        />
                    )
                }}
            />

        </Navigator>
    )

}
