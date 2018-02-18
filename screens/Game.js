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
          round: 1,
          waiting: true,
          player: 1,
        },
        end: false,

      },
      players: [
        player,
        player
      ],
    }
  }

  getNextPlayer = () => {
    const totalPlayers = this.state.players.length + 1;
    const nextPlayer = this.state.game.turn.player + 1;
    return nextPlayer !== totalPlayers ? nextPlayer : 1;
  }

  startTurn = () => {
    const game = this.state.game;
    const turn = game.turn;
    const status = `Player ${turn.player} action`;

    const nextTurn = {
      status,
      turn: {
        round: turn.round,
        waiting: false,
        player: turn.player,
      },
    }

    const updatedState = Object.assign(game, nextTurn);
    this.setState({
      game: updatedState,
    });
  }

  setPlayerAction = (playerNum, action) => {
    const game = this.state.game;
    const turn = game.turn;
    const players = this.state.players;
    const playerObj = playerNum === 1 ? players[0] : players[1];
    const player = {
      action,
    };
    const updatePlayer = Object.assign({}, playerObj, player);
    let updatePlayers = [];
    if (playerNum == 1) {
      updatePlayers = [
        updatePlayer,
        players[1],
      ];
    } else {
      updatePlayers = [
        players[0],
        updatePlayer,
      ];
    }
    this.setState({
      players: updatePlayers,
    }, () => {
      if (playerNum === 2) {
        console.log('here');
        this.endRoundActions();
      } else {
        this.setNextPlayer();
      }
    });
    // const updateGameState = Object.assign({}, players, updatePlayers )
  }

  setNextPlayer = () => {
    const gameState = this.state.game;
    const nextTurn = {
      turn: {
        round: gameState.turn.round,
        waiting: true,
        player: this.getNextPlayer(),
      },
    }

    const updatedState = Object.assign(gameState, nextTurn);
    this.setState({
      game: updatedState,
    });
  }

  endRoundActions = () => {
    const players = this.state.players;
    const player1 = players[0];
    const player2 = players[1];
    const action1 = player1.action;
    const action2 = player2.action;
    const updatedPlayers = this.takeAction(player1, action1, player2, action2);
    console.log('endRoundActions');
    console.log(updatedPlayers);

    this.setState({
      players: updatedPlayers,
    }, () => this.checkWin())

  }
  takeAction = (player1, action1, player2, action2) => {
    let updatePlayers = []
    if (action1 == 'charge' && action2 == 'charge') {
      player1.action = '';
      player2.action = '';
      player1.charge += 1;
      player2.charge += 1;
    }
    if (action1 == 'charge' && action2 == 'attack') {
      player1.action = '';
      player2.action = '';
      player1.charge += 1;
      player2.charge -= 1;
      player1.hp -= 1;
    }
    if (action1 == 'attack' && action2 == 'charge') {
      player1.action = '';
      player2.action = '';
      player1.charge -= 1;
      player2.charge += 1;
      player2.hp -= 1;
    }
    if ((action1 == 'attack' && action2 == 'defend') || (action1 == 'defend' && action2 == 'attack') || (action1 == 'defend' && action2 == 'defend')) {
      player1.action = '';
      player2.action = '';
    }
    if (action1 == 'attack' && action2 == 'attack') {
      player1.action = '';
      player2.action = '';
      player2.charge -= 1;
      player1.charge -= 1;
      player1.hp -= 1;
      player2.hp -= 1;
    }
    updatePlayers = [player1, player2];

    return updatePlayers;
  }
  checkWin = () => {
    const players = this.state.players;
    const game = this.state.game;
    const that = this;
    const player1 = players[0];
    const player2 = players[1];
    if (player1.hp === 0 && player2.hp === 0){
     this.setState({
       game: Object.assign({}, game, {
         status: 'Game Over! Draw!',
         end: true,
       })
     });
   } else if (player1.hp === 0) {
      this.setState({
        game: {
          status: 'Game Over! Player 2 wins!',
          end: true,
        }
      });
    } else if (player2.hp === 0) {
      this.setState({
        game: Object.assign({}, game, {
          status: 'Game Over! Player 1 wins!',
          end: true,
        })
      });
    } else {
      this.nextRound();
    }
  }
  nextRound = () => {
    const game = this.state.game;
    const turn = game.turn;
    const nextGameRound = {
      status: 'Start next Round',
      turn: {
        round: turn.round + 1,
        waiting: true,
        player: 1,
        end: false,
      }
    }
    this.setState({
      game: nextGameRound,
    });
  }

  render() {
    console.log("At game!");
    console.log(this.state.game);
    console.log(this.state.players);
    const status = this.state.game.status;

    if (this.state.game.end) {
      return (
        <View style={{flex: 1,}}>
          <Text>{status}</Text>
        </View>
      );
    };
    const turn = this.state.game.turn;



    const players = this.state.players;
    const playerObj = turn.player === 1 ? players[0] : players[1];
    let content = this.state.game.turn.waiting ?
      <Waiting isClicked={() => this.startTurn()} player={turn.player}/> :
      <Actions
        player={turn.player}
        setPlayerAction={(player, action) => this.setPlayerAction(player, action)}
        playerObj={playerObj}
      />;


    return(
      <View style={{flex: 1,}}>
        <Text>This is Round {turn.round}</Text>
        { content }
      </View>
    );
  }
}

export default Game;
// render waiting for player -> player turn -> waiting...
