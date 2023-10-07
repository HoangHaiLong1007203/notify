import { StyleSheet } from 'react-native';
import {Dimensions} from "react-native";

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        height:height*.1,
        width:width,
        backgroundColor:'white',
        alignItems:'flex-end',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
    },
    icon:{
        marginLeft:10,
        marginRight:10
        // padding:5
    },
    item:{
        width:width*.4,
        height:width*.4*.46,
        borderRadius:15,
        margin:10
    },
    center:{
        justifyContent:"center",
        alignItems:'center',
        alignSelf:'center'
    },
    ab:{
        position:'absolute',

    },
    trans:{
        backgroundColor:'black',
        opacity:.4,

    },
    wtext:{
        color:'white',
        fontSize:13,
        fontWeight:'600',
        textTransform:'uppercase'
    },
    shadow:{
        elevation: 20,
        backgroundColor:"white"
    },
    row:{
        flexDirection:'row'
    },
    title:{
        fontSize:20,
        fontWeight:'600'
    },
    mg:{
        margin:10
    },
    but:{
        // fontWeight:'600',
        // fontSize:14,
        borderRadius:10,
        borderWidth:1,
        borderColor:'black',
        height:50,
        width:width*.9,
        margin:20
    }
})
export default styles;