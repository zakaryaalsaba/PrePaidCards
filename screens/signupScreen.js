import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import apiRouters from '../constants/apiRouters';
import {post} from '../constants/apiCalls';

export default function SignupScreen(props) {
    const [userName, setuserName] = useState('');
    const [email , setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

    const handleRegister = async () => {
        if (password !== confirmPassword)   {
            console.log('Pasword does not match')
            return;
                
        }
        var  data = await  post(apiRouters.register,{
            userName:userName,
            Email:email,
            Password: password
        })
        console.log(data);
        if (data.success){
            console.log("Signed up");
        }
        else{
            var errors ='' ;
            data.errors.map(error=> {errors=errors + error + '\n'});
            alert(errors);
        }
        var data  = await post(apiRouters.register);
    }

  return (
    <View>
        <Text>signup...</Text>
    </View>
  );
}