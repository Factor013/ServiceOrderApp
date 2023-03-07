import {StyleSheet} from 'react-native';

const verdeE = '#607848'
const bege = '#F0F0D8'
const marrom = '#604848'
const branco = '#FFFFFF'
const verdeC = '#789048'

export const styleLogin = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    title:{
        alignItems:'center',
        justifyContent:'center',
        height:'30%',
        width:'100%',
        flex:0,
        backgroundColor: bege
    },
    form:{
        width:'100%',
        padding:50,
        paddingTop:100,
        flex:1,
        justifyContent:'flex-start',
        backgroundColor:bege,
    },
    text:{
        color:marrom,
        fontWeight:'bold',
        fontSize:20,
    },
    textInput:{
        alignSelf:'center',
        fontSize:18,
        padding:10,
        backgroundColor:branco,
        width:350,
        height:45,
        borderRadius:20,
        marginTop: 10,
        marginBottom:25

    },
    textRec:{
        color:'blue',
        textDecorationLine:'underline'
    },
    btnRec:{
        alignSelf:'center'

    },
    textEntrar:{
        alignSelf:'center',
        color: branco,
        padding:15,
        fontSize:20,
        fontWeight:'bold',
    },
    btnEntrar:{
        borderRadius:20,
        width:'50%',
        alignSelf:'center',
        marginTop:20,
        marginBottom:10,
        backgroundColor: verdeE
    }
})