import { StyleSheet, TextInput } from 'react-native';

export default function InputSearch() {
	return <TextInput style={styles.input} />;
}

const styles = StyleSheet.create({
	input: {
		flex: 1,
		backgroundColor: 'white',
	},
});
