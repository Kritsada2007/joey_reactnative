import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import LottieView from 'lottie-react-native'

const LottieAnimation = () => {

  const loader = require('./../assets/animations/loader.json')
  const wolverine = require('./../assets/animations/wolverine.json')

  return (
    <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: 200, height: 200}}>
        <LottieView source={require('./../assets/animations/duo-cactus.json')} autoPlay loop />
      </View>
      <LottieView source={loader} style={{width: 200, height: 200}} autoPlay loop />
      <LottieView source={wolverine} style={{width: 250, height: 250}} autoPlay loop />
    </SafeAreaView>
  )
}

export default LottieAnimation

const styles = StyleSheet.create({})