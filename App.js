
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();

const SignUpScreen = ({ navigation }) => {
  return (
    <SignUp />
  );
};
const LoginScreen = ({ navigation, route }) => {
  return(
    <Login />
  )
};
const ForgotPassScreen = ({ navigation, route }) => {
  return(
    <ForgotPassword />
  )
};
export default function App() {
  
  return (
    <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen
            name="Sign up"
            component={SignUpScreen}
          />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="ForgotPassScreen" component={ForgotPassScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1F28',
    alignItems: 'center',
    justifyContent: 'center',
  },
});