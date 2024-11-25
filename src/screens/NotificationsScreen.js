// src/screens/NotificationsScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';

const NotificationsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notifications Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default NotificationsScreen;
