import React, {useState} from "react";
import {TextInput, Text, View, StyleSheet} from 'react-native';


const Name =() =>{
    const [text, setText]=useState('');
    return(
        <View style={styles.container}>
          <TextInput
          placeholder="Enter Goblin Name"
          style={{justifyContent:'center'}}
          onChangeText={setText}
          value={text}
          />

        </View>
    )
}
const styles = StyleSheet.create({
     container:{
        justifyContent: 'center',

     }

})

export default Name;