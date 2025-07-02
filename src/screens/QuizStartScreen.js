import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';

export default function QuizStartScreen({ navigation }) {
    const handleStart = () => {
        navigation.navigate('GameScreen');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Welcome to the Sweet Swap Quiz!</Text>
                <Text style={styles.text}>
                    Let’s see how well you know your healthy ingredient swaps!
                </Text>
                <Text style={styles.text}>
                    Each question has three answer choices — choose the one you think is the best match.
                </Text>
                <Text style={styles.text}>Here’s how answers are scored:</Text>
                <Text style={styles.text}>{'\u2022'} Best match = 3 points</Text>
                <Text style={styles.text}>{'\u2022'} Good match = 1 point</Text>
                <Text style={styles.text}>{'\u2022'} Not suitable = 0 points</Text>
            </View>
            <TouchableOpacity onPress={handleStart} styles={{}} >
                <Image
                    source={require('../assets/img/ButtonText.png')}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <View style={{marginBottom: 130}}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f012a9',
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: '#ffcc33',
        borderRadius: 20,
        padding: 20,
        borderWidth: 3,
        borderColor: '#fff',
        marginBottom: 40,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#4b0082',
        textAlign: 'center',
        fontFamily: 'Alegreya',
        marginBottom: 15,
    },
    text: {
        fontSize: 18,
        color: '#4b0082',
        fontFamily: 'Alegreya',
        marginBottom: 8,
    },
    button: {
        backgroundColor: '#ffcc00',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 4,
    },
    buttonText: {
        fontSize: 20,
        color: '#4b0082',
        fontWeight: 'bold',
    },
});
