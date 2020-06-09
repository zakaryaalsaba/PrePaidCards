import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useState} from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { screens } from './global/globalConstants';
import { authPost } from './global/apiCalls';
import apiRoutes from './global/apiRoutes';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import LoginScreen from './screens/loginScreen';


const Stack = createStackNavigator();

export default function App(props) {
   const [signedIn, setsignedIn] = useState(false);
   //const isLoadingComplete = useCachedResources();
   const [loaded, setLoaded] = useState(false);

   const loadFonts = async () => {
    await Font.loadAsync({
      'Almarai-Light': require('./assets/fonts/Almarai-Light.ttf'),
      'Almarai-Regular': require('./assets/fonts/Almarai-Regular.ttf'),
      'Almarai-Bold': require('./assets/fonts/Almarai-Bold.ttf')
    })
  }

    // All the setups before rendering
    const setup = async () => {
      await I18nManager.forceRTL(false);
      await loadFonts();
      await checkToken();
    }

    
  if (!loaded) {
    return (<AppLoading startAsync={setup} onFinish={() => setLoaded(true)} />)
  } 
  else if (signedIn)
  {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
  else{
     return (
        <LoginScreen signedIn={setsignedIn} />
     )
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
