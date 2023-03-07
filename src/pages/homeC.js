import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import {styleHomeC} from '../styles/styleHomeC'
import { FlatList } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';


export function HomeC({navigation}){
  const data = [
  { id:'01',
    name:['Registro','Verificar Vedação','Pátio geral 2']
  },
  { id:'02',
  name:['Disjuntor','Verificar Continuidade','Sala Cinema']
  },
  { id:'03',
  name:['Porta','Trocar Fechadura','Quarto Hospedes 2']
  },
  { id:'04',
  name:['Lampada','Trocar','Quarto 222']
  },
  { id:'05',
  name:['Lampada','Trocar','Quarto 222']
  },
  { id:'06',
  name:['Lampada','Trocar','Quarto 222']
  },
  { id:'07',
  name:['Lampada','Trocar','Quarto 222']
  },
  { id:'08',
  name:['Lampada','Trocar','Quarto 222']
  },
  { id:'09',
  name:['Lampada','Trocar','Quarto 222']
  },
  { id:'10',
  name:['Lampada','Trocar','Quarto 222']
  },
  { id:'11',
  name:['Lampada','Trocar','Quarto 222']
  },
  { id:'12',
  name:['Lampada','Trocar','Quarto 222']
  },
  { id:'13',
  name:['Lampada','Trocar','Quarto 222']
  },
  { id:'14',
  name:['Lampada','Trocar','Quarto 222']
  },
  { id:'15',
  name:['Lampada','Trocar','Quarto 222']
  }
  ]
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress',() => true );
    return () => backHandler.remove();
  }, []);

  renderSeparator = () => (
    <View
      style={{
        backgroundColor:'black',
        height: 0.7,
      }}
    />
  );

  const ListHeader = () => {
    return (
      <View style={{flexDirection:'row', padding:10, justifyContent:'space-around'}}>
        <Text style={{fontWeight:'bold', color:'#604848'}}>
            Equipamento
        </Text>
        <Text style={{fontWeight:'bold', color:'#604848'}}>
            Manutenção
        </Text>
        <Text style={{fontWeight:'bold', color:'#604848'}}>
            Local
        </Text>
      </View>
    );
  };

  return (
    <View style={styleHomeC.container}>
      <View style={styleHomeC.title}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}><Text style={styleHomeC.textForm}> Menu </Text></TouchableOpacity>
        <Text style={styleHomeC.textTitle}>Bem Vindo</Text>
        <Text style={styleHomeC.textTitle}>```User!´´´</Text>
      </View>
      <View style={styleHomeC.form}>
          <Text style={styleHomeC.textForm}>Aqui estão seus serviços pendentes:</Text>
          <View style={styleHomeC.formTable}>
            <FlatList style={styleHomeC.table} data={data} 
            keyExtractor={item => item.id}
              renderItem={({item})=>
              <View style={styleHomeC.celula}>
                <Text style={styleHomeC.textTable}> {item.name[0]}</Text>
                <Text> {item.name[1]}</Text>
                <Text> {item.name[2]}</Text>
              </View>
             }/>
          </View>
      </View>
    </View>
  );
}