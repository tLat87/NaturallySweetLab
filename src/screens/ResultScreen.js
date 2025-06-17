import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {unlockAchievement} from "../redux/slices/achievementsSlice";

export default function ResultScreen({ navigation }) {
    const handleStart = () => {
        // navigation.navigate('GameScreen');
    };

    const dispatch = useDispatch();
    const achievements = useSelector(state => state.achievements.achievements);

    useEffect(() => {
        const id = 4;
        if (!achievements.includes(id)) {
            dispatch(unlockAchievement(id));
            console.log(`🎉 Achievement unlocked: ${id}`);
        }
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Fruit Curious</Text>
                <Image source={require('../assets/img/20250506_16557bkpd0vb81vmga1.png')} style={{alignSelf: 'center'}} />
                <Text style={styles.text}>
                    No worries — every sweet journey begins with a small bite!
                </Text>

            </View>
            <TouchableOpacity onPress={()=>{navigation.pop(2)}}>
                <Image
                    source={require('../assets/img/Groupfqwf.png')}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f012a9',
        justifyContent: 'center',
        alignItems: 'center',
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
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Alegreya',
        color: '#4b0082',
        textAlign: 'center',
        marginBottom: 15,
    },
    text: {
        fontSize: 26,
        color: '#4b0082',
        fontFamily: 'Alegreya',
        marginBottom: 8,
        textAlign: 'center',
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
