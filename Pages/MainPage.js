import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, FlatList, ActivityIndicator, Alert, Image, RefreshControl } from 'react-native';
import { Searchbar, IconButton } from 'react-native-paper';
import ProductCard from '../Components/product_card';
import { useIsFocused } from '@react-navigation/native';
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
import CategoryButton from '../Components/category_button';
import { useNavigation } from '@react-navigation/native';





export default function MainPage(props, { navigation }) {
    const navigation1 = useNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {
        onRefresh();
        deleteHandler
    }, [isFocused]);
    let [fontsLoaded] = useFonts({
        Inter_900Black,
        BungeeShade_400Regular,
        BerkshireSwash_400Regular,
        Audiowide_400Regular
    });

    const noitem = "Nothing Found Here :(";
    const [searchQuery, setSearchQuery] = useState('');
    const [statusCode, setStatusCode] = useState(null);

    const [selectedCategory, setSelectedCategory] = useState('')
    const [productData, setProductData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [temporaryData, setTemporaryData] = useState([]);
    const onChangeSearch = query => {
        setSearchQuery(query), console.log(query),
            setTemporaryData(productData.filter(e => {
                if (query === '') {
                    return e;
                } else
                    return e.name.toLowerCase().includes(query.toLowerCase())
            }))
    };

    const [refreshing, setRefreshing] = useState(false);


    const onRefresh = useCallback(async () => {
        setRefreshing(true);

        try {
            let response = await fetch(
                'https://dummyjson.com/users',
            );
            let responseJson = await response.json();
            console.log(responseJson);
            setProductData(responseJson.users);
            setTemporaryData(responseJson.users);
            setRefreshing(false)
        } catch (error) {
            Alert.alert(error)
        }
    }, [refreshing]);

    const deleteHandler = async (id, props) => {

        console.log("girildi")
        const url = "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/"
        try {
            fetch(url + id, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })

                .then(response => response.json())
                .then(json => { console.log(json), onRefresh() });

        } catch (error) {
            Alert.alert(error + "API Error")
        }
    }

    const onFlatListEmpty = (props) => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', height: hp('60%'), width: wp('100%') }}>

                <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', textAlign: 'center', width: wp('80%') }}>
                    There are no products Found here , Maybe you would like to add one ?
                </Text>
                <Image style={{ height: hp('40%'), width: wp('80%') }} source={require('../assets/emptybasket.png')} />
            </View>
        );
    }

    const getData = async () => {
        await fetch('https://dummyjson.com/users', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response2 => response2.json())
            .then(data2 => {
                setCategoryData(data2.users);
                setTemporaryData(data2.users);
                console.log("-----------------------------")
                console.log("-----------------------------")
                console.log("-----------------------------")
                console.log("-----------------------------")
                console.log(data2.users)
            })
            .catch(err => console.error(err));

    }

    if (!fontsLoaded) {
        getData();
        return <ActivityIndicator size="large" color='red' style={{
            flex: 1,
            justifyContent: "center"
        }} />;
    } else if (statusCode == 429) {
        Alert.alert("Too Many Requests , Please try again a little bit later")
    } else

        return (

            <View style={styles.container}>
                <ImageBackground style={{ flex: 1 }} source={{ uri: 'https://i.pinimg.com/originals/a0/7e/8f/a07e8f05a7d516ba7fd90519c5126058.jpg' }}>
                    <View style={{ height: hp('7%'), width: wp('100%') }}>

                        <Text style={{
                            fontFamily: 'BungeeShade_400Regular', fontSize: 25, alignSelf: 'center', textShadowColor: 'rgba(121, 18, 111, 0.6)',
                            textShadowOffset: { width: -2, height: 5 },
                            textShadowRadius: 10, color: 'rgba(121, 18, 111, 1)'
                        }}>Find Ur Buddy</Text>
                    </View>


                    <SafeAreaView style={{
                        height: hp('90%'), marginTop: hp('1%'), paddingBottom: 0,width:wp('100%'),justifyContent:'space-between'
                    }}>
                        <FlatList
                            
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />
                            }
                            data={temporaryData.length > 0 ? temporaryData : null}
                            ListEmptyComponent={onFlatListEmpty}
                            numColumns={2}
                            renderItem={({ item }) => (
                                <ProductCard imageuri={item.image} title={item.firstName} price={item.age} navigation={() =>
                                    props.navigation.navigate('Details', {
                                        firstname: item.firstName, image: item.image, lastname: item.lastName, age: item.age,maidenname:item.maidenName,company:item.company
                                    })
                                } deleteitem={() => {
                                    Alert.alert(
                                        "Are you sure ?",
                                        "Item will be deleted",
                                        [
                                            {
                                                text: "Cancel",
                                                onPress: () => console.log("Cancel Pressed"),
                                                style: "cancel"
                                            },
                                            { text: "DELETE", onPress: () => deleteHandler(item.id) }
                                        ]
                                    )
                                }} />
                            )}
                            keyExtractor={item => item.id}
                        />
                    </SafeAreaView>
                    <View style={{ height: hp('5%'), width: wp('100%') }}>
                        <IconButton
                            icon="plus-circle"
                            color='purple'
                            style={{
                                alignSelf: 'flex-end',
                                position: 'absolute',
                                bottom: 35
                            }}
                            size={60}
                            onPress={() => props.navigation.navigate("Create")}
                        />
                    </View>
                    <StatusBar style="auto" />
                </ImageBackground>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        height:hp('90%'),
        paddingTop: hp('7%'),
        flex: 1,
        backgroundColor: '#fff',

    },
});
