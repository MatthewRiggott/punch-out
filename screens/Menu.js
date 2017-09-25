import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Menu extends React.Component {

  render() {
    console.log("At menu!");
    return(
      <View>
        <Text>This is a menu.</Text>
        <Text>Hello! Select Options and play.</Text>
      </View>
    );
  }
}

export default Menu;
