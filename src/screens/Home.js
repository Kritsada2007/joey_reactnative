import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:24}}>Home Screen</Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        backgroundColor:'lightgreen'
      },
      android: {
        backgroundColor:'lightblue'
      }
    })
  }
})