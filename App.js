import React, { useState, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoggedOutView from './containers/loggedOutView';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  // const [error,setError] = useState(null)

  const AppContent = useMemo(() => {
    if (loggedIn){
      return(<Text>logged in</Text>)
    } else {
      return(<LoggedOutView/>)
    }
  });

  return (
    <View style={styles.container}>
      {AppContent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
