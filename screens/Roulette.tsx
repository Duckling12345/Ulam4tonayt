import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import WheelOfFortune from 'react-native-wheel-of-fortune';


const participants = [
  'Fish',
  'Chicken',
  'Beef',
  'Pork',
  'Salad',
  'Pastry',
  'Beverages'
];
class Roulette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winnerValue: null,
      winnerIndex: null,
      started: false,
      showWinner: false, 
    };
    this.child = null;
  }

  buttonPress = () => {
    this.setState({
      started: true,
    });
    this.child._onPress();
  };

  backButtonPress = () => {
    this.setState({
      showWinner: false,
    });
  };

  render() {
    const wheelOptions = {
      rewards: participants,
      knobSize: 30,
      borderWidth: 5,
      borderColor: '#fff',
      innerRadius: 30,
      duration: 6000,
      backgroundColor: 'transparent',
      textAngle: 'horizontal',
      knobSource: require('../assets/images/knob.png'),
      onRef: ref => (this.child = ref),
    };
    return (
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Random Dish Roulette</Text>
        </View>
        <WheelOfFortune
          options={wheelOptions}
          getWinner={(value, index) => {
            this.setState({winnerValue: value, winnerIndex: index, showWinner:  true});
          }}
          
        />
        {!this.state.started && (
          <View style={styles.startButtonView}>
            <TouchableOpacity
              onPress={() => this.buttonPress()}
              style={styles.startButton}>
              <Text style={styles.startButtonText}>Press to Spin!</Text>
            </TouchableOpacity>
          </View>
        )}
        {this.state.winnerIndex != null && (
          <View style={styles.winnerView}>
            <Text style={styles.winnerText}>
              Dish of the day: {participants[this.state.winnerIndex]}
            </Text>

            <View style={{flexDirection: "row", justifyContent: "center", padding: Spacing, paddingHorizontal: Spacing * 2,
}}>
            <TouchableOpacity
              onPress={() => {
                this.setState({winnerIndex: null});
                this.child._tryAgain();
              }}
              style={styles.tryAgainButton}>
              <Text style={styles.tryAgainText}>Go to Recipe</Text>
            </TouchableOpacity>
              <TouchableOpacity
              onPress={() => {
                this.setState({winnerIndex: null});
                this.child._tryAgain();
              }}
              style={styles.tryAgainButton}>
              <Text style={styles.tryAgainText}>Try Again?</Text>
            </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}
export default Roulette;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButtonView: {
    position: 'absolute',
    bottom: 80,
  },
  startButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  startButtonText: {
    fontSize: FontSize.large,
    color: '#fff',
    fontFamily: Font["poppins-bold"],
  },
  winnerView: {
    position: 'absolute',
    bottom: Spacing * 5,
    alignItems: 'center',
  },
  winnerText: {
    fontSize: FontSize.large,
    fontFamily: Font["poppins-bold"],   
    color: '#333',
  },
  tryAgainButton: {
    padding: Spacing,
    backgroundColor: Colors.primary,
    borderRadius: Spacing,
    marginTop: Spacing,
  },
  tryAgainText: {
    fontSize: FontSize.medium,
    fontFamily: Font["poppins-bold"],    
    color: '#fff',
    padding: 3,
  },
  titleView: {
    position: 'absolute',
    top: 120,
  },
  titleText: {
    fontSize: FontSize.xLarge,
    fontFamily: Font["poppins-bold"],    
    color: '#333',
  },
});
