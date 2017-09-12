import React from 'react';
import  { View } from 'react-native';
import Swiper from 'react-native-swiper';
import Log from './src/components/log';


export default class App extends React.Component {
	render(){
		return (
			<Swiper loop={false}  showsPagination={false} >
				<Log  />
			</Swiper>
		);
	}
}