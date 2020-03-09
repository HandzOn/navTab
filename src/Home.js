import React from 'react';
import { Text, View } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#7c108e' }}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Home</Text>
      </View>
    );
  }
}

export default HomeScreen;