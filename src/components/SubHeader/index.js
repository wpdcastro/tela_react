import React from 'react';
import {View, Text, Image} from 'react-native';
import Button from '../Button';
import styles from './styles';

const SubHeader = (props) => (

	<View style={styles.container}>
		<Image 
		   style={styles.avatar}
	       source={{uri: props.image }}
		/>
	
		<View style={styles.profile}>
			<Text style="styles.name"> Aatrox </Text>
			<Text style="styles.bio"> Mensagem X </Text>
			<View style={styles.buttonsContainer}>
				<Button>btn 1</Button>
				<Button>btn 2</Button>
			</View>
		</View>
	</View>

);

export default SubHeader;