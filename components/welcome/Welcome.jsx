import React from 'react'
import { View, Text } from 'react-native'

import styles from './welcome.style'
const Welcome = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style = {styles.location}>
          <Text style = {styles.LocationText}>{item.name}</Text>
        </View>
        <View stlye = {styles.weatherView}>
          <Text style = {styles.weather}>{item.weather[0].description}</Text>
          <Text style = {styles.temperatureText}>{Math.round(item.main.temp)}°</Text>
        </View>
      </View>
    </View>
  );
}

export default Welcome