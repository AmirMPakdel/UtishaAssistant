import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Calendar extends React.Component{

    render(){

        return(
            <View style={styles.container}>
                <Text style={{fontSize:28}}>Calendar</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#f2f2f2',
    },
  
  });