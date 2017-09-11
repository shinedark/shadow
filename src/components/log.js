import React, { Component } from 'react';
import Header from './headerp';
import {
  Text,
  View
} from 'react-native';



var styles = {
  wrapper: {
    flex: 1
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

class Log extends Component {
  render(){
    return(
      <View style={styles.wrapper} >
          <Header headerText={'Profile'}/>
          <View style={styles.slide3}>
            <Text style={styles.text}>Hello!!</Text>
          </View>
      </View>
    );
  }
}



export default  Log;

