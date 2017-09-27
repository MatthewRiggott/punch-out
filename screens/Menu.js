import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Game from './Game';

class MenuScreen extends React.Component {

  startGame = () => {
    this.props.navigation.navigate('Game');
  };

  render() {
    console.log("At menu!");
    return(
      <View>
        <Text>This is a menu.</Text>
        <Text>Hello! Select Options and play.</Text>
        <Button title='Start Match' onPress={() => this.startGame()} />
      </View>
    );
  }
}


const Menu = StackNavigator({
  Home: { screen: MenuScreen },
  Game: { screen: Game },
});

export default Menu;
