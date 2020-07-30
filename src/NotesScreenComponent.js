import React, { useState } from 'react';
import  {Text, FlatList, View, StyleSheet, TextInput, Button}  from 'react-native';
import SingleNoteSummaryComponent from './SingleNoteSummaryComponent';
import CreateNoteComponent from './CreateNoteComponent';
import firebase from 'firebase'
// a react component is nothing but a javascript function

const NotesScreenComponent = () => {

    // var data = [
    //     {"date": "24-10-1998", "text": "I am going to Dubai"},
    //     {"date": "24-02-2002", "text": "I have to bring vegatbles "},
    //     {"date": "24-02-2003", "text": "I have to bring vegatbles"},
    //     {"date": "24-02-2004", "text": "I have to bring vegatbles"},
    //     {"date": "24-02-2005", "text": "I have to bring vegatbles"},
    //     {"date": "24-02-2006", "text": "I have to bring vegatbles"},
    //     {"date": "24-02-2007", "text": "I have to bring vegatbles"}
    // ]

    const [data, setData] = useState([]);
    // to write javascript inside jsx, i need to enclose javascript code in {}
    // {name: 'abc', 'age': 12} -> {name} -> {name: 'abc'}
    // item , index

    const addNewNote = (text) => {
        if(text.length > 0){
            setData([{"text": text, "date": new Date()}, ...data])
        }
        

        // A= ['a', 'b', 'c', 'd'] -> ...A -> 'a', 'b', 'c', 'd'
    }


    return <View style={styles.viewProperties}>

        <Button 
            title={"Log Out"}
            onPress={() => firebase.auth().signOut()}
        />


        <CreateNoteComponent onCreateButtonPress={
            (text) => addNewNote(text) 
        }/>
        
        <FlatList 
            showsVerticalScrollIndicator={false}
            style={styles.listProperties}
            data={data}
            keyExtractor={(item, index) => {
                    return index.toString()
                }
            }
            numColumns={2}
            renderItem={({item}) => {
                // console.log(index, item)
                return <SingleNoteSummaryComponent myNoteDate={item.date} myNoteText={item.text}/>
            }
            
        }   
        />
    </View>

}


const styles = StyleSheet.create({
    viewProperties : {
        marginTop: 50
    },
    textProperties: {
        fontSize: 24
    },
    textViewStyle: {
        height: 150,
        width: 150,
        margin: 10,
        borderRadius: 10,
        padding: 5,
        alignItems: "center",
        justifyContent: "center"
    }
});

const randomBackground = () => {
    var red = Math.floor(Math.random() * 255) // 123
    var green = Math.floor(Math.random() * 255) // 45
    var blue = Math.floor(Math.random() * 255) // 43

    // String Interpolation
    // In a string -> isnert a value of some other data type
    // ""  ''  ``

    return `rgb(${red}, ${green}, ${blue})` // rgb(123, 45, 43)
}

export default NotesScreenComponent;


// ['rgb(1,2,3)', ]
// Choose random element from list in js

// Javascript object JSON - JavaScript Object Notation


// {
//     'name': 'Naman',
//     'age': 'blah',
//     'hobby': 'meh',
//     'friends': [
//         "A", "B", "C"
//     ],
//     'scbool' : {
//         'name': 'BHS',
//         'location': 'Rajasthan'
//     },
//     'fav_city': 'abc'

// }



// If we have to write JS in JSX, we need to surround JS code in {}























