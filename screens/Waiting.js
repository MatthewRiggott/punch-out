import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

class Waiting extends React.Component {

  continue = () => {
    this.props.isClicked();
  }

  render() {
    const waitingText = `Player ${this.props.player }, tap to continue`;
    return (
      <TouchableOpacity style={ styles.container } onPress={() => this.continue()}>
        <View style={ styles.centerText }>
          <Text>{ waitingText }</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
  centerText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Waiting;
