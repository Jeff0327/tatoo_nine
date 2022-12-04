import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  Image,
  View,
  Text,
  Alert,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  PhoneNumberInput,
} from "react-native";
import { firebase_db } from "../firebaseConfig";
import * as Application from "expo-application";
import ImagePage from "./ImagePage";
import { Fontisto } from "@expo/vector-icons";
const isIOS = Platform.OS === "ios";

export default function LikePage({ navigation }) {
  const [like, onLike] = useState([]);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    getLike();
  }, [like]);

  const getLike = async () => {
    let userUniqueId;
    if (isIOS) {
      let iosId = await Application.getIosIdForVendorAsync();
      userUniqueId = iosId;
    } else {
      userUniqueId = await Application.androidId;
    }

    firebase_db
      .ref("/like/" + userUniqueId + like.idx)
      .once("value")
      .then((snapshot) => {
        let tip = snapshot.val();

        if (tip && tip.length > 0) {
          onLike(tip);

          setReady(false);
        }
      });
  };
  const offLikeFn = async () => {
    Alert.alert("찜 목록에서 해제되었습니다");
  };

  return (
    <ScrollView>
      {like.map((content, i) => {
        return (
          <View style={{ alignSelf: "center" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("DetailPage", content);
              }}
            >
              <Image
                style={{ width: 200, height: 200 }}
                source={{ uri: content.image }}
              />
            </TouchableOpacity>
            <Text>{content.desc}</Text>
            <View>
              <TouchableOpacity onPress={offLikeFn} style={styles.likeBtn}>
                <Fontisto style={styles.fontImg} name="like" />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  likeBtn: {
    alignSelf: "flex-start",
  },
});
