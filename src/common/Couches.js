import React, {Component} from "react";
import {Text, View, Image, StyleSheet} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

export default class Couches extends Component{
    render() {
        return(
            <TouchableOpacity onPress={this.props.onPress} style={styles.touchableOpacity}>
                <Image source={this.props.src} style={styles.couchesImage}/>
                <View style={styles.infoContainer}>
                    <Text style={styles.name_}>{this.props.name}</Text>
                    <View style={styles.dotStyle}/>
                    <Text style={styles.prop}>New</Text>
                </View>
                <Text style={styles.general}>
                    Full sleeves short dress with three attractive colors and available in various sizes.
                </Text>
                <View style={styles.buyingInformation}>
                    <View style={{width: "80%"}}>
                        <Text style={styles.price}>399.90 USD</Text>
                    </View>
                    <View style={{width: "20%"}}>
                        <Image style={styles.addImage} source={require('../images/add.png')}/>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles= StyleSheet.create({
    touchableOpacity: {
        marginTop: 30,
        backgroundColor: "#FFF",
        height: 250,
        width: 200,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5
    },
    couchesImage: {
        width: 170,
        height: 110,
        borderRadius: 10,
    },
    infoContainer:{
        flexDirection: "row",
        alignItems: "center",
        marginVertical:10
    },
    name_: {
        fontFamily: "Bold",
        color: "#4f4a4a",
        fontSize: 12
    },
    dotStyle: {
        height: 4,
        width: 4,
        borderRadius: 4,
        backgroundColor: "red",
        marginHorizontal: 4
    },
    prop: {
        color: "red",
        fontSize: 9,
        fontFamily: "Bold"
    },
    general: {
        fontSize: 9,
        color: "#4f4a4a",
        fontFamily: "Regular"
    },
    buyingInformation: {
        flexDirection: "row",
        marginTop: 5,
        alignItems: "center",
        width: "100%"
    },
    price: {
        fontSize: 15,
        fontFamily: "Bold"
    },
    addImage:{
        alignSelf: "flex-end",
        width: 25,
        height: 25
    }
})