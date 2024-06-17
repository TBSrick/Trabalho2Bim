import { View, StyleSheet } from 'react-native';
import React from 'react'

import Home from '../../components/home' 

export default function HomeScreen() {
  return (
    <View style={styles.Container}>
     <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  
  },
});
