import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';


const LoginScreenComponent = () => {
    return <View>
        <Text> Email: </Text>
        <TextInput 
            style={styles.textInputStyle}
            autoCorrect={false}
            autoCapitalize="none"
        />

        <Text> Password </Text>
        <TextInput 
            style={styles.textInputStyle}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
        />


        <Button title={"Log In"}/>
        <Button title={"Sign Up"}/>
    </View>
}

const styles = StyleSheet.create({
    textInputStyle: {
        width: 300,
        borderWidth: 5,
        margin: 10,
        padding: 10,
        borderRadius: 3
    }
});


export default LoginScreenComponent;