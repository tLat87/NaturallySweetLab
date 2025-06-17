import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {unlockAchievement} from "../redux/slices/achievementsSlice";

const WelcomeScreen = ({ navigation }) => {
    const [step, setStep] = useState(0);

    const steps = [
        {
            backgroundColor: '#f52891',
            title: 'Welcome to\nNaturally Sweet Lab!',
            description: 'Discover fun fruit facts, explore sweet swaps, and enjoy playful learning.\nNo locked content — just colorful, bite-sized knowledge.',
        },
        {
            backgroundColor: '#ffb347',
            title: 'Fruits Can Be Fun!',
            description: 'Swap sugar for nature’s candy.\nLet’s learn how tasty and healthy can go together!',
        },
        {
            backgroundColor: '#87ceeb',
            title: 'Snack Smarter!',
            description: 'We’ll show you fun fruit facts and tips\nthat make better snacking easy.',
        },
    ];

    const handlePress = () => {
        if (step < 2) {
            setStep(step + 1);
        } else {
            navigation.navigate('MainTab');
        }
    };

    const dispatch = useDispatch();
    const achievements = useSelector(state => state.achievements.achievements);

    useEffect(() => {
        const id = 6;
        if (!achievements.includes(id)) {
            dispatch(unlockAchievement(id));
            console.log(`🎉 Achievement unlocked: ${id}`);
        }
    }, []);

    return (
        <View style={[styles.container, { backgroundColor: steps[step].backgroundColor }]}>
            <Text style={styles.title}>{steps[step].title}</Text>

            <Text style={styles.description}>{steps[step].description}</Text>

            <Image
                source={require('../assets/img/3a4cdc81b11370a463754954eaf35b263c3a87c0.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <TouchableOpacity onPress={handlePress}>
                <Image
                    source={require('../assets/img/ButtonText.png')}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        color: '#3b0a18',
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'Alegreya',
        textAlign: 'center',
        marginBottom: 20,
    },
    description: {
        color: '#3b0a18',
        fontSize: 22,
        fontFamily: 'Alegreya',
        textAlign: 'center',
        marginBottom: 30,
    },
    logo: {
        width: 300,
        height: 300,
    },
});
