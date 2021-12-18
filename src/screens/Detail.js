import React, {Component} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SwiperComponent from '../common/SwiperComponent';
import Stars from 'react-native-stars'
import {ScrollView} from "react-native-gesture-handler";




export default class Detail extends Component {
    render() {
        const params = this.props.navigation.state.params;
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
                    <SwiperComponent/>
                </View>
                <View style={styles.saveImageView}>
                    <Image source={require('../images/save.png')} style={styles.saveImage}/>
                </View>
                <View style={styles.furnitureCustomerView}>
                    <View style={{width: "65%"}}>
                        <Text style={styles.furnitureName}>{params.name}</Text>
                    </View>
                    <View style={{width: "35%"}}>
                        <Text style={styles.ratingText}>Customer Rating</Text>
                        <View style={styles.ratingStars}>
                            <Stars
                            default={4}
                            count={5}
                            half={true}
                            starSize={20}
                            fullStar={<Icon name={'star'} style={styles.myStarStyle}/>}
                            emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                            halfStar={<Icon name={'star-half'} style={styles.myStarStyle}/>}
                            />
                            <Text style={styles.reviewsText}> 84 Reviews</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.priceText}>{params.price}</Text>
                <Text style={styles.furnitureExplanation}>
                    Full sleeves short dress with three attractive colors and available in various sizes.
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop: 40}}>
                    <View style={styles.sameFurnituresView}>
                        <Image source={require('../images/12.png')} style={styles.sameFurnituresImage}/>
                    </View>
                    <View style={styles.sameFurnituresView}>
                        <Image source={require('../images/13.png')} style={styles.sameFurnituresImage}/>
                    </View>
                    <View style={styles.sameFurnituresView}>
                        <Image source={require('../images/14.png')} style={styles.sameFurnituresImage}/>
                    </View>
                    <View style={styles.sameFurnituresView}>
                        <Image source={require('../images/15.png')} style={styles.sameFurnituresImage}/>
                    </View>
                </ScrollView>
                <View style={styles.addCartBox}>
                    <Image source={require('../images/bag.png')} style={styles.cartImage}/>
                    <Text style={styles.cartText}> Add to Cart</Text>
                </View>
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
    },
    saveImageView: {
        width: "100%",
        alignItems: "flex-end"
    },
    saveImage: {
        marginTop: -45,
        width: 15,
        height: 20
    },
    furnitureCustomerView: {
        flexDirection: "row",
        alignItems: "center",
        marginTop:20,
        width: "100%"
    },
    furnitureName: {
        fontFamily: "Bold",
        fontSize: 18,
        color: "#4f4a4a"
    },
    ratingText: {
        fontFamily: "Bold",
        fontSize: 9,
        color: "#4f4a4a"
    },
    ratingStars: {
        alignItems: "center",
        flexDirection: "row"
    },
    myStarStyle: {
        color: "#000",
        backgroundColor: "transparent",
        textShadowColor: "black",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3
    },
    myEmptyStarStyle: {
        color: "white"
    },
    reviewsText: {
        fontSize: 8,
        fontFamily: "Bold",
        marginHorizontal: 5,
        paddingTop: 4,
        color: "#b3aeae"
    },
    priceText: {
        fontFamily: "Bold",
        fontSize: 16,
        color: "#b3aeae"
    },
    furnitureExplanation: {
        fontFamily: "Medium",
        fontSize: 14,
        lineHeight: 20,
        color: "#b3aeae",
        marginTop: 20
    },
    sameFurnituresView: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f6f6",
        height: 80,
        width: 80,
        borderRadius: 25,
        marginRight: 25
    },
    sameFurnituresImage: {
        height: 80,
        width: 80
    },
    addCartBox: {
        backgroundColor: "#000",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        padding: 12,
        marginBottom: 15
    },
    cartImage: {
        width: 16,
        height: 20
    },
    cartText: {
        fontSize: 20,
        color: "#FFF",
        fontFamily: "Bold",
        marginHorizontal: 15
    }
})