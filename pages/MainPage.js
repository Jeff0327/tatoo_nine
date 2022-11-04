import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image,View, Text, ScrollView,TouchableOpacity,TextInput, Dimensions} from 'react-native';
import React, {useState, useEffect} from "react";
import {firebase_db} from "../firebaseConfig";
import ImagePage from "../pages/ImagePage";
import { Fontisto } from "@expo/vector-icons";
import {
  setTestDeviceIDAsync,
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';


const DEFINE_BLACKWALK="https://firebasestorage.googleapis.com/v0/b/tatoo-nine.appspot.com/o/images%2Fcontent%2Fblackwalk.jpg?alt=media&token=501816e3-ff9b-48d7-b0c7-80840355a41e"
const DEFINE_BLACKANDGRAY="https://firebasestorage.googleapis.com/v0/b/tatoo-nine.appspot.com/o/images%2Fcontent%2Fblackandgray.jpg?alt=media&token=c394104b-ca0f-41e3-a401-920d4ecbba32"
const DEFINE_OLDSCOOL="https://firebasestorage.googleapis.com/v0/b/tatoo-nine.appspot.com/o/images%2Fcontent%2Foldschool.jpg?alt=media&token=6b9c627f-67e7-4e20-9c81-9952bbd53e47"
const DEFINE_LINEWALK="https://firebasestorage.googleapis.com/v0/b/tatoo-nine.appspot.com/o/images%2Fcontent%2Flinewalk.jpg?alt=media&token=3b414f93-ddfb-451b-aec1-df20dda0a453"
const DEFINE_IREZUMI="https://firebasestorage.googleapis.com/v0/b/tatoo-nine.appspot.com/o/images%2Fcontent%2Firez.jpg?alt=media&token=a37b9225-7d9f-4d56-90ec-79a41d703d0d"
const DEFINE_CHIKANO="https://firebasestorage.googleapis.com/v0/b/tatoo-nine.appspot.com/o/images%2Fcontent%2Fchikano.jpg?alt=media&token=e1727bf0-b2a7-48c1-ac49-5e7f9ce325dc"

export default function MainPage({navigation, route}) {
    
    
    
    const [onstate,onSetState] = useState([]);
    const [plus, setPlus] = useState(false);
    const [filt,setFilt] = useState("전체");
    const [result,setResult]=useState([]); 
    
    
    useEffect(()=>{
      
      setTimeout(()=>{
        firebase_db.ref('/images').once('value').then((snapshot)=>{
          let tip=snapshot.val();
          onSetState(tip);
        })
        
      },500)
    },[filt])
    
    const onPlus=()=>{  //더보기 toggle fn
      if(!plus){
        setPlus(true)
      }else{
        setPlus(false)
      }
    }
    
    const btn1=()=>{
      setResult(onstate.filter((d)=>{return d.catagory=="블랙워크"}))
      setFilt("버튼1");
    }
    const btn2=()=>{
      setResult(onstate.filter((d)=>{return d.catagory=="블랙앤그레이"}))
      setFilt("버튼2");
    }
    const btn3=()=>{
      setResult(onstate.filter((d)=>{return d.catagory=="올드스쿨"}))
      setFilt("버튼3");
    }
    const btn4=()=>{
      setResult(onstate.filter((d)=>{return d.catagory=="라인워크"}))
      setFilt("버튼4");
    }
    const btn5=()=>{
      setResult(onstate.filter((d)=>{return d.catagory=="이레즈미"}))
      setFilt("버튼5");
    }
    const btn6=()=>{
      setResult(onstate.filter((d)=>{return d.catagory=="치카노"}))
      setFilt("버튼6");
    }
    const btn7=()=>{
      setResult(onstate.filter((d)=>{return d.catagory=="기타1"}))
      setFilt("버튼6");
    }
    const btn8=()=>{
      setResult(onstate.filter((d)=>{return d.catagory=="기타2"}))
      setFilt("버튼6");
    }
    const btn9=()=>{
      setResult(onstate.filter((d)=>{return d.catagory=="기타3"}))
      setFilt("버튼6");
    }

    const UpBtn=()=>{
      console.log("UP!");
    }
  return (
    <View>
      <ScrollView>
          <View style={styles.BtnContainer}>
            <View>
            
            <TouchableOpacity style={styles.Btn} onPress={btn1}>
              <Image style={styles.BtnImg} source={{uri:DEFINE_BLACKWALK}}/>
              <Text style={styles.BtnText}>블랙워크</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={styles.Btn} onPress={btn2}>
              <Image style={styles.BtnImg} source={{uri:DEFINE_BLACKANDGRAY}}/>
              <Text style={styles.BtnText}>블랙앤그레이</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={styles.Btn} onPress={btn3}>
              <Image style={styles.BtnImg} source={{uri:DEFINE_OLDSCOOL}}/>
              <Text style={styles.BtnText}>올드스쿨</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={styles.Btn} onPress={btn4}>
              <Image style={styles.BtnImg} source={{uri:DEFINE_LINEWALK}}/>
              <Text style={styles.BtnText}>라인워크</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={styles.Btn} onPress={btn5}>
              <Image style={styles.BtnImg} source={{uri:DEFINE_IREZUMI}}/>
              <Text style={styles.BtnText}>이레즈미</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={styles.Btn} onPress={btn6}>
              <Image style={styles.BtnImg} source={{uri:DEFINE_CHIKANO}}/>
              <Text style={styles.BtnText}>치카노</Text>
            </TouchableOpacity>
            </View>

        {plus ? 
            <View style={styles.HideView}>
              <View>
                <TouchableOpacity style={styles.Btn} onPress={btn7}>
                  <Image style={styles.BtnImg} source={{uri:DEFINE_LINEWALK}}/>
                  <Text style={styles.BtnText}>기타1</Text>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity style={styles.Btn} onPress={btn8}>
                  <Image style={styles.BtnImg} source={{uri:DEFINE_IREZUMI}}/>
                  <Text style={styles.BtnText}>기타2</Text>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity style={styles.Btn} onPress={btn9}>
                  <Image style={styles.BtnImg} source={{uri:DEFINE_CHIKANO}}/>
                  <Text style={styles.BtnText}>기타3</Text>
                </TouchableOpacity>
                </View>
              </View>
              : null}
            </View>

      <View style={styles.moreContainer}>
      <TouchableOpacity style={styles.moreTouch} onPress={onPlus}>
        <Text style={styles.moreView}>+ 장르더보기</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      
      {filt=="전체" ? 
      <ScrollView style={styles.mainImgContainer} horizontal = {false} pagingEnabled ={true}>
        {onstate.map((content, i)=>{
          
          return(  
          <ImagePage content={content} key={i} navigation={navigation}/>
          )
        })}
      </ScrollView> : 
      filt=="버튼1" ? <ScrollView style={styles.mainImgContainer} horizontal = {false} pagingEnabled ={true}>
      {result.map((content, i)=>{
        return(
        <ImagePage content={content} key={i} navigation={navigation}/>
        
        )
      })}
      </ScrollView> : 
      filt=="버튼2" ? <ScrollView style={styles.mainImgContainer} horizontal = {false} pagingEnabled ={true}>
      {result.map((content, i)=>{
        return(
        <ImagePage content={content} key={i} navigation={navigation}/>
        )
      })}
      </ScrollView> : 
      filt=="버튼3" ? <ScrollView style={styles.mainImgContainer} horizontal = {false} pagingEnabled ={true}>
      {result.map((content, i)=>{
        return(
        <ImagePage content={content} key={i} navigation={navigation}/>
        )
      })}
      </ScrollView> :
      filt=="버튼4" ? <ScrollView style={styles.mainImgContainer} horizontal = {false} pagingEnabled ={true}>
      {result.map((content, i)=>{
        return(
        <ImagePage content={content} key={i} navigation={navigation}/>
        )
      })}
      </ScrollView> :
      filt=="버튼5" ? <ScrollView style={styles.mainImgContainer} horizontal = {false} pagingEnabled ={true}>
      {result.map((content, i)=>{
        return(
        <ImagePage content={content} key={i} navigation={navigation}/>
        )
      })}
      </ScrollView> :
      filt=="버튼6" ? <ScrollView style={styles.mainImgContainer} horizontal = {false} pagingEnabled ={true}>
      {result.map((content, i)=>{
        return(
        <ImagePage content={content} key={i} navigation={navigation}/>
        )
      })}
      </ScrollView> :
      filt=="기타1" ? <ScrollView style={styles.mainImgContainer} horizontal = {false} pagingEnabled ={true}>
    {result.map((content, i)=>{
      return(
      <ImagePage content={content} key={i} navigation={navigation}/>
      )
    })}
      </ScrollView> :
      filt=="기타2" ? <ScrollView style={styles.mainImgContainer} horizontal = {false} pagingEnabled ={true}>
    {result.map((content, i)=>{
      return(
      <ImagePage content={content} key={i} navigation={navigation}/>
      )
    })}
      </ScrollView> :
      filt=="기타3" ? <ScrollView style={styles.mainImgContainer} horizontal = {false} pagingEnabled ={true}>
  {result.map((content, i)=>{
    return(
    <ImagePage content={content} key={i} navigation={navigation}/>
    )
  })}
      </ScrollView> :
      null
      }
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

const styles = StyleSheet.create({
  BtnContainer:{
    flex:2,
    flexWrap:"wrap",
    flexDirection:"row",
    backgroundColor:"#C0C0C0",
  },
  HideView:{
    paddingTop:3,
    flexWrap:"wrap",
    flexDirection:"row",
  },
  moreContainer:{
    margin:0,
  },
  moreTouch:{
    alignSelf:"flex-end",
  },
  moreView:{
    alignSelf:"flex-end",
  },
  Btn:{
    flex:2,
    alignItems:"center",
    justifyContent:"space-around",
    width:125,
    height:38,
    padding:10,
  },
  BtnImg:{
    resizeMode:"center",
    width:"100%",
    height:"200%",
  },
  BtnText:{
    fontSize:15,
    color:"white",
  },
  mainImgContainer:{
    
    marginTop:10,
    marginBottom:30,
    
  },
  bannerContainer:{
    flex:1,
    marginTop:15,
    marginLeft:-50,
  },
  banner:{
    width:"100%",
    height:100,
    position: 'absolute',
    bottom:-30,
    
  }
});
