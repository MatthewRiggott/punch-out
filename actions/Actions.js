import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

class Actions extends React.Component {

  render() {
    return(
      <View>
        <TouchableOpacity>
          <Text>Attack</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Charge</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Defend</Text>
        </TouchableOpacity>
      </View>
    );
  }
}



export default Actions;
