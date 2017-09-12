import React from 'react';
import { Text, View, Image , Linking } from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './button';


const JournalDetail = ({album}) => {

	const {title, artist, thumbnail_image, image , url } = album;

	return (
		<Card>
			<CardSection>
				<View style={styles.thumbnailContainerStyle}>
					<Image
						style={styles.thumbnailStyle} source={{uri: thumbnail_image}} 
					/>
				</View>
				<View style={styles.headerContentStyle}>
					<Text style={styles.headerText}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image 
					style={styles.imageStyle}
					source={{ uri: image}}
				 />
			</CardSection>

			<CardSection>
				<Button onPress={() => Linking.openURL(url)}>
				 	Buy Now 
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle:{
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerText:{
		fontSize: 18
	},
	thumbnailStyle:{
		height: 50,
		width: 50
	},
	thumbnailContainerStyle:{
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle:{
		height: 300,
		flex: 1,
		width: null
	}
};


export default JournalDetail;