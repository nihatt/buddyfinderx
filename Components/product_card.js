import React from "react";
import { StyleSheet, ImageBackground, View, Image, Text, TouchableOpacity, Alert } from "react-native";
import { IconButton } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import {
  useFonts,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import {
  Audiowide_400Regular
} from '@expo-google-fonts/audiowide'
import {
  BerkshireSwash_400Regular
} from '@expo-google-fonts/berkshire-swash'
import {
  BungeeShade_400Regular
} from '@expo-google-fonts/bungee-shade'
import AppLoading from 'expo-app-loading';



const ProductCard = (props) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    BungeeShade_400Regular,
    BerkshireSwash_400Regular,
    Audiowide_400Regular

  });


  const image = { uri: "https://png.pngtree.com/thumb_back/fw800/back_our/20190625/ourmid/pngtree-e-commerce-discount-banner-background-image_259173.jpg" };
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (


    <View style={{ justifyContent: 'space-between',width:wp('100%'), alignItems: 'center', paddingVertical: hp('2%'), flex:1,
    borderRadius: 4, }}>
      <TouchableOpacity onPress={props.navigation}>
        <View style={{ height: hp('20%'), width: wp('40%'), borderRadius: 20, flexDirection: 'row', backgroundColor: 'grey',justifyContent:'space-between' }}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image} imageStyle={{ borderRadius: 20, opacity: 0.4 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: wp('30%') }}>
                <Image style={{

                  width: wp('40%'),
                  height: hp('18%'),
                  alignSelf: 'flex-start',
                  borderRadius: 20,
                  overflow: 'hidden',
                  resizeMode: 'cover'
                }} source={{
                  uri: props.imageuri,
                }} />
              </View>
              <View style={{    color: "white",
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0", width: wp('40%'), justifyContent: 'center', alignItems: 'center', flex: 1,flexDirection:'row',position:'absolute',justifyContent:'center',alignSelf:'flex-start' }}>
                <Text style={{ fontFamily: 'Audiowide_400Regular', fontSize: 16, color: 'white' }}>{props.title+ "  "}</Text>
                <Text style={{ fontFamily: 'Inter_900Black', fontSize: 16, color: 'white' }}>{props.price}</Text>

              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({

  image: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 20
  },
});

export default ProductCard;