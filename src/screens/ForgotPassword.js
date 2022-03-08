import React from 'react';
import styles from '../components/MainStyle.js'
import {TouchableOpacity, Text, View, TextInput,Image,SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import TextBox from '../components/TextBox';
import Header from '../components/Header.js';
import PrimaryButton from '../components/PrimaryButton.js';

const ForgotPassword = () => {
    return(
        <ScrollView style={styles.container} >
            <SafeAreaView />
            <Header/>
            
            <View style={{paddingHorizontal:10,height:'100%',}}>
                <Text style={styles.title}>
                    Forgot password
                </Text>

                <View style={{marginTop:90}}>
                    <Text style={{color:'white',marginBottom:10}}>
                        Please, enter your email address. You will receive a link to create a new password via email.
                    </Text>
                    <TextBox
                        label='Email'/>

                    <PrimaryButton
                        text='send'/>
                    
                </View>
            </View>
            
           
        </ScrollView>
    )
}
export default ForgotPassword;