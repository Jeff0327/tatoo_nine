import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image,View, Text, ScrollView,TouchableOpacity,TextInput, Dimensions} from 'react-native';
import React, {useState, useEffect} from "react";
import {firebase_db} from "../firebaseConfig";
import ImagePage from "../pages/ImagePage";


import {
  setTestDeviceIDAsync,
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';

export default function MainPage({navigation, content, text}) {
    // const [text, setText] = useState("");
    const [state, setState] = useState([]);
    const [onstate,onSetState] = useState([]);
    const [plus, setPlus] = useState(false);
    const onChangeText =(payload)=>setText(payload);
    
    
    useEffect(()=>{
      setTimeout(()=>{
        firebase_db.ref('/images').once('value').then((snapshot)=>{
          let tip=snapshot.val();
          setState(tip);
          onSetState(tip);
        })
        
      },1000)

      
    },[])
    
  //   const onFilter=(cate)=>{
  //     return setFilt(filt.filter((d)=>{
  //         d.onFilter==cate
  //     }))
  // }
    const onPlus=()=>{
      if(!plus){
        setPlus(true)
      }else{
        setPlus(false)
      }
    }
    
  return (
    
    <View>
      
      <ScrollView>
        
      <View style={styles.BtnContainer}>
        <TouchableOpacity style={styles.Btn} onPress={()=>{navigation.navigate("DetailPage",content)}}>
          <Image style={styles.BtnImg} source={{uri:"https://firebasestorage.googleapis.com/v0/b/sparta-myhoneytip-seop.appspot.com/o/images%2Fb041371d22445e3ff82d4c7c907e08d3.jpg?alt=media&token=094be119-62d0-45f9-b2d8-13c4a9751326"}}/>
          <Text style={styles.BtnText}>블랙워크</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn} onPress={()=>{navigation.navigate("DetailPage",content)}}>
          <Image style={styles.BtnImg} source={{uri:"https://firebasestorage.googleapis.com/v0/b/sparta-myhoneytip-seop.appspot.com/o/images%2F0d27691e4a7363e002823a8d73ddc58c.jpg?alt=media&token=46b23130-5c12-4197-bb56-7fd8820f8af0"}}/>
          <Text style={styles.BtnText}>블랙앤그레이</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn} onPress={()=>{navigation.navigate("DetailPage",content)}}>
          <Image style={styles.BtnImg} source={{uri:"https://firebasestorage.googleapis.com/v0/b/sparta-myhoneytip-seop.appspot.com/o/images%2Faa.jpg?alt=media&token=793768a5-ef91-4f81-bb4e-ce6eb0c135d2"}}/>
          <Text style={styles.BtnText}>올드스쿨</Text>
        </TouchableOpacity>
        
      </View>
      {
        plus ? <View style={styles.BtnSecContainer}>
        <TouchableOpacity style={styles.Btn} onPress={()=>{navigation.navigate("DetailPage",content)}}>
          <Image style={styles.BtnImg} source={{uri:"https://firebasestorage.googleapis.com/v0/b/tatoo-nine.appspot.com/o/images%2F76af5f7957c8f59d7c0b1c06ab23344e.jpg?alt=media&token=482a1600-bc70-490f-b36a-9723809c1e15"}}/>
          <Text style={styles.BtnText}>라인워크</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn} onPress={()=>{navigation.navigate("ImagePage")}}>
          <Image style={styles.BtnImg} source={{uri:"https://firebasestorage.googleapis.com/v0/b/tatoo-nine.appspot.com/o/images%2F743420a602158d2b903973c9d5b36d6d.jpg?alt=media&token=f2cf53e9-09cf-4960-b30a-e6fcc78fde89"}}/>
          <Text style={styles.BtnText}>이레즈미</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn} onPress={()=>{navigation.navigate("ImagePage")}}>
          <Image style={styles.BtnImg} source={{uri:"https://firebasestorage.googleapis.com/v0/b/tatoo-nine.appspot.com/o/images%2F98e6856cfec8ab4475fcd53992cc1c0a.jpg?alt=media&token=7a624e0a-6e3b-4990-91af-a85d7354be9c"}}/>
          <Text style={styles.BtnText}>치카노</Text>
        </TouchableOpacity>  
      </View> : null
      }
      <View>
      <TouchableOpacity style={styles.moreTouch} onPress={onPlus}>
        <Text style={styles.moreView}>+ 더보기</Text>
      </TouchableOpacity>
      </View>
      <ScrollView style={styles.mainImgContainer} horizontal = {false} pagingEnabled ={true}>
        {onstate.map((content, i)=>{
          return(
          <ImagePage content={content} key={i} navigation={navigation}/>
          )
        })}
      </ScrollView>
      {/* <ScrollView style={styles.mainImgContainer} horizontal = {true} pagingEnabled ={true}>
        {onstate.map((content, i)=>{
          return(<ImagePage content={content} key={i} navigation={navigation}/>)
        })}
      </ScrollView> */}
      <StatusBar style="auto" />
      </ScrollView>
        <View style={styles.bannerContainer}>
      {Platform.OS === 'ios' ? (
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
    
  );
}

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  mainbar:{
    flex:1,
    flexDirection:"row",
    maxWidth:"80%",
    // maxHeight:"100%",
  },
  input:{
    color:"black",
    fontSize:20,
    alignContent:"space-between"
  },
  searchbar:{
    flex:1,
    flexDirection:"row",
  },
    MainContainer:{
        flexDirection:"row",
        alignContent:"space-around",
    },
  MainTitle:{
    flex:1,
    marginTop:30,
    marginBottom:10,
    marginLeft:"25%",
    fontFamily:"Georgia",
    fontSize:30,
  },
  BtnContainer:{
    flex:1,
    flexDirection:"row",
    marginTop:"5%",
  },
  BtnSecContainer:{
    flex:1,
    flexDirection:"row",
    marginTop:"8%",
    marginBottom:"8%",
  },
  moreTouch:{
    marginTop:5,
    alignSelf:"flex-end",
  },
  moreView:{
    alignSelf:"flex-end",
  },
  Btn:{
    flex:1,
    alignItems:"center",
    justifyContent:"space-around",
    height:"200%",
  },
  BtnImg:{
    resizeMode:"center",
    width:"100%",
    height:"160%",
  },
  BtnText:{
    fontSize:15,
    color:"white",
  },
  mainImgContainer:{
    marginTop:10,
  },
  bannerContainer:{
    marginTop:15,
    marginLeft:-50,
  },
  banner:{
    width:"100%",
    height:100,
  }
});
