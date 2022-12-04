import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Share,
} from "react-native";
import { useFonts } from "expo-font";
import { Fontisto } from "@expo/vector-icons";

const TATOOISTIMG =
  "https://firebasestorage.googleapis.com/v0/b/tatoo-nine.appspot.com/o/images%2Fcontent%2Fblackwalk.jpg?alt=media&token=501816e3-ff9b-48d7-b0c7-80840355a41e";
export default function ImagePage({ content, navigation }) {
  const [loaded] = useFonts({
    //Eng
    Alumni_Regular: require("../assets/font/AlumniSansPinstripe-Regular.ttf"),
    Alumni_Italic: require("../assets/font/AlumniSansPinstripe-Italic.ttf"),

    //Kor
    Nanum_Coding: require("../assets/font/NanumGothicCoding-Regular.ttf"),
    Dongle_Regular: require("../assets/font/Dongle-Regular.ttf"),
    NanumPen_Regular: require("../assets/font/NanumPenScript-Regular.ttf"),
    Nanum_Myeongjo: require("../assets/font/NanumMyeongjo-Regular.ttf"),
    Cute_Font: require("../assets/font/CuteFont-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const onShare = () => {
    Share.share({ message: `${content.image}` });
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.Artist}>
          <Image style={styles.tatooist} source={{ uri: TATOOISTIMG }} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("DetailPage", content);
            }}
          >
            <Text
              style={styles.pos}
            >{`${content.crew}/${content.artist}`}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DetailPage", content);
          }}
        >
          <Image
            resizeMode="stretch"
            style={styles.mainImg}
            source={{ uri: content.image }}
          />
        </TouchableOpacity>
        <Text style={styles.kindof}>{`| ${content.catagory} | `}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.title}>{`| ${content.title} | `}</Text>
          <Text style={styles.desc} numberOfLines={2}>
            {content.desc.length > 20
              ? content.desc.slice(0, 20) + "..."
              : content.desc}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={onShare} style={styles.shareBtn}>
            <Fontisto style={styles.fontImg} name="share-a" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: "white",
    shadowColor: "#A9A9A9",
    shadowOpacity: 0.5,
    shadowOffset: { width: 3, height: 3 },
    padding: 10,
    flex: 1,
  },
  Artist: {
    flexDirection: "row",
    margin: 5,
  },
  mainImg: {
    width: 340,
    height: 300,
    marginRight: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
    fontFamily: "Cute_Font",
  },
  desc: {
    fontSize: 15,
    fontFamily: "Cute_Font",
  },
  pos: {
    fontSize: 25,
    fontWeight: "500",
    fontFamily: "NanumPen_Regular",
    alignSelf: "center",
    margin: 10,
  },
  kindof: {
    fontSize: 20,
    fontFamily: "Cute_Font",
  },
  shareBtn: {
    alignSelf: "flex-end",
  },
  fontImg: {
    fontSize: 20,
    marginRight: 5,
  },
  tatooist: {
    borderRadius: 25,
    width: 50,
    height: 50,
    flexDirection: "row",
  },
});
