import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ShareLib from 'react-native-share';
import {useDispatch, useSelector} from "react-redux";
import {unlockAchievement} from "../redux/slices/achievementsSlice";

const FruitMoreScreen = ({ route }) => {
    const { item } = route.params;

    const dispatch = useDispatch();
    const achievements = useSelector(state => state.achievements.achievements);

    useEffect(() => {
        const id = 1;
        if (!achievements.includes(id)) {
            dispatch(unlockAchievement(id));
            console.log(`🎉 Achievement unlocked: ${id}`);
        }
    }, [item]);

    const handleShare = async () => {
        try {
            await ShareLib.open({
                title: item.title,
                message: `${item.emoji} ${item.title}\n\n${item.subtitle}\n\n${item.description}\n\n${item.prompt} ${item.action}`,
            });
        } catch (error) {
            console.log('Share error:', error);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                {item.img && (
                    <View style={styles.imageRow}>
                        <Image source={item.img} style={styles.image} />
                    </View>
                )}

                <Text style={styles.emoji}>{item.emoji}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.prompt}>{item.prompt}</Text>
                <Text style={styles.action}>{item.action}</Text>
            </View>

            <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
                <Text style={styles.shareText}>Share</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default FruitMoreScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F053C4',
        paddingVertical: 60,
        // alignItems: 'center',
        paddingHorizontal: 16,
    },
    card: {
        backgroundColor: '#FFC727',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#9B4FC7',
        width: '100%',
    },
    imageRow: {
        flexDirection: 'row',
        marginBottom: 12
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 8,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    emoji: {
        fontSize: 32,
        marginBottom: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#3B0A45',
        fontFamily: 'Alegreya',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#5E2A84',
        fontFamily: 'Alegreya',
        textAlign: 'center',
        marginBottom: 12,
    },
    description: {
        fontSize: 16,
        color: '#3B0A45',
        textAlign: 'center',
        marginBottom: 16,
        fontFamily: 'Alegreya',
    },
    prompt: {
        fontSize: 16,
        color: '#3B0A45',
        fontWeight: '600',
        marginBottom: 4,
        fontFamily: 'Alegreya',
    },
    action: {
        fontSize: 16,
        color: '#6A1B9A',
        fontWeight: 'bold',
        fontFamily: 'Alegreya',
    },
    shareButton: {
        backgroundColor: '#00C853',
        alignItems: 'center',
        paddingVertical: 12,
        marginTop: 20,
        paddingHorizontal: 24,
        borderRadius: 8
    },
    shareText: {
        color: '#fff',
        fontSize: 16
    }
});
