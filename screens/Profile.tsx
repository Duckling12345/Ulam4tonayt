import {Dimensions,Image,ScrollView,StyleSheet,Text,TouchableOpacity,View} from "react-native";
import React, { useState } from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-community/async-storage';

const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

const Profile: React.FC<Props> = ({ navigation: { navigate } }) => {
    const [bookmarkedRecipes, setBookmarkedRecipes] = React.useState();
  React.useEffect(() => {
    getBookmarkedRecipes();
  }, []);

  const getBookmarkedRecipes = async () => {
      let bookmark = await AsyncStorage.getItem('bookmark');
    if (bookmark) {
      setBookmarkedRecipes(JSON.parse(bookmark));
    }
  };

  

   return (
    <ScrollView>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{
            uri: 'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png',
          }}
        />
      </View>
      <View>
      <Text style={styles.profileName}>Jane Doe</Text>
      <Text style={styles.profileBio}>Beginner</Text>
      </View>
      <View style={styles.bookmarkedRecipes}>
        <View style={styles.bookmarkedRecipesTitle}>
        <Ionicons
                  name="md-library-outline"
                  color={Colors.text}
                  size={Spacing * 2.5}
                />
        <Text style={styles.bookmarkedRecipesTitle}>
        Bookmarked Recipes
        </Text>
        </View>
        <View style={styles.bookmarkedRecipesContainer}>
          <View style={styles.bookmarkedRecipe}> 
            <Image
              style={styles.bookmarkedRecipeImage}
              source={{ uri: 'https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Item_Invigorating_Kitty_Meal.png/revision/latest?cb=20210901042522' }}
            />
            <Text style={styles.bookmarkedRecipeTitle}>
                        {bookmarkedRecipes}
            </Text>
          </View>
          <View style={styles.bookmarkedRecipe}>
            <Image
              style={styles.bookmarkedRecipeImage}
              source={{ uri: 'https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Item_Invigorating_Kitty_Meal.png/revision/latest?cb=20210901042522' }}
            />
            <Text style={styles.bookmarkedRecipeTitle}>
            {bookmarkedRecipes}
            </Text>
          </View>
        </View>
        <View style={styles.bookmarkedRecipesContainer}>
          <View style={styles.bookmarkedRecipe}>
            <Image
              style={styles.bookmarkedRecipeImage}
              source={{ uri: 'https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Item_Invigorating_Kitty_Meal.png/revision/latest?cb=20210901042522' }}
            />
            <Text style={styles.bookmarkedRecipeTitle}>Beef Stew</Text>
          </View>
          <View style={styles.bookmarkedRecipe}>
            <Image
              style={styles.bookmarkedRecipeImage}
              source={{ uri: 'https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Item_Invigorating_Kitty_Meal.png/revision/latest?cb=20210901042522' }}
            />
            <Text style={styles.bookmarkedRecipeTitle}>Roasted Chicken</Text>
          </View>
        </View>
        
        <View style={styles.bookmarkedRecipesContainer}>
          <View style={styles.bookmarkedRecipe}>
            <Image
              style={styles.bookmarkedRecipeImage}
              source={{ uri: 'https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Item_Invigorating_Kitty_Meal.png/revision/latest?cb=20210901042522' }}
            />
            <Text style={styles.bookmarkedRecipeTitle}>Carbonara</Text>
          </View>
          <View style={styles.bookmarkedRecipe}>
            <Image
              style={styles.bookmarkedRecipeImage}
              source={{ uri: 'https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Item_Invigorating_Kitty_Meal.png/revision/latest?cb=20210901042522' }}
            />
            <Text style={styles.bookmarkedRecipeTitle}>Fish Fillet</Text>
          </View>
        </View>
      </View>
      </ScrollView>
);
}


export default Profile;

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
     borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginTop: 60,
    
  },
  profileName: {
    fontFamily: Font["poppins-semiBold"],
    fontSize: FontSize.xLarge,
    marginBottom: 2,
    marginTop: 210,
    textAlign: 'center'
  },
  profileBio: {
    fontSize: FontSize.small,
    fontFamily: Font["poppins-regular"],
    color: Colors.darkText,
    marginBottom: 10,
    textAlign: 'center'
  },
  bookmarkedRecipes: {
    width: '100%',
    backgroundColor: Colors.lightPrimary,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 5,
  },
  bookmarkedRecipesTitle: {
    fontSize: FontSize.large,
    fontFamily: Font["poppins-semiBold"],
    marginBottom: Spacing,
    flexDirection: 'row',
    marginLeft: Spacing
  },
  bookmarkedRecipesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bookmarkedRecipe: {
    alignItems: 'center',
    width: '50%',
  },
  bookmarkedRecipeImage: {
    width: 150,
    height: 150,
  },
  bookmarkedRecipeTitle: {
    fontSize: FontSize.small,
    fontFamily: Font["poppins-regular"],
    textAlign: 'center',
  },
});
