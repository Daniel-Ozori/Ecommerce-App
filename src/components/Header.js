import React from 'react';
import {View,TouchableOpacity,Image,StyleSheet,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = ({title}) =>{
    const navigation = useNavigation();
    return(
        <View style={styles.header}>
            <TouchableOpacity
                        onPress={() => navigation.goBack()} >
                <Image source={require('../assets/chevron.png')} 
                style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:50,
        padding:10,
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
    },
    title:{
        color:'white',
        fontSize:15,
        width:'100%',
        textAlign:'center',
        marginRight:15,
    },
    icon:{
        width:15,
        height:15,
    }
});
export default Header;