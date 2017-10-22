import React from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import player from '../config/player';
import Waiting from './Waiting';
import Actions from '../actions/Actions';

class Game extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      game: {
        status: '',
        turn: {
          waiting: true,
          player: 0,
        },
      },
      players: [
        player,
        player
      ]
    }
  }

  getNextPlayer = () => {
    const totalPlayers = this.state.players.length;
    const nextPlayer = this.state.game.turn.player + 1;
    return nextPlayer !== totalPlayers ? nextPlayer : 0;
  }

  startTurn = () => {
    const gameState = this.state.game;
    const nextTurn = {
      turn: {
        waiting: true,
        player: this.state.player,
      },
    }

    const updatedState = Object.assign(gameState, nextTurn);
    this.setState({
      game: updatedState,
    });
  }

  setNextPlayer = () => {
    const gameState = this.state.game;
    const nextTurn = {
      turn: {
        waiting: true,
        player: this.getNextPlayer(),
      },
    }

    const updatedState = Object.assign(gameState, nextTurn);
    this.setState({
      game: updatedState,
    });
  }

  render() {
    console.log("At game!");
    console.log(this.state);
    const content = this.state.game.turn.waiting ?
      <Waiting isClicked={() => this.startTurn()} player={this.state.game.turn.player}/> :
      <Actions />;
    return(
      <View>
        <Text>This is the game.</Text>
        { content }
      </View>
    );
  }
}

export default Game;
// render waiting for player -> player turn -> waiting...
