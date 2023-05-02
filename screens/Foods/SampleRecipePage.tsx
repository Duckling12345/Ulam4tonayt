import { Dimensions,ImageBackground,SafeAreaView, ScrollView,StyleSheet,Text,TouchableOpacity,View,} from "react-native";
import React, { useState } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import Spacing from "../../constants/Spacing";
const { height } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";
import Colors from '../../constants/Colors';
import AsyncStorage from '@react-native-community/async-storage';

function SampleRecipePage ({ recipes }) {
  const [bookmark, setbookmark] = useState(false);
  const saveBookMark = async recipes => {
       setbookmark(true); 
       await AsyncStorage.getItem('bookmark').then(token => {
           const res = JSON.parse(token);
           if (res !== null) {
               let data = res.find(value => value === recipes);
               if (data == null) {
                   res.push(recipes);
                   AsyncStorage.setItem('bookmark', JSON.stringify(res));
                   alert('You have bookmarked this recipe');
               }
           } else {
               let bookmark = [];
               bookmark.push(recipes);
               AsyncStorage.setItem('bookmark', JSON.stringify(bookmark));
                   alert('You have bookmarkeds this recipe');
           }
       });
   };
 
  return (
    <>
      <ScrollView>
        <View>
          <ImageBackground
            style={{
              padding: Spacing * 2,
              height: height / 2.5,
              paddingTop: Spacing * 4,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            source={recipes.image}
          >
          </ImageBackground>
          <View
            style={{
              padding: Spacing* 2,
              paddingTop: Spacing * 3,
              marginTop: -Spacing * 3,
              borderTopLeftRadius: Spacing* 3,
              borderTopRightRadius: Spacing * 3,
              backgroundColor: Colors.background,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginBottom: Spacing * 3,
                alignItems: "center",
              }}
            >
              <View style={{ width: "70%" }}>
                <Text
                  style={{
                    fontSize: Spacing * 3,
                    color: Colors.text,
                    fontWeight: "700",
                  }}
                >
                  {recipes.name}
                </Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  padding: Spacing,
                  paddingHorizontal: Spacing * 2,
                  backgroundColor: Colors.lightPrimary,
                  flexDirection: "row",
                  borderRadius: Spacing,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="ios-basket"
                  color={Colors.text}
                  size={Spacing * 1.7}
                />
                <Text
                  style={{
                    fontSize: Spacing * 1.6,
                    fontWeight: "600",
                    marginLeft: Spacing / 2,
                    color: Colors.text,
                  }}
                >
                  {recipes.time}
                </Text>
              </View>
                <View
                style={{
                  padding: Spacing,
                  paddingHorizontal: Spacing * 2,
                  backgroundColor: Colors.lightPrimary,
                  flexDirection: "row",
                  borderRadius: Spacing,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="time"
                  color={Colors.text}
                  size={Spacing * 1.7}
                />
                <Text
                  style={{
                    fontSize: Spacing * 1.6,
                    fontWeight: "600",
                    marginLeft: Spacing / 2,
                    color: Colors.text,
                  }}
                >
                  {recipes.del_time}
                </Text>
              </View>
              <View
                style={{
                  padding: Spacing,
                  paddingHorizontal: Spacing * 2,
                  backgroundColor: Colors.lightPrimary,
                  flexDirection: "row",
                  borderRadius: Spacing,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="restaurant"
                  color={Colors.text}
                  size={Spacing * 1.7}
                />
                <Text
                  style={{
                    fontSize: Spacing * 1.6,
                    fontWeight: "600",
                    marginLeft: Spacing / 2,
                    color: Colors.text,
                  }}
                >
                  {recipes.cooking_time}
                </Text>
              </View>
            </View>
            
            <View style={{ marginVertical: Spacing  * 3 }}>
              <Text
                style={{
                  fontSize: Spacing * 2,
                  fontWeight: "700",
                  color: Colors.text,
                }}
              >
                Ingredients
              </Text>
              {recipes.ingredients.map((ingredients) => (
                <View
                  style={{
                    marginVertical: Spacing,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  key={ingredients.id}
                >
                  <View
                    style={{
                      width: Spacing,
                      height: Spacing,
                      backgroundColor: Colors.text,
                      borderRadius: Spacing,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: Spacing * 1.7,
                      fontWeight: "600",
                      color: Colors.text,
                      marginLeft: Spacing,
                    }}
                  >
                    {ingredients.title}
                  </Text>
                </View>
              ))}
            </View>
            <Text
              style={{
                fontSize: Spacing * 2,
                fontWeight: "700",
                color: Colors.text,
                marginBottom: Spacing,
              }}
            >
              Directions
            </Text>
            <Text
              style={{
                fontSize: Spacing * 1.7,
                fontWeight: "500",
                color: Colors.text,
              }}
            >
              {recipes.description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <SafeAreaView>
        <View style={{ padding: Spacing * 2 }}>
          <TouchableOpacity
            style={{
              width: "100%",
              padding: Spacing* 2,
              backgroundColor: Colors.text,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: Spacing * 2,
            }}
          onPress={() => saveBookMark(recipes.name)}>
            <Text
              style={{
                fontSize: Spacing * 2,
                color: Colors.lightPrimary,
                fontWeight: "700",
              }}
            >
            Bookmark this recipe
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

export default SampleRecipePage;

const styles = StyleSheet.create({});
