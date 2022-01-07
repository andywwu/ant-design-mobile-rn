import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Button from '../components/button/demo/basic'

const App = () => {
  return (
    <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text style={{ fontSize: 100 }}>Hello world!</Text>
      </View>
      <Button />
    </SafeAreaView>
  )
}

export default App
