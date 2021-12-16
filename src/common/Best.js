import React, {Component} from "react";
import {Text, ImageBackground, StyleSheet} from "react-native";

export default class Best extends Component {
    render() {
        return(
            <ImageBackground style={styles.imageBackground} source={require('../images/lr.png')}>
                <Text style={styles.brandName}>{this.props.name}</Text>
                <Text style={styles.oppurtunity}>GET {this.props.oppurtunity} OFF</Text>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    imageBackground: {
        height: 130,
        width: 230,
        marginRight: 20,
        borderRadius: 10,
        marginBottom: 40,
        opacity: 0.7,
        backgroundColor: "#000",
        marginLeft: 3,
        padding: 12,
        marginTop: 20
    },
    brandName: {
        fontFamily: "Bold",
        color: "#FFF",
        fontSize: 15
    },
    oppurtunity: {
        fontFamily: "Bold",
        color: "#FFF",
        fontSize: 12
    }
})