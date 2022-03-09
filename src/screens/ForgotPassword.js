import React,{useState} from 'react';
import styles from '../components/MainStyle.js'
import {TouchableOpacity, Text, View, TextInput,Image,SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import TextBox from '../components/TextBox';
import Header from '../components/Header.js';
import PrimaryButton from '../components/PrimaryButton.js';

const ForgotPassword = () => {
    const [userInfo,setUserInfo] = useState({
        email:'',
    });
    const {email} = userInfo;
    const [error,setError] = useState();
    const handleOnChangeText = (value,field) => {
        setUserInfo({...userInfo, [field] : value});
        if(email.match(/\S+@\S+\.\S+/)){
            setError('');
        }
    }
    
    const submit = () =>{
        if(!email.match(/\S+@\S+\.\S+/)){
            setError('Not a valid email address. Should be your@email.com');
        }
    }
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
                        value={email}
                        onChangeText={(value) => [handleOnChangeText(value,'email')]}
                        label='Email'/>
                    <Text style={{color:'red',fontSize:10,textAlign:'center',marginBottom:50}}>
                        {error}
                    </Text>
                    <PrimaryButton
                        text='send'
                        onPress={submit}/>
                        
                </View>
            </View>
            
           
        </ScrollView>
    )
}
export default ForgotPassword;
