import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { firebase_db } from "../firebaseConfig";
export default function DetailPage({ content, navigation, route }) {
  useEffect(() => {
    firebase_db
      .ref("image")
      .once("value")
      .then((snapshot) => {
        let dater = snapshot.val();
      });
  }, []);

  return (
    <View>
      <ImageBackground
        source={require("../background.jpg")}
        style={{ width: "100%", height: "100%" }}
      ></ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  mainImg: {
    width: 400,
    height: 400,
  },
});
