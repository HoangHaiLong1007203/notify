import React from "react";
import { Image, View,Text, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import styles from "../styles/mainstyle";
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default function Detail(){
    return(
        <View style={styles.container}>
            <View style={[styles.trans,{width:width,height:30}]}></View>
            <ImageBackground style={[{width:width,height:height*.7,justifyContent:'space-between'}]}
            source={require('../img/new_arrival_1.png')}>
                <View style={[styles.row,{justifyContent:'space-between'}]}>
                    <Image style={{top:10,left:10}} source={require('../icon/noun_back_2392166.png')}/>
                    <Image style={{top:10,right:10}} source={require('../icon/share-icon-3-dots.png')}/>                
                </View>
                <View style={[styles.row,{justifyContent:'space-between',alignItems:'flex-end'}]}>
                    <Image style={{bottom:10,left:10,borderWidth:10}} 
                    source={require('../icon/heart.png')}/>
                    <Image style={{bottom:10,right:10,borderWidth:10}} 
                    source={require('../icon/board.png')}/>
                </View>                
            </ImageBackground>
            <View style={{margin:20}}>
                    <Text>Sweet Never Salty Mini Dress</Text>
                    <Text style={{color:'#9B9B9B'}}>$34.99</Text>
            </View>
            <View style={{width:width, height:1, backgroundColor:'#979595'}}></View>
            <View style={[styles.row,styles.center]}>
                <TouchableOpacity style={[styles.center,
                    {borderRadius:10,borderWidth:1,
                    borderColor:'black',height:50,
                    width:width*.4,padding:10,margin:10,
                    backgroundColor:'black'}]}>
                    <Text style={{color:'white'}}>ADD TO BAG</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.center,styles.row,
                    {borderRadius:10,borderWidth:1,
                    borderColor:'black',height:50,
                    width:width*.4,padding:10,margin:10}]}>
                    <Image source={require('../icon/apple-filled-icon.png')}/>
                    <Text>Pay</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}