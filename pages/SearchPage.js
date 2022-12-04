import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { firebase_db } from "../firebaseConfig";
import ImagePage from "./ImagePage";
import * as Application from "expo-application";
import { Fontisto } from "@expo/vector-icons";
import {
  setTestDeviceIDAsync,
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from "expo-ads-admob";
export default function SearchPage({ navigation, route }) {
  const [text, setText] = useState("");
  const [onstate, onSetState] = useState([]);
  const [found, setFound] = useState([]);

  const onChangeText = (text) => {
    setText(text);
  };

  useEffect(() => {
    firebase_db
      .ref("/images")
      .once("value")
      .then((snapshot) => {
        let tip = snapshot.val();

        onSetState(tip);
      });

    setFound(
      onstate
        .map((e) => {
          if (
            e.catagory.indexOf(text) !== -1 ||
            e.title.indexOf(text) !== -1 ||
            e.desc.indexOf(text) !== -1 ||
            e.where.indexOf(text) !== -1
          )
            return e;
        })
        .filter((e) => {
          return e !== undefined;
        })
    );
  }, [text]);

  return (
    <View style={styles.Container}>
      <View style={styles.inputContainer}>
        <View style={styles.touch}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack("MainPage");
            }}
          >
            <Fontisto style={styles.fontImg} name="angle-left" />
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="검색어를 입력하세요"
          value={text}
          onChangeText={onChangeText}
        />
      </View>
      <ScrollView style={styles.ImgContainer}>
        {found.map((content, i) => {
          return (
            <ImagePage content={content} key={i} navigation={navigation} />
          );
        })}
      </ScrollView>
      {text === "" ? (
        <View style={styles.Allbanner}>
          <View style={styles.bannerContainer}>
            {Platform.OS === "ios" ? (
              <AdMobBanner
                bannerSize="fullBanner"
                servePersonalizedAds={true}
                adUnitID="ca-app-pub-5579008343368676/6885179499"
                style={styles.banner}
              />
            ) : (
              <AdMobBanner
                bannerSize="fullBanner"
                servePersonalizedAds={true}
                adUnitID="ca-app-pub-5579008343368676/9202552776"
                style={styles.banner}
              />
            )}
          </View>
          <View style={styles.bannerContainer}>
            {Platform.OS === "ios" ? (
              <AdMobBanner
                bannerSize="fullBanner"
                servePersonalizedAds={true}
                adUnitID="ca-app-pub-5579008343368676/6885179499"
                style={styles.banner}
              />
            ) : (
              <AdMobBanner
                bannerSize="fullBanner"
                servePersonalizedAds={true}
                adUnitID="ca-app-pub-5579008343368676/9202552776"
                style={styles.banner}
              />
            )}
          </View>
          <View style={styles.bannerContainer}>
            {Platform.OS === "ios" ? (
              <AdMobBanner
                bannerSize="fullBanner"
                servePersonalizedAds={true}
                adUnitID="ca-app-pub-5579008343368676/6885179499"
                style={styles.banner}
              />
            ) : (
              <AdMobBanner
                bannerSize="fullBanner"
                servePersonalizedAds={true}
                adUnitID="ca-app-pub-5579008343368676/9202552776"
                style={styles.banner}
              />
            )}
          </View>
          <View style={styles.bannerContainer}>
            {Platform.OS === "ios" ? (
              <AdMobBanner
                bannerSize="fullBanner"
                servePersonalizedAds={true}
                adUnitID="ca-app-pub-5579008343368676/6885179499"
                style={styles.banner}
              />
            ) : (
              <AdMobBanner
                bannerSize="fullBanner"
                servePersonalizedAds={true}
                adUnitID="ca-app-pub-5579008343368676/9202552776"
                style={styles.banner}
              />
            )}
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginBottom: 20,
  },
  inputContainer: {
    margin: 25,
    flexDirection: "row",
  },
  touch: {
    marginRight: 10,
  },
  fontstyle: {
    fontSize: 15,
  },
  ImgContainer: {
    marginTop: 10,
    marginBottom: 40,
    paddingBottom: 30,
  },
  fontImg: {
    fontSize: 30,
    marginRight: 5,
  },
  Allbanner: {
    justifyContent: "center",
  },
  bannerContainer: {
    flex: 1,
    marginTop: 15,
    marginLeft: -30,
    marginBottom: 70,
  },
  banner: {
    width: "100%",
    height: 100,
    position: "absolute",
    bottom: -30,
  },
});
