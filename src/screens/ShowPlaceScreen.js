import React, { useEffect, useState, useContext } from 'react'
import * as firebase from 'firebase'
import { Feather } from '@expo/vector-icons';
import '@firebase/firestore'


import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    ScrollView,
    Platform,
    Linking
} from 'react-native'

//import { Context } from '../context/PlacesContext'

import Hr from '../components/Hr'

const ShowPlaceScreen = ({ route, navigation }) => {

    const { id } = route.params

    const [place, setPlace] = useState({})
    const [imgUrl, setImgUrl] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    // const { state, getPlace } = useContext(Context)

    useEffect(() => {
        // firebase.database().ref('places/' + id).on('value', data => {
        //     setPlace(data.val())
        //     getImage(data.val().thumb)
        // })
        firebase.firestore().collection('places')
            .doc(id).get().then(data => {
                setPlace(data.data())
                getImage(data.data().thumb)
            })
    }, [])


    const getImage = async (name) => {
        try {
            var ref = firebase.storage().ref(name)
            const res = await ref.getDownloadURL()
            setImgUrl(res)
            setIsLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    const openMap = () => {
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${place.latitude},${place.longitude}`;
        const label = place.name;
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });


        Linking.openURL(url);
    }


    if (!place.hasOwnProperty('thumb') || isLoading) return (
        <View style={styles.container}>
            <ActivityIndicator size='large' />
        </View>
    )

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.iconsView}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ImageShow', { id })}
                    >
                        <View style={styles.icon}>
                            <Feather name="image" size={40} color="white" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={openMap}
                    >
                        <View style={styles.icon}>
                            <Feather name="map-pin" size={40} color="white" />
                        </View>
                    </TouchableOpacity>
                </View>
                <Hr />
                <Text style={styles.title}>{place.name}</Text>
                <Image
                    style={styles.image}
                    source={{ uri: imgUrl }} />
                <Hr />
                <Text style={styles.des} >{place.description}</Text>
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 26,
        color: '#8fbc8f',
        fontWeight: 'bold',
        marginLeft: 15,
        marginVertical: 10,
        textAlign: 'center'
    },
    des: {
        color: '#8fbc8f',
        textAlign: 'justify',
        marginHorizontal: 10
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 4,
        marginBottom: 5,
        resizeMode: 'cover',
        alignSelf: 'center'
    },
    icon: {
        backgroundColor: '#8fbc8f',
        padding: 10,
        borderRadius: 25,
        margin: 10
    },
    iconsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40
    },
})

export default ShowPlaceScreen
