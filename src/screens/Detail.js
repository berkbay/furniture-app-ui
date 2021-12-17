import React, {Component} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SwiperComponent from '../common/SwiperComponent';
import Star from 'react-native-stars'



export default class Detail extends Component {
    render() {
        return(
            <View style={styles.pageView}>
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../images/back.png')} style={styles.backButtonImage}/>
                    </TouchableOpacity>
                    <View style={styles.bagImageView}>
                        <Image source={require('../images/bag-2.png')} style={styles.bagImage}/>
                    </View>
                </View>
                <View style={styles.colorSwiperContainer}>
                    <View style={styles.colorSwiperView}>
                        <View style={styles.colorBox} backgroundColor="#3f3a42"/>
                        <View style={styles.colorBox} backgroundColor="#707070"/>
                        <View style={styles.colorBox} backgroundColor="#b3b4b9"/>
                    </View>
                </View>
                <SwiperComponent/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pageView: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 20
    },
    headerView: {
        flexDirection: "row",
        width: "100%",
        marginTop: 50
    },
    backButtonOpacity: {
        width: "50%"
    },
    backButtonImage: {
        width: 15,
        height: 15
    },
    bagImageView: {
        width: "50%",
        alignItems: "flex-end"
    },
    bagImage: {
        height: 20,
        width: 16
    },
    colorSwiperContainer: {
        flexDirection: "row",
        height: 340,
        width: "100%"
    },
    colorSwiperView: {
        marginTop: 150
    },
    colorBox: {
        height: 25,
        width: 25,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#FFF",
        elevation:5,
        marginVertical: 10
    }
})