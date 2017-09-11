import React from 'react';
import  { View } from 'react-native';
import Swiper from 'react-native-swiper';
import Profile from './src/components/profile';
import Journal from './src/components/journal';
import Log from './src/components/log';


export default class App extends React.Component {
	render(){
		return (
			<Swiper loop={false} showsPagination={false} >
				<Profile/>
				<Journal />
				<Log  />
			</Swiper>
		);
	}
}