import React from 'react';
import { Text, View } from 'react-native';

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Configurações</Text>
      </View>
    );
  }
}

export default SettingsScreen;