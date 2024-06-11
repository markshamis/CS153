import React from 'react';
import {Button, Text, View, StyleSheet, Image} from 'react-native';


const Goblin=() =>{
    return(
        <View style={{justifyContent: 'center'}}>
      <Image
        source={{
           uri: 'https://media.gettyimages.com/id/1172079380/photo/goblin.jpg?s=612x612&w=0&k=20&c=RDt-VtIS0Fd1WmvxtAe01I6uTltglVv2TImu0duuNbA=',
        
        }}
        style={{width: 200, height: 200}}

    />
      <Text> I am a Scary Goblin Raaaah! Pick your hiding spot!</Text>
      </View>
    );
};

export default Goblin;