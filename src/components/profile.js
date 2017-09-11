import React, { Component } from 'react';
import Header from './headerp';
import {
  Text,
  View
} from 'react-native'



var styles = {
  wrapper: {
    flex: 1
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

class Profile extends Component {
  render(){
    return(
      <View style={styles.wrapper} >
          <Header headerText={'Profile'}/>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello</Text>
          </View>
      </View>
    );
  }
}



export default Profile;

