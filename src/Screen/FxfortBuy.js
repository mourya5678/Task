//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { verticalScale, moderateScale } from 'react-native-size-matters';
import DatePicker from 'react-native-date-picker'
import moment from 'moment'

const { height, width } = Dimensions.get('window')

const FxfortBuy = ({ navigation }) => {

    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date());
    const [dob, setDob] = useState('')

    const onChange = val => {
        const formate_date = moment(val).format('DD/MM/YYYY')
        setDob(formate_date)
    }

    const _handlePress = () => {
        navigation.navigate("Fxfortp2p")
    }

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
            <ScrollView>
                <View style={{ flex: 1 }}>

                    <View style={styles.box}>
                        <Text style={styles.txt1}>Buy USDFx</Text>
                        <Text style={{ color: '#fff', marginStart: 15 }}>I want to pay</Text>
                        <View style={styles.whiteBox}>
                            <View style={{ width: "50%" }}>
                                <TextInput placeholder='Enter want pay' keyboardType='numeric' />
                            </View>
                            <View style={styles.$data}>
                                <Image source={require('../Assets/$Doller.png')} />
                                <Text style={{ fontSize: 14, color: "#244C87" }}>{' '}USD</Text>
                            </View>
                        </View>
                        <Text style={{ color: '#fff', marginStart: 15, marginTop: 10 }}>I will Receive</Text>
                        <View style={styles.whiteBox}>
                            <View style={{ width: "50%" }}>
                                <TextInput placeholder='Enter Receive Amount' keyboardType='numeric'/>
                            </View>
                            <View style={styles.$data}>
                                <Image source={require('../Assets/$Doller.png')} />
                                <Text style={{ fontSize: 14, color: "#244C87" }}>{' '}USDFx</Text>
                            </View>
                        </View>
                        <Text style={{ color: '#fff', marginStart: 15, marginTop: 10 }}>Order Valid Till</Text>
                        <View style={styles.whiteBox}>
                            <View>
                                <Text style={styles.txt}>{dob ? dob : "Dob"}</Text>
                            </View>
                            <TouchableOpacity onPress={() => setOpen(true)}>
                                <Image source={require('../Assets/calendar.png')} />
                            </TouchableOpacity>
                            <DatePicker
                                modal
                                mode='date'
                                open={open}
                                date={date}
                                maximumDate={new Date()}
                                onConfirm={date => {
                                    onChange(date)
                                    setOpen(false)
                                    setDate(date)
                                }}
                                onCancel={() => {
                                    setOpen(false)
                                }}
                            />
                        </View>
                        <TouchableOpacity onPress={() => _handlePress()} style={styles.btn}>
                            <Text style={styles.txt}>Create Order</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.longtxt}>
                        <Text style={{ color: "#244C87" }}>Boost your confidence in trading! Elevate your investment journey with guaranteed stability and convenience</Text>
                        <Text style={{ color: "#244C87", marginTop: 20 }}>At FxFort, purchase a minimum of 1100 USDFx {'\n'} directly</Text>
                    </View>
                </View>
            </ScrollView>
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
    box: {
        height: height / 2,
        backgroundColor: "#295392",
    },
    txt1: {
        margin: verticalScale(10),
        color: "#fff",
        fontSize: 25
    },
    whiteBox: {
        height: moderateScale(46),
        backgroundColor: "#fff",
        marginTop: 10,
        width: "92%",
        alignSelf: "center",
        elevation: 5,
        justifyContent: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10
    },
    $data: {
        height: 30,
        width: 86,
        backgroundColor: "#D0E0F3",
        alignItems: "center", justifyContent: "center",
        flexDirection: "row"
    },
    btn: {
        height: moderateScale(46),
        width: "92%",
        backgroundColor: "#D0E0F3",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        margin: 25
    },
    txt: {
        fontSize: 16,
        fontWeight: "700",
        color: "#244C87"
    },
    longtxt: {
        alignItems: "center",
        width: "80%",
        alignSelf: "center",
        marginTop: 30
    },
});

export default FxfortBuy;
