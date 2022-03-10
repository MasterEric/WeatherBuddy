import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import WeatherInfo from '../components/WeatherInfo';
import { RootTabScreenProps } from '../types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});


const WeatherScreen = function({ navigation }: RootTabScreenProps<'Weather'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <WeatherInfo />
    </View>
  );
}

export default WeatherScreen;