import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotesScreenComponent from './src/NotesScreenComponent';
import firebase from 'firebase';
import LoginScreenComponent from './src/LoginScreenComponent';

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  
  if(firebase.apps.length === 0){
    var firebaseConfig = {
      apiKey: "AIzaSyDbqUs4ZArXyqOQaC6QWc-YKFn8xIVO3OM",
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

  firebase.auth().onAuthStateChanged((user) => {
    if(user === null) {
      setUserLoggedIn(false)
    } else {
      setUserLoggedIn(true)
    }
  })

  if(userLoggedIn) {
    return (
      <View style={styles.container}>
        <NotesScreenComponent/>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <LoginScreenComponent/>
      </View>
    );
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
