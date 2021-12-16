import React, {Component} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import Swiper from 'react-native-swiper';

export default class SwiperComponent extends Component {
    render() {
        return (
            <Swiper
            style={styles.wrapper}
            dotStyle={styles.dotStyle}
            activeDotColor="#FFF"
            activeDotStyle={styles.activeDotStyle}
            >
                <View style={styles.slide}>
                    <Image source={require('../images/unnamed.png')} style={styles.slideImage}/>
                </View>
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    dotStyle: {
        backgroundColor: "#000",
        borderColor: "#000",
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10
    },
    activeDotStyle: {
        borderColor: "#000",
        borderWidth: 1,
        width:10,
        height: 10,
        borderRadius: 10
    },
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF"
    },
    slideImage: {
        height:300,
        width: 300
    }
})