import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

const PrimaryButton = ({text}) =>{
    return(
        <TouchableOpacity>
            <View style={styles.button_primary}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    
    button_primary:{
        backgroundColor:'#EF3651',
        width:'100%',
        height:45,
        borderRadius:20,
        justifyContent:'center',
        display:'flex',
        alignContent:'center',
        alignItems:'center',
        elevation:10,
        shadowColor:'#EF365159',
        marginVertical:5,
    },
    text:{
        color:'white',
        textTransform:'capitalize',
    }
});
export default PrimaryButton;