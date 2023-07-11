import React, { useState } from "react";
import { View, Text, FlatList, Pressable, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button, ScreenWrapper } from "~components";
import { setAppLoader } from "~redux/slices/config";
import { selectUserMeta, setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import styles from "./styles";
import { height, width } from "~utills/Dimension";
import ScreenNames from "~routes/routes";
export default function AddImage({ navigation, route }) {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserMeta);
  const [take,setTake]=useState(false)
  const [image,setimage]=useState(null)
  console.log("===?",image);
  
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <View
        style={styles.cameraview}
        > 
         
        </View>
        <View 
        style={{justifyContent:'space-between',height:height(15),margin:width(5)}}
        >
        <Button
        onPress={()=>{setTake(true)}}
        title={"Take Photo"}
        />
        <Button
        onPress={()=>{navigation.goBack()}}
        title={"cancel"}
        />
        </View>
      </View>
    </ScreenWrapper>
  );
}
