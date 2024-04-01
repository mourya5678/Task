//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { verticalScale, moderateScale } from 'react-native-size-matters';

const { height, width } = Dimensions.get('window')

// create a component
const Fxfortp2p = () => {

    const DATA = [
        {
            title: 'Buy',
        },
        {
            title: 'Buy',
        },
        {
            title: 'Sell',
        },
    ];


    const Item = ({ title }) => (
        <View style={styles.item}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 5, padding: 5 }}>
                <View style={{ height: 30, width: 60, backgroundColor: "#244C87", alignItems: "center", justifyContent: "center" }}><Text style={{
                    fontSize: 15,
                    color: "#fff"
                }}>{title}</Text></View>
                <Text style={styles.title}>Total Orders 105 | 85.50%</Text>
            </View>
            <View style={{ marginStart: 10 }}>
                <Text style={{ color: "#fff" }}>Price</Text>
                <Text style={{ color: "#244C87", fontSize: 18 }}>INR 89,00,000</Text>
                <Text style={{ color: "#244C87", fontSize: 18 }}>Quantity  89,00,000</Text>
                <Text style={{ color: "#244C87", fontSize: 18 }}>USD</Text>
            </View>
        </View>
    );

    return (
        <View style={{ flex: 1, backgroundColor: "#D0E0F3" }}>
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
            <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-evenly", padding: 10 }}>
                <TouchableOpacity style={{
                    flexDirection: "row",
                    alignItems: "center",
                    alignSelf: "center",
                    height: moderateScale(66),
                    width: moderateScale(150),
                    backgroundColor: "#244C87",
                    justifyContent: "center",

                }}>
                    <Text style={{ color: "#fff" }}>{' '}P2P Trade </Text>
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
                    <Text>{' '}Express</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-evenly", alignSelf: "center" }}>
                <Text>Filter</Text>
                <Image style={{ height: 30, width: 30 }} source={require('../Assets/Vecto.png')} />
            </View>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <View style={{ backgroundColor: "#244C87", flexDirection: "row", marginTop: 20 }}>
                    <View style={{ height: 80, backgroundColor: "#a4aea0", width: 80, marginTop: -20, borderRadius: 50, marginStart: 10, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 25, fontWeight: '600' }}>د.إ</Text>
                    </View>
                    <View style={{ justifyContent: "center", marginStart: 15 }}>
                        <Text style={{ color: '#fff', fontSize: 8 }}>USDFx Exchange Price (1 USDFx)</Text>
                        <Text style={{ color: '#fff', fontSize: 18 }}>BUY 88.90 INR SELL 83.90 INR</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

// define your styles
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
    item: {
        height: height / 5,
        backgroundColor: "#9DB7D9",
        marginVertical: 8,
    },
    // title: {
    //     fontSize:18,
    //     color:"#fff"
    //   },
});

export default Fxfortp2p;
