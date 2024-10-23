import EmptyList from '@/components/EmptyList';
import FooterList from '@/components/FooterList';
import InputSearch from '@/components/InputSearch';
import ItemView from '@/components/ItemView';
import { useState } from 'react';
import { FlatList, View, StyleSheet, RefreshControl, Text } from 'react-native';

export type ItemData = {
	id: string;
	title: string;
};

export default function Index() {
	const [refreshing, setRefreshing] = useState(false);
	const [data, setData] = useState<ItemData[]>([
		// { id: '1', title: 'Item 1' },
		// { id: '2', title: 'Item 2' },
		// { id: '3', title: 'Item 3' },
		// { id: '4', title: 'Item 4' },
		// { id: '5', title: 'Item 5' },
		// { id: '6', title: 'Item 6' },
		// { id: '7', title: 'Item 7' },
	]);

	const onRefresh = () => {
		setRefreshing(true);
		setTimeout(() => {
			setData([
				...data,
				{ id: `${data.length + 1}`, title: `Item ${data.length + 1}` },
			]);
			setRefreshing(false);
		}, 2000);
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={({ item }) => <ItemView item={item} />}
				keyExtractor={(item) => item.id}
				// style={styles.flatList}
				contentContainerStyle={styles.flatListContainer}
				// numColumns={3}
				// columnWrapperStyle={{ gap: 10 }}
				// refreshing={refreshing}
				// onRefresh={onRefresh}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
						title="Chargement..."
						tintColor="red"
						titleColor="red"
					/>
				}
				// showsVerticalScrollIndicator={false}
				// horizontal={true}
				// showsHorizontalScrollIndicator={false}
				ItemSeparatorComponent={() => (
					<View style={{ height: 5, backgroundColor: 'red' }} />
				)}
				ListFooterComponent={() => <FooterList numberOfItems={data.length} />}
				ListFooterComponentStyle={styles.footer}
				ListHeaderComponent={() => <InputSearch />}
				ListHeaderComponentStyle={styles.header}
				keyboardDismissMode="on-drag"
				ListEmptyComponent={() => <EmptyList />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	flatList: {
		// padding: 10,
	},
	flatListContainer: {
		padding: 10,
		gap: 10,
	},
	footer: {
		padding: 10,
		backgroundColor: 'lightblue',
	},
	textFooter: {
		fontSize: 20,
		fontStyle: 'italic',
		textAlign: 'center',
	},
	header: {
		padding: 10,
		backgroundColor: 'lightgreen',
	},
	headerText: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
