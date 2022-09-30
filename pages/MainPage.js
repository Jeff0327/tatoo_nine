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

const DEFINE_BLACKWALK="https://firebasestorage.googleapis.com/v0/b/sparta-myhoneytip-seop.appspot.com/o/images%2Fb041371d22445e3ff82d4c7c907e08d3.jpg?alt=media&token=094be119-62d0-45f9-b2d8-13c4a9751326"
const DEFINE_BLACKANDGRAY="https://firebasestorage.googleapis.com/v0/b/sparta-myhoneytip-seop.appspot.com/o/images%2F0d27691e4a7363e002823a8d73ddc58c.jpg?alt=media&token=46b23130-5c12-4197-bb56-7fd8820f8af0"
const DEFINE_OLDSCOOL="https://firebasestorage.googleapis.com/v0/b/sparta-myhoneytip-seop.appspot.com/o/images%2Faa.jpg?alt=media&token=793768a5-ef91-4f81-bb4e-ce6eb0c135d2"
const DEFINE_LINEWALK="https://firebasestorage.googleapis.com/v0/b/tatoo-nine.appspot.com/o/images%2F76af5f7957c8f59d7c0b1c06ab23344e.jpg?alt=media&token=482a1600-bc70-490f-b36a-9723809c1e15"
const DEFINE_IREZUMI="https://firebasestorage.googleapis.com/v0/b/tatoo-nine.appspot.com/o/images%2F743420a602158d2b903973c9d5b36d6d.jpg?alt=media&token=f2cf53e9-09cf-4960-b30a-e6fcc78fde89"
const DEFINE_CHIKANO="https://firebasestorage.googleapis.com/v0/b/tatoo-nine.appspot.com/o/images%2F98e6856cfec8ab4475fcd53992cc1c0a.jpg?alt=media&token=7a624e0a-6e3b-4990-91af-a85d7354be9c"

export default function MainPage({navigation, route}) {
    
    
    const [state, setState] = useState([]);
    const [onstate,onSetState] = useState([]);
    
    const [plus, setPlus] = useState(false);
    const [filt,setFilt] = useState("전체");
    const [result,setResult]=useState([]); 
    
    useEffect(()=>{
      
      setTimeout(()=>{
        firebase_db.ref('/images').once('value').then((snapshot)=>{
          let tip=snapshot.val();
          
          setState(tip);
          onSetState(tip);
          
        })
        
      },1000)

      
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

const styles = StyleSheet.create({
  BtnContainer:{
    flex:1,
    flexWrap:"wrap",
    flexDirection:"row",
    backgroundColor:"gray",
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
    flex:1,
    alignItems:"center",
    justifyContent:"space-around",
    width:125,
    height:"100%",
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
  },
  bannerContainer:{
    flex:1,
    marginTop:15,
    marginLeft:-50,
  },
  banner:{
    width:"100%",
    height:100,
  }
});
