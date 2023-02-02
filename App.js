import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

import DatePicker from './components/DatePicker'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1577998474517-7eeeed4e448a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}
        resizeMode='cover'
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <Text style={styles.txt}>生年月日</Text>
        <View style={styles.box}>
          <DatePicker
            defaultDate={'1994-01-10'}
            onDateChange={(value) => console.log(value)}
          />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  box: {
    alignItems: 'center',
  },
})
