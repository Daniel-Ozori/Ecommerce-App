import React,{useState,useEffect,useRef} from "react";
import {Text,View,TextInput,StyleSheet,Animated,Image} from 'react-native';
const valid = require('../assets/correct_icon.png');
const invalid = require('../assets/wrong_icon.png');

const TextBox = (props) => {
    let value = props.value;
    const [icon,setIcon] = useState('');
    const moveText = useRef(new Animated.Value(0)).current;
   
    useEffect(()=>{
        let field = props.label;
       
        if(value !== ''){
            switch (field){
                case 'Name':
                    (value.length >= 3 ? setIcon(valid) : setIcon(invalid));
                    break
                case 'Email':
                    (value.match(/\S+@\S+\.\S+/) ? setIcon(valid) : setIcon(invalid));
                    break
                case 'Password':
                    (value.length >= 8 ? setIcon(valid) : setIcon(invalid));
                    break
            }
            
        }
    })    
    
    useEffect(() => {
        if (value !== "") {
            moveTextTop();

        } else if (value === "") {
            moveTextBottom();
            setIcon(null);
        }
    }, [value])

  
    const onFocusHandler = () => {
        if (value !== "") {
            moveTextTop();
        }
    };

    const onBlurHandler = () => {
        if (value === "") {
            moveTextBottom();
        }
    };

    const moveTextTop = () => {
        Animated.timing(moveText, {
        toValue: 0.8,
        duration: 200,
        useNativeDriver: true,
        }).start();
    };

    const moveTextBottom = () => {
        Animated.timing(moveText, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
        }).start();
    };

    const yVal = moveText.interpolate({
        inputRange: [0, 1],
        outputRange: [4, -20],
    });

    const animStyle = {
        transform: [
        {
            translateY: yVal,
        },
        ],
    };
    return(
        <View style={styles.container}>
            <Animated.View style={[styles.animatedStyle, animStyle]}>
            <Text style={styles.label}>{props.label}</Text>
            </Animated.View>
            <TextInput
                {...props}
                secureTextEntry={props.secureTextEntry}
                autoCorrect={true}
                autoCapitalize='none'
                style={styles.input}
                value={props.value}
                editable={true}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}/>
            <Image source={icon} 
                style={styles.icon} />
        </View>
        
        );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        backgroundColor: "#2A2C36",
        paddingTop: 5,
        borderRadius: 5,
        width: "100%",
        alignSelf: "center",
    },
    icon: {
        width: 15,
        height:15,
        top:25,
        right:0,
        marginRight:30,
        position:'absolute',
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        height: 60,
        color: "white",
        width:'100%',
        paddingHorizontal:20,
    },
    label: {
        color: "grey",
        fontSize:12,
    },
    animatedStyle: {
        top: 23,
        left: 20,
        position: 'absolute',
        borderRadius: 90,
        zIndex: 10000,
    },
    
});

export default TextBox;