import { useState } from "react";
import {  Text, View, Modal,ImageBackground,ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import {  IconButton,Appbar } from 'react-native-paper';

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



export default function DetailsPage(props, route,navigation) {
    let [fontsLoaded] = useFonts({
        Inter_900Black,
        BungeeShade_400Regular,
        BerkshireSwash_400Regular,
        Audiowide_400Regular

      });
    const firstname = props.route.params.firstname;
    const image = props.route.params.image;
    const lastname = props.route.params.lastname;
    const description = props.route.params.age;
    const maiden =props.route.params.maidenname;
    const companyDetails = props.route.params.company;
    console.log("***************************************")
    console.log(companyDetails);
    console.log("***************************************")
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [modalVisible, setModalVisible] = useState(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };
    return (

        <View style={{ flex: 1, flexDirection: 'column', display: 'flex', justifyContent: 'space-between' }}>
                 <ImageBackground style={{flex:1}} source={{uri:'https://i.pinimg.com/originals/a0/7e/8f/a07e8f05a7d516ba7fd90519c5126058.jpg'}}>
              <Appbar.Header>
      <Appbar.BackAction onPress={() => props.navigation.goBack()} />
      <Text style={{color:'white' ,fontFamily:'Inter_900Black'}}>{"Details About " + firstname}</Text>
    </Appbar.Header>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={{ height: hp('100%') }}>

                    <Image
                        style={{ flex: 1,resizeMode:'stretch' }}
                        source={{
                            uri: image,
                        }}
                    />
                    <IconButton
                        icon="close-circle"
                        color='black'
                        size={40}
                        style={{ position: 'absolute', left: wp('80%'), top: 20 }}
                        onPress={() => setModalVisible(false)}
                    />

                </View>
            </Modal>

            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={{ height: hp('45%'),marginVertical:wp('4%') ,justifyContent:'space-evenly'}}>

                    <Image
                        style={{ flex:1,resizeMode:'cover' }}
                        source={{
                            uri: image,
                        }}
                    />
                    <IconButton
                        icon="resize"
                        color='black'
                        size={40}
                        style={{ position: 'absolute', left: wp('70%'),top: hp('-2%') }}
                        onPress={() => setModalVisible(true)}
                    />

                </View>
            </TouchableWithoutFeedback>
            <ImageBackground imageStyle={{ borderTopLeftRadius:50,borderTopRightRadius:50,opacity:0.7}} style={{flex:1}} source={{uri:'https://previews.123rf.com/images/annaleni/annaleni1510/annaleni151000066/46604184-thin-line-retail-e-commerce-online-business-seamless-blue-pattern-vector-shopping-and-marketplace-de.jpg'}}>
            <View style={{ height: hp('45%'), justifyContent: 'space-evenly',borderTopLeftRadius:50,borderTopRightRadius:50 }}>
                <View style={{ height: hp('5%'), flexDirection: 'row', alignItems: 'center', marginHorizontal: wp('8%'),marginTop:wp('2%') }}>
                    <Text style={{color:'black', fontFamily:'Inter_900Black'}}>{firstname+" "}</Text>
                    <Text style={{color:'black', fontFamily:'Inter_900Black'}}>{lastname}</Text>
                     
                </View>
                <View>
                    
                <ScrollView style={{ height: hp('30%'),marginHorizontal:wp('8%') }}>
                    <Text style={{color:'black', fontFamily:'Audiowide_400Regular'}}>
                        Our buddy {firstname} {lastname} is {description} years old. And our buddy's maiden name is {maiden} . {firstname} works as a {companyDetails.title} at {companyDetails.name}. And if you want to visit at work , you can find {firstname} at {companyDetails.address.address} , {companyDetails.address.city}
                    </Text>
                </ScrollView>
                </View>
            </View>
            </ImageBackground>
            </ImageBackground>
        </View>

    )

}