import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1E1F28',
        width:'100%',
        height:100,
        flex:1,
    
    },
    title:{
        fontWeight:'500',
        fontSize:30,
        color:'white',
    },
    header:{
        width:'100%',
        height:50,
        padding:10,
    },
    input_style:{
        width:'100%',
        height:60,
        backgroundColor:'#2A2C36',
        borderRadius:5,
        paddingHorizontal:20,
        marginBottom:10,
        color:'white',
    },
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
        shadowColor:'#EF365159'
    },
    socials:{
        backgroundColor:'white',
        height:65,
        width:75,
        borderRadius:20,
        marginHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default styles;