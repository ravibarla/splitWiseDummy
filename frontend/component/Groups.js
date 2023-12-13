import React, {useEffect, useState} from 'react';
import {
  //   SafeAreaView,
  //   StyleSheet,
  View,
  // ScrollView,
  // StatusBar,
  // StyleSheet,
  //   Text,
  //   StyleSheet,
  //   Button,
  //   Alert,
  // useColorScheme,
  // View,
} from 'react-native';
import axios from 'axios';
const [groups, setGroups] = useState('');
useEffect(() => {
  axios
    .get('http://localhost:3200/') // Replace with your backend URL
    .then(res => {
      setGroups(res.data);
    })
    .catch(error => {
      console.error('Error fetching Groups:', error);
    });
});

export default function Create() {
  console.log('groups :', groups);
  return <View></View>;
}
const styles = StyleSheet.create({});
