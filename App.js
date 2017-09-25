import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Menu from './screens/Menu';

class HomeScreen extends React.Component {
  continue = () => {
    console.log("clicked");
    this.props.navigation.navigate('Menu');
  }

  render() {
    console.log("Spash screen!");
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.continue()}>
        <View style={styles.centerText}>
          <Text>Touch to continue</Text>
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

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Menu: { screen: Menu}
});

export default App;
