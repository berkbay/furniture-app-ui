import React, {Component} from "react";
import {View, Image, Text, StyleSheet} from "react-native";

export default class New extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={this.props.src} style={styles.image}/>
                </View>
                <View style={styles.infoView}>
                    <Text style={styles.infoText}>
                        Slakal sleeves short dress with three attractive colors
                    </Text>
                    <Text style={styles.priceText}> 599.90 USD </Text>
                </View>
                <View style={styles.addImageView}>
                    <Image source={require('../images/add.png')} style={styles.addImage}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 60,
        width: 240,
        backgroundColor: "#fff",
        elevation: 2,
        padding: 6,
        marginVertical: 5,
        marginRight: 20,
        marginLeft: 2,
        borderRadius: 10
    },
    image: {
        height: 50,
        width: 60,
        borderRadius: 10
    },
    infoView: {
        width: "65%",
        justifyContent: "flex-end",
        paddingHorizontal: 10,
        height: "100%"
    },
    infoText: {
        fontSize: 8,
        fontFamily: "Medium"
    },
    priceText: {
        fontSize: 11,
        fontFamily: "Bold"
    },
    addImageView: {
        width: "5%",
        justifyContent: "flex-end",
        height: "100%"
    },
    addImage: {
        height: 17,
        width: 17
    }
})