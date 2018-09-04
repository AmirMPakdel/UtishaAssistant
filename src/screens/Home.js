import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../Colors';
export default class Home extends React.Component{

    render(){

        return(
            <View style={styles.container}>
                <Text style={{fontSize:28}}>Home</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: Colors.Whitebackground,
    },
  
  });