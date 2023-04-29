import {Dimensions,ImageBackground,SafeAreaView,StyleSheet,Text,TouchableOpacity,View, FlatList, Image, ScrollView, TextInput} from "react-native";
import React, { useState, useEffect } from 'react';
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import Roulette from '../screens/Roulette';
import Register from '../screens/RegisterScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';



const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Home">;
const Homepage: React.FC<Props> = ({ navigation: { navigate } }) => {

  return (
    <SafeAreaView>
    <ScrollView>
    <View>
    <View style={{
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,}}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 28, marginTop: 20}}>Hello,</Text>
            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10, marginTop: 20}}>
              Guest!
            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 22, color: Colors.text}}>
            What do you want today
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={{
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: Colors.gray,
    alignItems: 'center',
    paddingHorizontal: 20,
  }}>
          <Icon name="search" size={28} />
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Search for food"
          />
        </View>
      </View>
        <Text
        style={{
        fontSize: FontSize.medium,
        color: Colors.text,
        fontFamily: Font["poppins-bold"],
        marginTop: Spacing * 2,
        marginLeft: Spacing,
        }}> 
        Categories 
        </Text>  
        <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
        style={{
            paddingHorizontal: Spacing * 2,
            paddingTop: Spacing * 2,
            paddingRight: Spacing * 2,
            padingLeft: Spacing * 2,
            flexDirection: "row",
            alignItems: 'center'
          }}>

      <TouchableOpacity>
          <Image
              source={require('../assets/images/kape.png')}
              style={{width: 70, height: 70, borderRadius: 70/2}}
            />
            <Text
             style={{
              color: Colors.text,
              fontFamily: Font["poppins-regular"],
              textAlign: "center",
            }}>Breakfast</Text>
          </TouchableOpacity>
           <TouchableOpacity>
          <Image
              source={require('../assets/images/app.png')}
              style={{width: 70, height: 70, borderRadius: 70/2}}           
               />
              <Text
              style={{
              color: Colors.text,
              fontFamily: Font["poppins-regular"],
              textAlign: "center",
            }}>Lunch</Text>
          </TouchableOpacity>
       <TouchableOpacity>
          <Image
              source={require('../assets/images/dinner.png')}
             style={{width: 70, height: 70, borderRadius: 70/2}}
            />
                        <Text
                        style={{
              color: Colors.text,
              fontFamily: Font["poppins-regular"],
              textAlign: "center",
            }}>Dinner</Text>
          </TouchableOpacity>
      <TouchableOpacity>
          <Image
              source={require('../assets/images/soup.png')}
              style={{width: 70, height: 70, borderRadius: 70/2}}            
            />
                        <Text
                        style={{
              color: Colors.text,
              fontFamily: Font["poppins-regular"],
              textAlign: "center",
            }}>Appetizer</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
              source={require('../assets/images/sala.png')}
              style={{width: 70, height: 70, borderRadius: 70/2}}
            />
                        <Text
                        style={{
              color: Colors.text,
              fontFamily: Font["poppins-regular"],
              textAlign: "center",
            }}>Salads</Text>
          </TouchableOpacity>
           <TouchableOpacity>
          <Image
              source={require('../assets/images/pastry.png')}
              style={{width: 70, height: 70, borderRadius: 70/2}}            
            />
                        <Text>Desserts</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
              source={require('../assets/images/pastry2.png')}
              style={{width: 70, height: 70, borderRadius: 70/2,}}
            />
                        <Text
                        style={{
              color: Colors.text,
              fontFamily: Font["poppins-regular"],
              textAlign: "center",
            }}>Pastries</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: Spacing * 4,}}>
          <Image
              source={require('../assets/images/image4.png')}
              style={{width: 70, height: 70, borderRadius: 70/2,}}
            />
                        <Text
                        style={{
              color: Colors.text,
              fontFamily: Font["poppins-regular"],
              textAlign: "center",
            }}>More</Text>
          </TouchableOpacity>
      </ScrollView>   
</View>


     <View>
      <Text
      style={{
        fontSize: FontSize.medium,
        color: Colors.text,
        fontFamily: Font["poppins-bold"],
        marginTop: Spacing * 2,
        marginLeft: Spacing
        }}>
        Recommendations</Text>
      </View>

      <View 
      style={{
            paddingHorizontal: Spacing * 2,
            paddingTop: Spacing * 2,
            flexDirection: "row",
            alignItems: 'center'
          }}> 
      <TouchableOpacity style={{marginRight: Spacing * 2,}}          
      onPress={() => navigate("Adobs")}>
          <Image
              source={require('../assets/images/chmken.jpg')}
              style={{width: 170, height: 150, borderRadius: 30,}}
            />
                        <Text
                        style={{
              color: Colors.text,
              fontFamily: Font["poppins-regular"],
              textAlign: "center",
            }}>Chicken Adobo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: Spacing * 3,}}
                onPress={() => navigate("Simigang")}>
          <Image
              source={require('../assets/images/simigang.jpg')}
              style={{width: 170, height: 150, borderRadius: 30,}}
            />
                        <Text
                        style={{
              color: Colors.text,
              fontFamily: Font["poppins-regular"],
              textAlign: "center",
            }}>Pork Sinigang</Text>
          </TouchableOpacity>
      </View>

      <View 
      style={{
            paddingHorizontal: Spacing * 2,
            paddingTop: Spacing * 2,
            flexDirection: "row",
            alignItems: 'center'
          }}> 
      <TouchableOpacity style={{marginRight: Spacing * 2,}}
            onPress={() => navigate("Bulalos")}>
          <Image
              source={require('../assets/images/buuu.jpg')}
              style={{width: 170, height: 150, borderRadius: 30,}}
            />
                        <Text
                        style={{
              color: Colors.text,
              fontFamily: Font["poppins-regular"],
              textAlign: "center",
            }}>Bulalo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: Spacing * 3,}}
                onPress={() => navigate("Karekares")}>
          <Image
              source={require('../assets/images/kare.jpg')}
              style={{width: 170, height: 150, borderRadius: 30,}}
            />
                        <Text
                        style={{
              color: Colors.text,
              fontFamily: Font["poppins-regular"],
              textAlign: "center",
            }}>Kare Kare</Text>
          </TouchableOpacity>
      </View>

    <View 
      style={{
            paddingHorizontal: Spacing * 2,
            paddingTop: Spacing * 2,
            flexDirection: "row",
            alignItems: 'center'
          }}> 
      <TouchableOpacity style={{marginRight: Spacing * 2,}}
            onPress={() => navigate("Sisigs")}>
          <Image
              source={require('../assets/images/simsig.jpg')}
              style={{width: 170, height: 150, borderRadius: 30,}}
            />
                        <Text
                        style={{
              color: Colors.text,
              fontFamily: Font["poppins-regular"],
              textAlign: "center",
            }}>Pork Sisig</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: Spacing * 3,}}
                onPress={() => navigate("Pinakbers")}>
          <Image
              source={require('../assets/images/pinakbetn.jpg')}
              style={{width: 170, height: 150, borderRadius: 30,}}
            />
                        <Text
                        style={{
              color: Colors.text,
              fontFamily: Font["poppins-regular"],
              textAlign: "center",
            }}>Pinakbet Ilocano</Text>
          </TouchableOpacity>
      </View>

    <View 
      style={{
            paddingHorizontal: Spacing * 2,
            paddingTop: Spacing * 2,
            flexDirection: "row",
            alignItems: 'center'
          }}> 
      <TouchableOpacity style={{marginRight: Spacing * 2,}}
            onPress={() => navigate("Tinols")}>
          <Image
              source={require('../assets/images/timola.jpg')}
              style={{width: 170, height: 150, borderRadius: 30,}}
            />
                        <Text
                        style={{
              color: Colors.text,
              fontFamily: Font["poppins-regular"],
              textAlign: "center",
            }}>Chicken Tinola</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: Spacing * 3,}}
                onPress={() => navigate("Kalders")}>
          <Image
              source={require('../assets/images/beep.jpg')}
              style={{width: 170, height: 150, borderRadius: 30,}}
            />
                        <Text
                        style={{
              color: Colors.text,
              fontFamily: Font["poppins-regular"],
              textAlign: "center",
            }}>Beef Kaldereta</Text>
          </TouchableOpacity>
      </View>
          <View style={{paddingTop: Spacing * 2,}}>

          <Text
          style={{
            color: Colors.text, 
            fontFamily: Font["poppins-regular"], 
            textAlign: "center"
            }}> 
          You're all caught up! 
          </Text>
          </View>
           
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
