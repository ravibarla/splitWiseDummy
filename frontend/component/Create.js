import React from 'react';
import {
  //   SafeAreaView,
  //   StyleSheet,
  View,
  // ScrollView,
  // StatusBar,
  // StyleSheet,
  //   Text,
  StyleSheet,
  Button,
  //   Alert,
  // useColorScheme,
  // View,
} from 'react-native';

export default function Create() {
  // console.log("hii")
  return (
    <View style={styles.container}>
      <Button title="create" onPress={() => console.log('pressed')} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
