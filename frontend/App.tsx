/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  // ScrollView,
  // StatusBar,
  // StyleSheet,
  // Text,
  // useColorScheme,
  // View,
} from 'react-native';

import Navbar from './component/Navbar.js';

import Create from './component/Create.js';
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <Create />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'black',
    borderColor: 'red',
    borderWidth: 2,
    height: '100%',
  },
});

export default App;
