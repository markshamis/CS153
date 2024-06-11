import React, {useState} from 'react';
import Goblin from './components/Goblin';
import Name from './components/Name';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import {Button, Text, View, StyleSheet} from 'react-native';



const Box = ({index,isSelected, onSelect}) => {

  return (
    <View      style={styles.boxes}
>
      
      <Button
        onPress={() => onSelect(index)}
        disabled={isSelected}
        title={isSelected ?  'Spot selected':'Select a hiding spot' }

      />
     
    </View>
  );
};

const HomeScreen = () => {
  const [selected, setSelected] = useState(null);
  const [ready,setReady]=useState(false)
  const checkGoblin =() =>{
      //TODO
  }
  
  return (
    
    <View style={styles.container}>
      <Name/>
      <Goblin/>
      <View style={styles.boxesContainer}>
        {[0, 1, 2].map((index) => (
          <Box
            key={index}
            index={index}
            isSelected={selected === index}
            onSelect={setSelected}
          />
        ))}
      </View>
      <Button
        title="Ready?"
        onPress={() => setReady(true)}
      />
    </View>
    
  );
};
const AboutScreen = () =>{
  return(
  <View  style={styles.container}> 
    <Text style={styles.about}>About...</Text>
    <Text style={styles.about}>Hello, my Name is Mark Shamis. This app is currently a work in progress. I am attempting to make a simple game, where the user must pick a box to hide in (from the goblin).</Text>
    <Text style={styles.about}>The goblin will randomly select a box when the user clicks ready. If the goblin picks the same box as the user, they lose!</Text>
    <Text style={styles.about}>Future features: High Score table, countdown (instead of ready button), and Score keeping. Stay tuned!
    </Text>
  </View>
  )
}

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 100,
    },
    boxesContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  boxes:{
    height: 100,
    width: 100,
    margin: 10,
    justifyContent: 'center',

  },
  about:{
    height: 100,
    width: 200,
    margin: 10,
    justifyContent: 'center',

  }

})
export default App;