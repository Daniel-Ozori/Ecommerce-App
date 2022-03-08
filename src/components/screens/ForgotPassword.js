import React from 'react';
import styles from '../styles/MainStyle.js'
import {TouchableOpacity, Text, View, TextInput,Image,SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
    const navigation = useNavigation();
    return(
        <ScrollView style={styles.container} >
            <SafeAreaView />
            <TouchableOpacity
                        onPress={() => navigation.goBack()} >
                <View style={styles.header}>
                <Image source={require('../../assets/chevron.png')} 
                style={{width:15,height:15}} />
            </View>
            </TouchableOpacity>
            
            <View style={{paddingHorizontal:10,height:'100%',}}>
                <Text style={styles.title}>
                    Forgot password
                </Text>

                <View style={{marginTop:90}}>
                    <Text style={{color:'white',marginBottom:10}}>
                        Please, enter your email address. You will receive a link to create a new password via email.
                    </Text>
                    <TextInput
                        style={styles.input_style}
                        placeholder='Email'
                        placeholderTextColor='#ABB4BD'
                    />

                    <TouchableOpacity>
                        <View style={[styles.button_primary,{marginTop:30}]}>
                            <Text style={{color:'white'}}>SEND</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
            
           
        </ScrollView>
    )
}
export default ForgotPassword;