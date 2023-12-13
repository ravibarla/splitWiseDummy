import React from 'react';
import {
  //   SafeAreaView,
  //   StyleSheet,
  View,
  // ScrollView,
  // StatusBar,
  // StyleSheet,
  Text,
  StyleSheet,
  // useColorScheme,
  // View,
} from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>item 1</Text>
      </View>
      <View style={styles.item}>
        <Text>item 2</Text>
      </View>
      <View style={styles.item}>
        <Text>item 3</Text>
      </View>
      <View style={styles.item}>
        <Text>item 4</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    flexWrap: 'wrap',
    borderWidth: 2,
    borderColor: 'black',
    // height: '5%',
  },
  item: {
    borderWidth: 2,
    borderColor: 'cyan',
    // height: '100%',
  },
});
