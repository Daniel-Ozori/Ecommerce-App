import React,{useState} from 'react';
import styles from '../components/MainStyle.js'
import {TouchableOpacity, Text, View, TextInput,Image,SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextBox from '../components/TextBox';
import Header from '../components/Header.js';
import PrimaryButton from '../components/PrimaryButton.js';

const SignUp = () => {
    const navigation = useNavigation();
    return(
        
        <ScrollView style={styles.container} >
            <SafeAreaView />
             <Header/>
            <View style={{paddingHorizontal:10,height:'100%',}}>
                <Text style={styles.title}>
                    Sign up
                </Text>

                <View style={{marginTop:90,}}>
                    <TextBox
                        label='Name'/>
                    <TextBox
                        label='Email'/>
                    <TextBox
                        label='Password' 
                        secureTextEntry/>
                    
                    <TouchableOpacity
                        onPress={() => navigation.navigate('LoginScreen')}>
                        <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'flex-end',marginBottom:30}}>
                            <Text style={{color:'white'}}>Already have an account?</Text>
                            
                            <Image source={require('../assets/arrow_right.png')} 
                            style={{width:25,height:25}} />
                            
                        </View>
                    </TouchableOpacity>

                    <PrimaryButton
                        text='Sign up'/>
                    
                </View>
                <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:0,height:100,marginTop:50}}>
                    <Text style={{color:'white'}}>Or sign up with social account</Text>
                    <View style={{display:'flex',flexDirection:'row',marginTop:30}}>
                        
                        <TouchableOpacity>
                            <View style={styles.socials}>
                                <Image source={require('../assets/google_button.png')} 
                                    style={{width:25,height:25}} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.socials}>
                                <Image source={require('../assets/facebook_button.png')} 
                                    style={{width:25,height:25}} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
           
        </ScrollView>
    )
}
export default SignUp;