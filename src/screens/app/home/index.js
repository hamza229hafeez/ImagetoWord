import React from "react";
import { View, Text,Image, FlatList, Pressable, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button, ScreenWrapper } from "~components";
import { setAppLoader } from "~redux/slices/config";
import { selectData, selectUserMeta, setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import styles from "./styles";
import ScreenNames from "~routes/routes";
import { height, width } from "~utills/Dimension";
export default function Home({ navigation, route }) {
  const dispatch = useDispatch();
 // const userInfo = useSelector(selectUserMeta);
// const data=useSelector(selectData)
// console.log(data);
  const renderItem = ({ item }) => {
    return (
      <Pressable style={styles.flatview}>
        <Image
        style={styles.imagestyle}
        source={{uri:item.url}}
        />
        <Text style={styles.flattitle}>{item.title}</Text>
      </Pressable>
    );
  };

  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
       
        <FlatList
          data={[]}
          style={{flex:1,width:width(90)}}
          renderItem={renderItem}
          keyExtractor={({ index }) => index}
          numColumns={2}
        />
      </View>
      <TouchableOpacity
          onPress={() => {
            
          }}
          style={styles.floatbutton}
        >
          <Text style={styles.buttontext}>+</Text>
        </TouchableOpacity>
    </ScreenWrapper>
  );
}
