import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotesScreenComponent from './src/NotesScreenComponent';
import firebase from 'firebase';
import LoginScreenComponent from './src/LoginScreenComponent';

export default function App() {

  
  if(firebase.apps.length === 0){
    var firebaseConfig = {
      apiKey: ,
      authDomain: "rn-masterclass-3007-8aab0.firebaseapp.com",
      databaseURL: "https://rn-masterclass-3007-8aab0.firebaseio.com",
      projectId: "rn-masterclass-3007-8aab0",
      storageBucket: "rn-masterclass-3007-8aab0.appspot.com",
      messagingSenderId: "179820542940",
      appId: "1:179820542940:web:bf82f2a4d5aed25404ad19"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }


  return (
    <View style={styles.container}>
      {/* <NotesScreenComponent/> */}
      <LoginScreenComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
