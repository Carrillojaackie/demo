import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Screen</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textLink}>Go Home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text style={styles.textLink}>Go to Details</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.textLink}>Go back</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textLink: {
    fontSize: 18,
    color: '#000',
    marginVertical: 10,
  },
});

export default WelcomeScreen;




