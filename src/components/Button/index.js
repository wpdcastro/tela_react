import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button = ({ children }) => (
	<TouchableOpacity style="styles.container">
		<Text style="styles.text">{children}</Text>
	</TouchableOpacity>
);


export default Button;