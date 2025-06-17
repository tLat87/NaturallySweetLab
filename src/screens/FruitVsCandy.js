import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    Dimensions,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_SIZE = width / 2 - 30;

const fruits = [
    {
        imageFruit: require('../assets/img/more/fqwf.png'),
        imageSweet: require('../assets/img/more/fghf67.png'),
        emoji: '🥭',
        title: 'Dried Mango vs Chewy Gummies',
        options: {
            first: {
                name: 'Dried Mango',
                sugar: '35g',
                fiber: '2.4g',
                vitamins: ['A', 'C'],
                additives: 'No',
                texture: 'Chewy',
            },
            second: {
                name: 'Chewy Gummies',
                sugar: '55g',
                fiber: '0g',
                vitamins: ['None'],
                additives: 'Yes',
                texture: 'Gelatin-based',
            },
        },
        winner: 'Mango',
    },
    {
        imageFruit: require('../assets/img/more/5678f.png'),
        imageSweet: require('../assets/img/more/yuwq67.png'),
        emoji: '🌴',
        title: 'Dates vs Toffee',
        options: {
            first: {
                name: 'Dates',
                sugar: '63g',
                fiber: '8g',
                vitamins: ['B6', 'K'],
                additives: 'No',
                energy: 'Balanced',
            },
            second: {
                name: 'Toffee',
                sugar: '70g',
                fiber: '0g',
                vitamins: ['None'],
                additives: 'Yes',
                energy: 'Spike',
            },
        },
        winner: 'Dates',
    },
    {
        imageFruit: require('../assets/img/more/fqwfqwf.png'),
        imageSweet: require('../assets/img/more/fghhhhh.png'),
        emoji: '🍍',
        title: 'Dried Pineapple vs Lollipop',
        options: {
            first: {
                name: 'Dried Pineapple',
                sugar: '47g',
                fiber: '5g',
                vitamins: ['C', 'B6'],
                coloring: 'Natural',
                stickiness: 'No',
            },
            second: {
                name: 'Lollipop',
                sugar: '70g',
                fiber: '0g',
                vitamins: ['None'],
                coloring: 'Artificial',
                stickiness: 'Yes',
            },
        },
        winner: 'Pineapple',
    },
    {
        imageFruit: require('../assets/img/more/fqwfqwf.png'),
        imageSweet: require('../assets/img/more/fghhhhh.png'),
        emoji: '🍏',
        title: 'Dried Apples vs Snack Bar',
        options: {
            first: {
                name: 'Dried Apples',
                sugar: '35g',
                fiber: '3g',
                vitamins: ['C'],
                ingredients: 'One',
                freshness: 'Natural',
            },
            second: {
                name: 'Snack Bar',
                sugar: '50g',
                fiber: '1–2g',
                vitamins: ['Minimal'],
                ingredients: 'Many',
                freshness: 'Processed',
            },
        },
        winner: 'Apples',
    },
];


const FruitVsCandy = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Fruit Vs Candy</Text>
            <FlatList
                data={fruits}
                keyExtractor={(_, index) => index.toString()}
                numColumns={2}
                contentContainerStyle={styles.grid}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {navigation.navigate('ComparisonScreen', {
                        imageFruit: item.imageFruit,
                        imageSweet: item.imageSweet,
                        emoji: item.emoji,
                        title: item.title,
                        options: item.options,
                        winner: item.winner
                    });}}>
                        <ImageBackground source={require('../assets/img/Group316.png')} style={styles.itemContainer}>
                            {/*<Image source={item} style={styles.image} resizeMode="contain" />*/}
                        </ImageBackground>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
};

export default FruitVsCandy;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EF4EC6',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'Alegreya',
        color: '#3b0a18',
        textAlign: 'center',
        marginVertical: 20,
    },
    grid: {
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    itemContainer: {
        width: ITEM_SIZE,
        height: ITEM_SIZE,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: ITEM_SIZE - 10,
        height: ITEM_SIZE - 10,
    },
});
