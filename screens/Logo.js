import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Game from './Game';
import FadeInAnim from '../animations/FadeInAnim';
import Menu from './Menu';

class LogoScreen extends React.Component {

  startGame = () => {
    this.props.navigation.navigate('Menu');
  };

  render() {
    console.log("At menu!");
    return(
      <View style={styles.container}>
        <FadeInAnim duration={10000}>
          <TouchableOpacity onPress={() => this.startGame()}>
            <View  style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }} >
              <Text style={styles.color}>This is</Text>
              <Text>Punch OUT</Text>
              <Text>Touch anywhere to continue</Text>
            </View>
          </TouchableOpacity> 
        </FadeInAnim>
      </View>
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
  },
  color: {
    color: 'red',
  },
});
const Logo = StackNavigator({
  Home: { screen: LogoScreen },
  Menu: { screen: Menu },
});

export default Logo;