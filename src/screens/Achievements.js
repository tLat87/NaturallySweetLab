import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';

const { width } = Dimensions.get('window');

const achievementsList = [
    { id: 1, name: 'Snack Explorer', image: require('../assets/img/res/drtfyguihj.png') },
    { id: 2, name: 'Battle Fan', image: require('../assets/img/res/rtdfyguihjo.png') },
    { id: 3, name: 'Smart Snacker', image: require('../assets/img/res/ytuihoj.png') },
    { id: 4, name: 'Fruit Master', image: require('../assets/img/res/rdtfyguhijo.png') },
    { id: 5, name: 'Candy Crusher', image: require('../assets/img/res/tcfygvuhbijn.png') },
    { id: 6, name: 'Quiz Champion', image: require('../assets/img/res/tdrfyguhijo.png') },
];

const placeholderImage = require('../assets/img/res/placeholderMy.png');

const AchievementCard = ({ item, unlocked }) => (
    <View style={styles.achievementItem}>
        <Image source={unlocked ? item.image : placeholderImage} style={styles.icon} />
        <Text style={[styles.label, { opacity: unlocked ? 1 : 0.4 }]}>
            {item.name}
        </Text>
    </View>
);

const AchievementsScreen = () => {
    const unlockedIds = useSelector(state => state.achievements.achievements); // числовой массив, например [1, 6]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ACHIEVEMENTS</Text>
            <FlatList
                data={achievementsList}
                numColumns={3}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <AchievementCard item={item} unlocked={unlockedIds.includes(item.id)} />
                )}
                contentContainerStyle={styles.grid}
            />
        </View>
    );
};

export default AchievementsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2CD6D6',
        paddingTop: 60,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'Alegreya',
        color: '#202060',
        textAlign: 'center',
        marginBottom: 20,
    },
    grid: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    achievementItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width / 3 - 20,
        margin: 10,
    },
    icon: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginBottom: 8,
    },
    label: {
        fontSize: 16,
        fontFamily: 'Alegreya',
        fontWeight: '500',
        textAlign: 'center',
        color: '#333',
    },
});
