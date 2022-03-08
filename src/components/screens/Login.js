import React from 'react';
import styles from '../styles/MainStyle.js'
import {TouchableOpacity, Text, View, TextInput,Image,SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
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
                    Login
                </Text>

                <View style={{marginTop:90,}}>
                    <TextInput
                        style={styles.input_style}
                        placeholder='Email'
                        placeholderTextColor='#ABB4BD'
                    />
                    <TextInput
                        style={styles.input_style}
                        placeholder='Password'
                        placeholderTextColor='#ABB4BD'
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ForgotPassScreen')}>
                        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-end',marginBottom:30}}>
                            <Text style={{color:'white'}}>Forgot your password?</Text>
                            
                            <Image source={require('../../assets/arrow_right.png')} 
                            style={{width:25,height:25}} />
                            
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.button_primary}>
                            <Text style={{color:'white'}}>LOGIN</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
                <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:0,height:100,marginTop:50}}>
                    <Text style={{color:'white'}}>Or sign up with social account</Text>
                    <View style={{display:'flex',flexDirection:'row',marginTop:30}}>
                        <TouchableOpacity>
                            <View style={styles.socials}>
                                <Image source={require('../../assets/facebook_button.png')} 
                                    style={{width:25,height:25}} />
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <View style={styles.socials}>
                                <Image source={require('../../assets/google_button.png')} 
                                    style={{width:25,height:25}} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
           
        </ScrollView>
    )
}
export default Login;