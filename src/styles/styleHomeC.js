import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

const verdeE = '#607848'
const bege = '#F0F0D8'
const marrom = '#604848'
const branco = '#FFFFFF'
const verdeC = '#789048'

export const styleHomeC = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:verdeC
    },
    title:{
        justifyContent:'center',
        height:'30%',
        backgroundColor:verdeC,
    },
    form:{
        flex:0,
        backgroundColor:bege,
        width:'100%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        height:"100%"

        },
    table:{
        borderRadius:20,
        alignSelf:'center',
        backgroundColor:bege,
        width:'90%',
        height:"60%"
    },
    textTable:{
        margin:10,
        //color:marrom,

        fontSize:16,
        padding:5
    },
    textForm:{
        marginLeft: 20,
        margin: 10,
        fontWeight:'bold',
        fontSize:20,
        padding:5
    },
    textTitle:{
        alignSelf:'center',
        fontSize:50,
        fontWeight:'bold',
        color:branco,

    },
    celula:{
        marginTop:5,
        marginBottom:5,
        backgroundColor:branco,
        borderRadius:20
    }
})