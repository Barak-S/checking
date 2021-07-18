import React, { useState, useMemo } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { name as appName } from './app.json';
import LoggedOutView from './containers/loggedOutView';
import { colors } from './styles/colors';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: `${colors.blue}`,
      accent: `${colors.purple}`,
    },
  };

  const AppContent = useMemo(() => {
    if (loggedIn){
      return(<Text>logged in</Text>)
    } else {
      return(<LoggedOutView/>)
    }
  });

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        {AppContent}
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


AppRegistry.registerComponent(appName, () => App);
