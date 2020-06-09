
import React, {useState} from 'react';
import {
  StyleSheet,  View,
  Image, AsyncStorage, 
  // TextInput,
  TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { colors, fonts, fontSizes } from '../global/styleConstants';
import {screens} from '../global/globalConstants';
import apiRouters from '../global/apiRoutes';
import post from '../global/apiCalls';
import Button from '../components/customButton'; 
import TextInput from '../components/customTextInput';
import KeyboardAvoidingView from '../components/customKeyboardAvoidingView';


export default function LoginScreen(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [currentScreen, setCurrentScreen] = useState(props.currentScreen);

    const handleLogin = async () => {
      console.log("Before test test test");
      console.log(apiRouters.login);
      // var data = await post(apiRouters.login,{
      //  var data = await post('http://192.168.1.65:5001/api/auth/login',{
        var data = await post('http://192.168.1.65:5001/api/auth/login',{
        UserNameOrEmail:userName,
        Password: password
      })
      console.log("After test test test");
        console.log(data);
        if (data.success){
            console.log("Logged in");
        }
        else{
            var errors ='' ;
            //data.errors.map(error=> {errors=errors + error + '\n'});
            alert(errors);
        }
    }
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.mainContianer} >
          <Image  source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              } style={styles.logo} />
          <KeyboardAvoidingView style={styles.inputsContainer}>
              <TextInput
                value={userName}
                onChangeText={(value) => setUserName(value)}
                placeholder='اسم المستخدم' />
  
              <TextInput
                value={password}
                onChangeText={(value) => setPassword(value)}
                secureTextEntry
                placeholder='كلمة المرور' />
  
          </KeyboardAvoidingView>
          <View style={styles.buttonContainer}>
            <Button title='تسجيل دخول' onPress={handleLogin}/>          
          </View>
          <View style={styles.buttonContainer}>
            <Button title='مستخدم جديد؟؟ سجل الان' onPress={()=>props.setCurrentScreen(screens.SignupSCreen)}/>          
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
  
  const styles = StyleSheet.create({
    mainContianer: {
      flex: 1,
      alignItems: "center"
    },
    inputsContainer: {
      width:'100%',
    },
    buttonContainer: {
      marginTop: 40
    },
    logo: {
      maxHeight: 200,
      maxWidth: '30%',
      resizeMode: "contain"
    },
    
  });