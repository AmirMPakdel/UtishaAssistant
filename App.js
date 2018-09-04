import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TabNavigation from './src/navigation/TabNavigation';
import realm from './src/database/Realm';
export default class App extends Component{

  constructor(props){
    super(props);

    // initializing the realm database
    realm.init();


  }

  render() {
    return (
      <View style={{flex:1, backgroundColor: '#f8f8f8'}}>
      <TabNavigation>

      </TabNavigation>
      </View>
    );
  }
}

