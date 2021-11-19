import React, { useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {useForm} from '../../hooks/useForm';
import {LoginInterface} from '../../interfaces/Interfaces';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface Props extends NativeStackScreenProps<any, any> {}
const Component = (props: Props) => {
    const {navigation} = props;

    const {email, password, onChange} = useForm<LoginInterface>({
        email: '',
        password: '',
    });

    useEffect(() => {
        console.log(`Email => ${email}`);
        console.log(`Password => ${password}`);
    }, [email, password]);

    const doLogin = () => {
        if(!(email === '1' && password === '1')) return;

        navigation.navigate('Home');
    };
    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>BreakingBad</Text>
            <View style={styles.Controls}>
                <TextInput 
                value={email as string}
                onChangeText={value => onChange('email', value)}
                placeholder="Email"
                placeholderTextColor="white"
                keyboardType="email-address"
                //style={styles.Input}
                />

               <TextInput 
               placeholder="Password"
               placeholderTextColor="white"
               secureTextEntry={true}
               onChangeText={value => onChange('password', value)}
               value={password as string}
               //style={styles.Input}
               />
            </View>
            <TouchableOpacity onPress={doLogin} style={styles.Button}>
                <Text style={styles.ButtonText}>SignIn</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        backgroundColor: '#4a4946',
    },
    Title: {},
    Controls: {},
    Button: {},
    ButtonText:{}


});
export default Component;
