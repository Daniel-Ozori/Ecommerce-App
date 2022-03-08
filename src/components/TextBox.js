import React,{useState,useEffect,useRef} from "react";
import {Text,View,TextInput,StyleSheet,Animated,Image} from 'react-native';


const TextBox = ({label,secureTextEntry}) => {
    const [value, setValue] = useState('');
    const [icon,setIcon] = useState('');
    const moveText = useRef(new Animated.Value(0)).current;
    
    useEffect(() => {
        if (value !== "") {
            moveTextTop();
        } else if (value === "") {
            moveTextBottom();
            setIcon('');
        }
    }, [value])

    const onChangeText = (text) => {
        setValue(text);
        if(value !== ''){
            if(label === 'Name'){
                setIcon(require('../assets/correct_icon.png'));
            }else if(label === 'Email'){
                if(value.match(/\S+@\S+\.\S+/)){
                    setIcon(require('../assets/correct_icon.png'));
                }else{setIcon(require('../assets/wrong_icon.png'));

                }
            }
            
        }else{
        }
      }

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
            <Text style={styles.label}>{label}</Text>
            </Animated.View>
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={true}
                autoCapitalize='none'
                style={styles.input}
                value={value}
                editable={true}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                onChangeText={onChangeText}/>
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