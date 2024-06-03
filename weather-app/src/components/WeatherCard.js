
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const WeatherCard = ({ weatherData }) => {
  const { temperature, description, icon } = weatherData;
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name={icon} size={60} color="#fff" />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.temperature}>{temperature}°C</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    elevation: 5,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: 'center',
  },
  temperature: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 18,
    color: '#fff',
  },
});

export default WeatherCard;
