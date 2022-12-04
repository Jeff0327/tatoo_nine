import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import * as Linking from "expo-linking";
import { Fontisto } from "@expo/vector-icons";
import * as Application from "expo-application";
import { firebase_db } from "../firebaseConfig";
import { useFonts } from "expo-font";
const isIOS = Platform.OS === "ios";

const DetailPage = ({ content, route }) => {
  const Artist = route.params;
  const [insta, setInsta] = useState("");

  const [loaded] = useFonts({
    //Eng

    Lobster: require("../assets/font/Lobster-Regular.ttf"),
  });
  useEffect(() => {
    setInsta(Artist.insta);
  }, []);
  const link = () => {
    Linking.openURL(insta); //인스타링크
  };
  const kakao = () => {
    Linking.openURL("https://open.kakao.com/o/sy05QPGb");
  };
  const likely = async () => {
    let userUniqueId;
    if (isIOS) {
      let iosId = await Application.getIosIdForVendorAsync();
      userUniqueId = iosId;
    } else {
      userUniqueId = await Application.androidId;
    }

    firebase_db
      .ref("/like/" + userUniqueId + "/" + content.idx)
      .set(content, function (error) {
        console.log(error);
      });
  };
  if (!loaded) {
    return null;
  }
  const LikeFn = () => {
    Alert.alert("찜 목록에 저장되었습니다");
    likely();
  };
  return (
    <View style={styles.Container}>
      <View style={styles.Title}>
        <Text>{`${Artist.crew}/${Artist.artist}`}</Text>
      </View>
      <View style={styles.document}>
        <Text>{`경력:${Artist.career}년`}</Text>
        <Text>{`지역:${Artist.area}`}</Text>
        <Image
          style={{ width: 300, height: 300 }}
          source={{ uri: Artist.image }}
        />
        <Text>{`장르:${Artist.catagory}`}</Text>
        <Text>{`size:${Artist.size}cm`}</Text>
        <Text>{`가격:${Artist.price}0,000￦`}</Text>
        <Text style={{ paddingTop: 10 }}>
          *모든 타투는 몸의 체형과 원하는 스타일에 대해 가격이 상이합니다.
        </Text>
        <Text>*문의는 인스타 또는 카카오톡 상담을 통해 가능합니다.</Text>
      </View>
      <View style={{ marginTop: 10, flexDirection: "row", alignSelf: "auto" }}>
        <TouchableOpacity onPress={LikeFn} style={styles.likeBtn}>
          <Fontisto style={styles.fontImg} name="like" />
          <Text>찜 하기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={link} style={styles.instaBtn}>
          <Fontisto style={styles.fontImg} name="instagram" />
          <Text style={styles.instaText}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={kakao} style={styles.likeBtn}>
          <Fontisto style={styles.fontImg} name="comments" />
          <Text>카카오톡</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
  },
  Title: {
    flexDirection: "row",
  },
  document: {
    alignItems: "center",
  },
  fontImg: {
    fontSize: 20,
    marginRight: 5,
  },
  likeBtn: {
    justifyContent: "space-between",
    borderWidth: 2,
    borderRadius: 5,
    margin: 20,
    backgroundColor: "white",
    flexDirection: "row",
    padding: 5,
  },
  instaBtn: {
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 5,
    margin: 20,
    backgroundColor: "pink",
    flexDirection: "row",
    padding: 5,
  },
  instaText: {
    fontFamily: "Lobster",
  },
});
export default DetailPage;
