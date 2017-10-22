import React from 'react';
import { TouchableHighlight, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

class Waiting extends React.Component {
  render() {
    const waitingText = `Player ${this.props.player} tap to continue`;
    console.log('waiting');
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.isClicked() }>
          <View style={styles.button} >
            <Text style={{color: 'red'}}>{ waitingText }</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    padding: 50,
  },
  buttonText: {
    padding: 50,
    color: 'white'
  }
});

export default Waiting;
