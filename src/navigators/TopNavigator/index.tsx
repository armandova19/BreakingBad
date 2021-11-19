import React from 'react';
import {Text, View} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SettingsScreen from '../../screens/SettingsScreen';
import PhraseScreen from '../../screens/PhraseScreen';
import CharacterScreen from '../../screens/CharacterScreen';


const Tab = createMaterialTopTabNavigator();


const Component = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Character" component={CharacterScreen} />
            <Tab.Screen name="Phrase" component={PhraseScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
        
    );
};


export default Component;