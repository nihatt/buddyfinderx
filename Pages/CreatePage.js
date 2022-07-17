import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Text, View, Alert, ImageBackground, ScrollView } from 'react-native';
import { Button, Appbar, RadioButton } from 'react-native-paper';

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
import { TextInput } from 'react-native-paper';
import ProductRequest from '../Components/product_request';



const productHandler = async () => {
    const request = new ProductRequest(title, imageurl, price, description, category, email);

}



export default function CreatePage(props, { navigation }) {
    let [fontsLoaded] = useFonts({
        Inter_900Black,
        BungeeShade_400Regular,
        BerkshireSwash_400Regular,
        Audiowide_400Regular

    });
    const [selectedValue, setSelectedValue] = useState("Select Category");
    const [title, setTitle] = useState("");
    const [imageurl, setImageUrl] = useState("");
    const [price, setPrice] = useState(null);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [email, setEmail] = useState("");
    const [value, setValue] = useState('');

    const validate = (text) => {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {

            setEmail(text)
            return false;
        }
        else {
            setEmail(text)
        }
    }
    const productHandler = async () => {

            try {
                fetch("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/", {
                    method: "POST",
                    body: JSON.stringify({
                        "name": title,
                        "avatar": imageurl,
                        "price": priceint,
                        "description": description,
                        "category": value,
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                    .then(response => response.json())
                    .then(json => console.log(json));
                props.navigation.navigate('Home', { fromcreate: true });
            } catch (error) {
                Alert.alert(error + "API Error")
            }
        

    }
    return (
        <View style={{ width: wp('100%'), height: wp('100%'), flex: 1 }}>
            <ImageBackground style={{ flex: 1 }} source={{ uri: 'https://i.pinimg.com/originals/a0/7e/8f/a07e8f05a7d516ba7fd90519c5126058.jpg' }}>
                <Appbar.Header>
                    <Appbar.BackAction onPress={() => props.navigation.goBack()} />
                    <Text style={{ color: 'white', fontFamily: 'Inter_900Black' }}>Add A Buddy</Text>
                </Appbar.Header>
                <ScrollView>
                   
        <View style={{height:hp('80%'),justifyContent:'space-around'}}>
                        <View style={{ width: wp('95%'), alignSelf: 'center' }}>
                            <TextInput
                                style={{ height: hp('7%') }}
                                label="Buddy Name"
                                mode='outlined'
                                value={title}
                                onChangeText={text => setTitle(text)}
                            />
                        </View>
                        <View style={{ width: wp('95%'), alignSelf: 'center' }}>
                            <TextInput
                                style={{ height: hp('7%') }}
                                label="Image (as url)"
                                mode='outlined'
                                value={imageurl}
                                onChangeText={text => setImageUrl(text)}
                            />
                        </View>
                        <View style={{ width: wp('95%'), alignSelf: 'center' }}>
                            <TextInput
                                style={{ height: hp('7%') }}
                                label="Buddy Last Name"
                                mode='outlined'
                                keyboardType="numeric"
                                value={price}
                                onChangeText={text => setPrice(text.toString())}
                            />
                        </View>
                        <View style={{ width: wp('95%'), alignSelf: 'center' }}>
                            <TextInput
                                style={{ height: hp('7%') }}
                                label="Maiden"
                                mode='outlined'
                                keyboardType="numeric"
                                value={price}
                                onChangeText={text => setPrice(text.toString())}
                            />
                        </View>
                        <View style={{ width: wp('95%'), alignSelf: 'center' }}>
                            <TextInput
                                style={{ height: hp('7%') }}
                                label="Title"
                                mode='outlined'
                                keyboardType="numeric"
                                value={price}
                                onChangeText={text => setPrice(text.toString())}
                            />
                        </View>
                        <View style={{ width: wp('95%'), alignSelf: 'center' }}>
                            <TextInput
                                style={{ height: hp('7%') }}
                                label="City"
                                mode='outlined'
                                keyboardType="numeric"
                                value={price}
                                onChangeText={text => setPrice(text.toString())}
                            />
                        </View>
                        <View style={{ width: wp('95%'), alignSelf: 'center' }}>
                            <TextInput
                                style={{ height: hp('7%') }}
                                label="Adress"
                                mode='outlined'
                                keyboardType="numeric"
                                value={price}
                                onChangeText={text => setPrice(text.toString())}
                            />
                        </View>

                        </View>
                </ScrollView>
                <View style={{ height: hp('15%') }}>
                    <Button style={{ height: hp('6%'), marginTop: hp('3%'), alignSelf: 'center', justifyContent: 'center' }} mode="contained" onPress={productHandler}>
                        Add Buddy
                    </Button>
                </View>
            </ImageBackground>
        </View>
    )
}