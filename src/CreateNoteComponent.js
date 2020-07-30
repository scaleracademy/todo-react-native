import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, View} from 'react-native'


const CreateNoteComponent = (props) => {
    console.log(props)
    const [newNoteText, setNewNoteText] = useState('')

    return <View>
        <TextInput 
        style={styles.textInputStyles}
        autoCorrect={false}
        autoCapitalize="none"
        multiline={true}
        value={newNoteText}
        onChangeText={(currentText) => {
                setNewNoteText(currentText)
        
        }
        }
        />
        <Button 
            title={"Create Note"}
            onPress={() => {
                props.onCreateButtonPress(newNoteText)
                setNewNoteText('')
            }}
        />
    </View>
    
}

const styles = StyleSheet.create({
    textInputStyles: {
        borderWidth: 5,
        width: 320,
        height: 140,
        borderRadius: 10,
        padding: 15,
        fontSize: 30
    }
});

export default CreateNoteComponent;