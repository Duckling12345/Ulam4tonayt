import {Dimensions,ImageBackground,SafeAreaView,StyleSheet,Text,TouchableOpacity,View, FlatList, Image, ScrollView} from "react-native";
import React, { useState, useEffect } from 'react';
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { SearchBar, Button, Card, Icon} from 'react-native-elements';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";


const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Home">;
const Homepage: React.FC<Props> = ({ navigation: { navigate } }) => {
   const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

 /**  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);*/

  const searchFilterFunction = (text) => {
    if (text) {
 
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {

      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const getItem = (item) => {
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView>
    <ScrollView>
     <SearchBar
          round
          searchIcon={{ size: 20 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
          containerStyle={{backgroundColor: Colors.primary,}}
          inputContainerStyle={{backgroundColor: 'white'}}
          leftIconContainerStyle={{backgroundColor: 'white'}}
          inputStyle={{backgroundColor: 'white'}}
          style ={{color: Colors.text}}
        />

        
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
      <TouchableOpacity style={{marginRight: Spacing * 2,}}>
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
          <TouchableOpacity style={{marginRight: Spacing * 3,}}>
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
      <TouchableOpacity style={{marginRight: Spacing * 2,}}>
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
          <TouchableOpacity style={{marginRight: Spacing * 3,}}>
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
      <TouchableOpacity style={{marginRight: Spacing * 2,}}>
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
          <TouchableOpacity style={{marginRight: Spacing * 3,}}>
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
      <TouchableOpacity style={{marginRight: Spacing * 2,}}>
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
          <TouchableOpacity style={{marginRight: Spacing * 3,}}>
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
