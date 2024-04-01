//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Dashbord = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#D0E0F3" }}>
            <View style={{ flex: 1 }}>
                <View style={styles.container1}>
                    <View style={[styles.container, { width: "30%", justifyContent: "space-between" }]}>
                        <Image style={styles.img} source={require('../Assets/Drawer.png')} />
                        <Image style={styles.img1} source={require('../Assets/Logo.png')} />
                    </View>
                    <View style={[styles.container, { width: "50%", justifyContent: "space-between" }]}>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={require('../Assets/Copy.png')} />
                            <Text style={styles.txt}>DxD23e...fa1</Text>
                        </View>
                        <Image style={styles.img1} source={require('../Assets/Ellipse.png')} />
                        <Image style={styles.img2} source={require('../Assets/Notification.png')} />
                    </View>
                </View>
                <View style={styles.box}>
                    <Text style={styles.txtData}>USDFx Balance</Text>
                    <Text style={styles.txtData}>0.00</Text>
                </View>
                <Text style={{ fontWeight: "700", fontSize: 18, color: "#244C87", margin: verticalScale(10) }}>Trade at your fingertips</Text>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-evenly" }}>
                    <TouchableOpacity onPress={()=> navigation.navigate("FxfortBuy")} style={{
                        flexDirection: "row",
                        alignItems: "center",
                        alignSelf: "center",
                        height: moderateScale(66),
                        width: moderateScale(150),
                        backgroundColor: "#9DB7D9",
                        justifyContent: "center",

                    }}>
                        <Image style={{ height: moderateScale(34), width: moderateScale(36) }} source={require('../Assets/Vector.png')} />
                        <Text>{' '}Buy USDFx</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flexDirection: "row",
                        alignItems: "center",
                        alignSelf: "center",
                        height: moderateScale(66),
                        width: moderateScale(150),
                        backgroundColor: "#9DB7D9",
                        justifyContent: "center"
                    }}>
                        <Image style={{ height: moderateScale(34), width: moderateScale(36) }} source={require('../Assets/Vector.png')} />
                        <Text>{' '}P2P Trade</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontWeight: "700", fontSize: 18, color: "#244C87", margin: verticalScale(10) }}>Know USDFx Ecosystem</Text>
                <Text style={{ fontWeight: "500", fontSize: 18, color: "#fff", marginStart: "10%" }}>Learn about Partner program</Text>
                <View style={styles.box1}>
                    <Text style={{ color: '#fff', marginStart: 15, fontSize: 14, fontWeight: "400" }}>Learn about USDFx</Text>
                </View>
                <View style={styles.box1}>
                    <Text style={{ color: '#fff', marginStart: 15, fontSize: 14, fontWeight: "400" }}>Learn about USDFx</Text>
                </View>
                <Text style={{ fontWeight: "700", fontSize: 18, color: "#244C87", margin: verticalScale(10) }}>Important Link</Text>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-evenly" }}>
                    <TouchableOpacity style={{
                        flexDirection: "row",
                        alignItems: "center",
                        alignSelf: "center",
                        height: moderateScale(66),
                        width: moderateScale(150),
                        backgroundColor: "#9DB7D9",
                        justifyContent: "center",

                    }}>
                        <Image style={{ height: moderateScale(34), width: moderateScale(36) }} source={require('../Assets/Vector.png')} />
                        <Text>{' '}Partner App</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flexDirection: "row",
                        alignItems: "center",
                        alignSelf: "center",
                        height: moderateScale(66),
                        width: moderateScale(150),
                        backgroundColor: "#9DB7D9",
                        justifyContent: "center"
                    }}>
                        <Image style={{ height: moderateScale(34), width: moderateScale(36) }} source={require('../Assets/Vector.png')} />
                        <Text>{' '}Contact us</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ backgroundColor: "#244C87", height: moderateScale(60), flexDirection: "row" }}>
                <View style={{ height: 80, backgroundColor: "#a4aea0", width: 80, marginTop: -20, borderRadius: 50, marginStart: 10, alignItems: "center", justifyContent: "center" }}>
                    <Text style ={{fontSize:25, fontWeight:'600'}}>د.إ</Text>
                </View>
                <View style={{ justifyContent: "center", marginStart: 15 }}>
                    <Text style={{ color: '#fff', fontSize: 8 }}>USDFx Exchange Price (1 USDFx)</Text>
                    <Text style={{ color: '#fff', fontSize: 18 }}>BUY 88.90 INR SELL 83.90 INR</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    container1: {
        justifyContent: "space-between",
        flexDirection: "row",
        margin: verticalScale(10),
        alignItems: "center",
    },
    img: {
        width: moderateScale(40),
        height: moderateScale(25)
    },
    img1: {
        width: moderateScale(30),
        height: moderateScale(30)
    },
    img2: {
        width: moderateScale(15),
        height: moderateScale(15)
    },
    txt: {
        color: "#244C87"
    },
    box: {
        height: moderateScale(73),
        width: "92%",
        backgroundColor: "#244C87",
        alignItems: "center",
        alignSelf: "center", justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 10
    },
    txtData: {
        fontWeight: "600",
        color: "#fff",
        fontSize: 25
    },
    boxUsd: {
        height: moderateScale(66),
        width: moderateScale(180),
        backgroundColor: "#9DB7D9"

    },
    box1: {
        height: moderateScale(37),
        backgroundColor: "#244C87",
        width: "90%",
        alignSelf: "center",
        justifyContent: "center",
        margin: 10
    }
});

export default Dashbord;
