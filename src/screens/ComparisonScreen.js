import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import ShareLib from 'react-native-share';
import {useDispatch, useSelector} from "react-redux";
import {unlockAchievement} from "../redux/slices/achievementsSlice";

const ComparisonScreen = ({ route }) => {
    const { imageFruit, imageSweet, emoji, title, options, winner } = route.params;

    const dispatch = useDispatch();
    const achievements = useSelector(state => state.achievements.achievements);

    useEffect(() => {
        const id = 2;
        if (!achievements.includes(id)) {
            dispatch(unlockAchievement(id));
            console.log(`🎉 Achievement unlocked: ${id}`);
        }
    }, []);

    const handleShare = async () => {
        try {
            const shareOptions = {
                message: `Product Comparison:

${title}

${emoji} ${options.first.name}:

Sugar: ${options.first.sugar}
Fiber: ${options.first.fiber}
Vitamins: ${options.first.vitamins.join(', ')}
Coloring: ${options.first.coloring}
Stickiness: ${options.first.stickiness}

🍭 ${options.second.name}:

Sugar: ${options.second.sugar}
Fiber: ${options.second.fiber}
Vitamins: ${options.second.vitamins.join(', ')}
Coloring: ${options.second.coloring}
Stickiness: ${options.second.stickiness}

🏆 Winner: ${winner}
`
            };
            await ShareLib.open(shareOptions);
        } catch (error) {
            console.log('Error while trying to share:', error);
        }
    };


    return (
        <ScrollView style={styles.container}>
            <View style={{backgroundColor: '#FFC727', justifyContent: 'center', alignItems: 'center', padding: 30, borderRadius: 30, borderWidth: 2, borderColor: '#9B4FC7'}}>
                <View style={styles.imageRow}>
                    <Image source={imageFruit} style={styles.image} />
                    <Image source={imageSweet} style={styles.image} />
                </View>

                <Text style={styles.title}>{title}</Text>

                <View style={styles.comparisonBlock}>
                    <View style={styles.column}>
                        <Text>{emoji} {options.first.name}</Text>
                        <Text>Sugar: {options.first.sugar}</Text>
                        <Text>Fiber: {options.first.fiber}</Text>
                        <Text>Vitamins: {options.first.vitamins.join(', ')}</Text>
                        <Text>Coloring: {options.first.coloring}</Text>
                        <Text>Stickiness: {options.first.stickiness}</Text>
                    </View>

                    <View style={styles.column}>
                        <Text>🍭 {options.second.name}</Text>
                        <Text>Sugar: {options.second.sugar}</Text>
                        <Text>Fiber: {options.second.fiber}</Text>
                        <Text>Vitamins: {options.second.vitamins.join(', ')}</Text>
                        <Text>Coloring: {options.second.coloring}</Text>
                        <Text>Stickiness: {options.second.stickiness}</Text>
                    </View>

                </View>

                <View style={styles.winnerBlock}>
                    <Text style={styles.trophy}>🏆</Text>
                    <Text style={styles.winnerText}>{winner}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
                <Text style={styles.shareText}>Share</Text>
            </TouchableOpacity>
            <View style={{marginBottom: 130}}/>
        </ScrollView>
    );
};

export default ComparisonScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F053C4',
        paddingTop: 100,
        // alignItems: 'center',
        padding: 16
    },
    imageRow: {
        flexDirection: 'row',
        marginBottom: 12
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 8,
        marginHorizontal: 8,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#3B0A45',
        marginBottom: 16,
        fontFamily: 'Alegreya',
    },
    comparisonBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 24
    },
    column: {
        width: '48%'
    },
    winnerBlock: {
        alignItems: 'center',
        marginBottom: 20
    },
    trophy: {
        fontSize: 40
    },
    winnerText: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'Alegreya',
    },
    shareButton: {
        backgroundColor: '#00C853',
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 24,
        borderRadius: 8
    },
    shareText: {
        color: '#fff',
        fontSize: 16
    }
});
