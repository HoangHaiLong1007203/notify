import React from "react";
import { Image, View,Text, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import styles from "../styles/mainstyle";
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const Items =({bg,txt}) =>{
    return(
        <ImageBackground style={[styles.item, styles.center]} source={bg}>
            <View style={[styles.item,styles.ab,styles.trans]}></View>
            <Text style={styles.wtext}>{txt}</Text>
        </ImageBackground>
    );
};
const Items2 =({img,price,name}) =>{
    return(
        <View style={[{width:134},styles.mg]}>
            <Image source={img}/>
            <Text style={{fontWeight:'600',fontSize:14}}>{price}</Text>
            <Text style={{fontWeight:'500',fontSize:12}}>{name}</Text>
        </View>
    )
}
function Mainscreen(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.icon} source={require('../icon/harmburger-icon.png')} />
                <Text  style={{fontWeight:'bold',fontSize:17}}>Shopertino</Text>
                <Image style={styles.icon} source={require('../icon/shopping-bag-filled.png')} />
            </View>
            <View style={{width:width, height:2, backgroundColor:'#979595'}}></View>
            <ScrollView >
                <View style={styles.row}>
                    <Items bg={require('../img/clothingImage_1.png')} txt='clothing'/>
                    <Items bg={require('../img/accessory.png')} txt='accessory'/>
                    <Items bg={require('../img/ladyShoes_2.png')} txt='Shoes'/>
                </View>
                <Text style={[styles.title, styles.center,{margin:10}]}>New Arrivals</Text>
                <View style={[styles.row,{justifyContent:'center',alignItems:'center'}]}>
                    <View style={[styles.shadow,{margin:30}]}>
                        <Image source={require('../img/new_arrival_2.png')} />
                    </View>
                    <TouchableOpacity style={[styles.shadow,{margin:30}]}>
                        <Image source={require('../img/new_arrival_1.png')} />
                    </TouchableOpacity>
                    <View style={[styles.shadow,{margin:30}]}>
                        <Image source={require('../img/new_arrival_2.png')} />
                    </View>
                </View>
                <View style={styles.center}>
                    <Text>Sweet Never Salty Mini Dress</Text>
                    <Text style={{color:'#9B9B9B'}}>$34.99</Text>
                </View>
                <Text style={[styles.title,{marginLeft:20}]}>Featured</Text>
                <View style={styles.row}>
                    <Items2 img={require('../img/featured_image_1.png')} price='$34.99' name='Sweet Never Salty Mini Dress' />
                    <Items2 img={require('../img/featured_image_2.png')} price='$24.99' name='Aiyana Ruched Mini Dress - Leop…' />
                    <Items2 img={require('../img/featured_image_3.png')} price='$39.99' name='Life Is A Safari Mini Dress - Khaki' />
                </View>
                <Text style={[styles.title,{marginLeft:20}]}>Best Sellers</Text>
                <View style={[styles.row,{justifyContent:'space-around'}]}>
                    <Items2 img={require('../img/best_seller_1.png')} price='$29.99' name='Abigail Ruched Mini Dress - Jade' />
                    <Items2 img={require('../img/best_seller_2.png')} price='$29.99' name='Leilah Shirt Dress - Leopard' />
                </View>
                <View style={[styles.row,{justifyContent:'space-around'}]}>
                    <Items2 img={require('../img/best_seller_3.png')} price='$29.99' name='Living My Best Life Lounge Dress…' />
                    <Items2 img={require('../img/best_seller_4.png')} price='$34.99' name='The Cindy Snakeskin Blazer - Bro…' />
                </View>
                <TouchableOpacity style={[styles.but,styles.center]}>
                    <Text>Browse all</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
export default Mainscreen;