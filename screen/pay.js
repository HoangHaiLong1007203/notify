import React from "react";
import { Image, View,Text, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import styles from "../styles/mainstyle";
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default function Pay(){
    return(
        <View style={[styles.container]}>
            <Image style={{height:height,width:width}} source={require('../img/ab.png')}/>                           
        </View>
        )
}