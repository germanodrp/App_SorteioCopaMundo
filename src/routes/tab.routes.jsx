import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'
const { Screen, Navigator } = createBottomTabNavigator();


import { Home } from '../screens/Home'
import { Potes } from '../screens/Potes'
import { Sorteio } from '../screens/Sorteio';

export function TabsRoutes() {


    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: '#9A1032',
                tabBarInactiveTintColor: 'gray',
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
                            size="35px"
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
                            size="35px"
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
                            size="35px"
                        />
                    )
                }}
            />

        </Navigator>
    )

}