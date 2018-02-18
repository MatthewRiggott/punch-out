import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

class Actions extends React.Component {

  takeAction = (action) => {
    console.log('take Action');
    console.log(action);
    const player = this.props.player;
    this.props.setPlayerAction(player, action);
  }

  render() {
    console.log(this.props.playerObj);
    const player = this.props.playerObj;
    let disable = false;
    let msg = '';
    if (player.charge <= 0) {
      disable = true;
      msg = 'Need Charge To Attack';
    }
    return(
      <View style={{height: 200,}}>
        <Text>{msg}</Text>
        <TouchableOpacity
          disabled={disable}
          style={{flex: 1, backgroundColor: 'red',}}
          onPress={(action) => this.takeAction('attack')}
        >
          <Text style={{flex: 1, textAlign: 'center', color: 'white'}}>Attack</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, backgroundColor: 'blue',}}
          onPress={(action) => this.takeAction('charge')}
        >
          <Text style={{flex: 1, textAlign: 'center', color: 'white'}}>Charge</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, backgroundColor: 'green',}}
          onPress={(action) => this.takeAction('defend')}
        >
          <Text style={{flex: 1, textAlign: 'center', color: 'white'}}>Defend</Text>
        </TouchableOpacity>
      </View>
    );
  }
}



export default Actions;
