import React, { Component } from 'react';
import Header from './headerp';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import JournalDetail from './journaldetail';


var styles = {
  wrapper: {
    flex: 1
  },
  slide3: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

class Log extends Component {

  state = { albums: [] };

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums: response.data}));
  }

  renderAlbums(){
   return  this.state.albums.map(album =>
    <JournalDetail key={album.title} album={album} /> );
  }

  render(){
    return(
      <View style={styles.wrapper} >
          <Header headerText={'Store'}/>
          <ScrollView  style={styles.slide3}>
           
             {this.renderAlbums()}
            
          </ScrollView>
      </View>
    );
  }
}



export default  Log;

