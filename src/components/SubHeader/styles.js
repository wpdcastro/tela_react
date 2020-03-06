import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

	container : {
		padding : 15,
		backgroundColor : '#ffffff',
		borderBottomWidth : 10,
		borderColor : '#808080',
		flexDirection: 'row',
	},

	avatar : {
		width: 68,
		height: 68,
		borderRadius: 34,
		marginRight: 15,
	},

	profile : {
		flex : 1,
	}, 

	name: {
		fontWeight: 'bold',
		fontSize: 18,
		color : '#808080',
		marginTop: 5,
	},

	bio: {
		fontSize : 10,
		color: '#808080',
		marginTop: 5,
	},

	buttonContainer : {
		flexDirection : 'row',
		marginTop: 10,
	},

});

export default styles;