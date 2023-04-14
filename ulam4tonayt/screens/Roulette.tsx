import {Dimensions,ImageBackground,SafeAreaView,StyleSheet,Text,TouchableOpacity,View} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Roulette">;

const Roulette: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View>
      <Text> walang laman haha </Text>
     </View>
    </SafeAreaView>
  );
};

export default Roulette;

const styles = StyleSheet.create({});
