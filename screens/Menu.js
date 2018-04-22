import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Game from './Game';
import FadeInAnim from '../animations/FadeInAnim';

class MenuScreen extends React.Component {

  startGame = () => {
    this.props.navigation.navigate('Game');
  };

  render() {
    console.log("At menu!");
    return(
      <View>
        <FadeInAnim duration={10000}>
          <Text>This is a menu.</Text>
          <Text>Hello! Select Options and play.</Text>
          <Button title='Start Match' onPress={() => this.startGame()} />
        </FadeInAnim>
      </View>
    );
  }
}


const Menu = StackNavigator({
  Home: { screen: MenuScreen },
  Game: { screen: Game },
});

export default Menu;
