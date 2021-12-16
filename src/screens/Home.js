import React, {Component} from "react";
import {View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity} from "react-native";
import {TextInput, ScrollView} from "react-native-gesture-handler";
import Icon from '@expo/vector-icons/Ionicons';
import Couches from "../common/Couches";
import New from "../common/New";

export default class Home extends Component {
    render() {
        return(
            <ScrollView style={styles.screenScrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.headerView}>
                    <View style={styles.titleTextView}>
                        <Text style={styles.titleText}>Furniture</Text>
                    </View>
                    <View style={styles.bagImageView}>
                        <Image source={require('../images/bag-2.png')} style={styles.bagImage}/>
                    </View>
                </View>
                <View style={styles.searchBorderView}>
                    <View style={styles.searchBorder}>
                        <Icon name="ios-search" size={22} color= "#4f4a4a" />
                        <TextInput style={styles.textInput} placeholder="Search unique furniture..."/>
                    </View>
                    <View style={styles.searchBorderImageView}>
                        <Image source={require('../images/sort.png')} style={styles.searchBorderImage}/>
                    </View>
                </View>
                <View style={styles.typeTitleView}>
                    <Text style={styles.typeTitle}>Modern</Text>
                    <View style={styles.dotView}/>
                    <Text style={styles.typeTitleInfo}> Good Quality Items </Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop: 10}}>
                    <Couches
                        src={require('../images/1.png')}
                        name="Beautiful Couches"
                        onPress={()=>this.props.navigation.navigate('Detail')}
                    />
                    <Couches
                        src={require('../images/2.png')}
                        name="Autobe best chair"
                        onPress={()=>this.props.navigation.navigate('Detail')}
                    />
                    <Couches
                        src={require('../images/1.png')}
                        name="Beautiful Couches"
                        onPress={()=>this.props.navigation.navigate('Detail')}
                    />
                </ScrollView>
                <View style={styles.arrivalsTitleView}>
                    <Text style={styles.arrivalsTitle}>New Arrivals</Text>
                    <View style={styles.dotView}/>
                    <Text style={styles.typeTitleInfo}> Good Quality Items </Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <New src={require('../images/sofa.png')}/>
                    <New src={require('../images/lr.png')}/>
                    <New src={require('../images/sofa.png')}/>
                </ScrollView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    screenScrollView: {
        backgroundColor: "#fff",
        paddingHorizontal: 20
    },
    headerView: {
        flexDirection: "row",
        width: "100%",
        marginTop: 40,
        alignItems: "center"
    },
    titleTextView: {
        width: "50%"
    },
    titleText: {
        fontFamily:"Bold",
        fontSize: 22
    },
    bagImageView: {
        width:"50%",
        alignItems:"flex-end"
    },
    bagImage: {
        width: 16,
        height: 20
    },
    searchBorderView: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginVertical: 30
    },
    searchBorder: {
        flexDirection: "row",
        alignItems: "center",
        elevation: 2,
        width: "85%",
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
        height: 35,
        borderRadius: 10,
        marginLeft: 1
    },
    textInput: {
        fontFamily: "Medium",
        paddingHorizontal: 10,
        fontSize: 12
    },
    searchBorderImageView:{
        alignItems: "center",
        elevation: 2,
        width: "15%",
        backgroundColor: "#FFF",
        height: 35,
        borderRadius: 10,
        marginLeft: 5,
        justifyContent: "center"
    },
    searchBorderImage: {
        width:18,
        height:25
    },
    typeTitleView: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center"
    },
    typeTitle: {
        fontFamily: "Bold",
        fontSize: 18,
        color: "#4f4a4a"
    },
    dotView: {
        width: 5,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor: "#4f4a4a"
    },
    typeTitleInfo: {
        fontFamily: "Bold",
        fontSize: 9,
        color: "#4f4a4a"
    },
    arrivalsTitleView: {
        flexDirection: "row",
        marginTop: 30,
        marginBottom: 10,
        alignItems: "center"
    },
    arrivalsTitle: {
        fontFamily: "Bold",
        color: "#4f4a4a",
        fontSize: 20
    },
})