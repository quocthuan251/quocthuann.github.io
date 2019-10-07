import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import { Feather, Ionicons, } from '@expo/vector-icons';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgData = [
    { id: 1, imgSource: require('./assets/1.jpg') },
    { id: 2, imgSource: require('./assets/2.jpg') },
    { id: 3, imgSource: require('./assets/3.jpg') },
    { id: 4, imgSource: require('./assets/4.jpg') },
    { id: 5, imgSource: require('./assets/5.jpg') },
    { id: 6, imgSource: require('./assets/6.jpg') }
];
const centerImgData = Math.floor(imgData.length / 2);
export default class App extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view1}> </View>
                <View style={styles.avataGroup}>
                    <View style={styles.avataWrapper}>
                        <Image
                            style={styles.avataImg}
                            source={require('./assets/donald trum.jpg')}
                        ></Image>
                    </View>

                    <View style={styles.textInfo}>
                        <Text style={styles.nameText}> Donald Trump </Text>
                        <Text style={styles.jobText}> President </Text>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity style={styles.followButton}>
                                <Text style={styles.followText}>Follow</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.messageButton}>
                                <Ionicons name="md-send" size={22} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>



                </View>
                <View style={styles.likeGroup}>
                    <View style={styles.countGroup}>
                        <Text style={styles.countText}>210</Text>
                        <Text style={styles.textGroup}>Photos</Text>
                    </View>
                    <View style={styles.countGroup}>
                        <Text style={styles.countText}>15K</Text>
                        <Text style={styles.textGroup}>Followers</Text>
                    </View>
                    <View style={styles.countGroup}>
                        <Text style={styles.countText}>605</Text>
                        <Text style={styles.textGroup}>Following</Text>
                    </View>
                </View>
                <View style={styles.imgGroup}>


                </View>
                <View style={styles.view5}> </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,



    },
    view1: {
        flex: 1,
        backgroundColor: "#EEEEEE",

    },
    avataGroup: {
        flex: 3,
        flexDirection: "row",

    },
    likeGroup: {
        flex: 1.8,

        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    imgGroup: {
        flex: 9,
        backgroundColor: "#EEEEEE",
        flexDirection: 'row',
    },
    view5: {
        flex: 1,
        backgroundColor: "#EEEEEE",

    },
    avataImg: {

        width: 90,
        height: 90,
        borderRadius: 45,
    },
    textInfo: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around"
    },
    followButton: {
        backgroundColor: FOLLOW_COLOR,
        width: 90,
        height: 30,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    followText: {
        color: "white",
        fontWeight: 600
    },
    messageButton: {
        marginLeft: 5,
        backgroundColor: SEND_MESSAGE_COLOR,
        width: 55,
        height: 30,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,

    },
    buttonWrapper: {
        flexDirection: "row"
    },
    avataWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold'

    },
    jobText: {
        fontSize: 18,
        color: "gray",
        fontStyle: 'italic'
    },
    countGroup: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',

    },
    countText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textGroup: {
        fontWeight: 400,
        color: "gray"
    }

});

