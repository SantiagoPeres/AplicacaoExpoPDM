import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Prova PDM - Santiago Loureço Galhardo Peres</Text>
      <Counter />
      <ClearValue/>
      
    </View>
  );
}

const useCounter = () => {
  const [valorBotao, setValue] = useState(1022)

  const setCount = () => {
    setValue(valorBotao * 2);
  }

  return [valorBotao, setCount];
}

const useClearCounter = () =>{
  const [clearValorBotao, setClearValue] = useState()
  const setClearCount = () => {
    setClearValue(1022)
  }
   
  return [clearValorBotao, setClearCount];
  
}

const ClearValue = () => {
  const [clearValorBotao,setClearCounter] = useClearCounter();


  return(
    <View>
      <Text style={styles.text}>{clearValorBotao}</Text>
      <Button 
        title="Clique aqui para reiniciar a contagem!"
        onPress={() => setClearCounter()}></Button>
    </View>
  )
}

const Counter = () => {
  const [valorBotao,setCounter] = useCounter();


  return(
    <View>
      <Text style={styles.text}>{valorBotao}</Text>
      <Button 
        title="Clique aqui!"
        onPress={() => setCounter()}></Button>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:50,
    color:'#fff',
    textAlign:'center'
  },
  
});



export default App;