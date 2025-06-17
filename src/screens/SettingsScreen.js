import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, Alert} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import ShareLib from "react-native-share";
import {resetAchievements, unlockAchievement} from "../redux/slices/achievementsSlice";

const SettingsScreen = () => {
    const dispatch = useDispatch();
    const achievements = useSelector(state => state.achievements.achievements);

    const handleShareApp = async () => {
        try {
            await ShareLib.open({
                title: 'Check out this fruit app!',
                message: 'I’m using this awesome fruit quiz app 🍍🥭🍇 – check it out!',
                // url: 'https://example.com',
            });

            if (!achievements.includes(5)) {
                dispatch(unlockAchievement(5));
                Alert.alert('🎉 Achievement unlocked!', 'You shared the app!');
            }

        } catch (error) {
            console.log('Share error:', error);
        }
    };

    const handleClearAchievements = () => {
        Alert.alert(
            'Reset achievements',
            'Are you sure you want to clear all achievements?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Clear', style: 'destructive', onPress: () => dispatch(resetAchievements()) },
            ]
        );
    };


    return (
        <View style={styles.container}>
            <View style={styles.card}>
                {/*<SettingItem label="Vibration" icon={require('../assets/img/PhoneVibration.png')} />*/}
                <SettingItem
                    label="Clear\nachievements"
                    icon={require('../assets/img/Eraser.png')}
                    onPress={handleClearAchievements}
                />

                <SettingItem label="Share the app" icon={require('../assets/img/TelegramApp.png')} onPress={handleShareApp} />
            </View>
        </View>
    );
};

const SettingItem = ({ label, icon, onPress }) => (
    <View style={styles.itemContainer}>
        <Text style={styles.label}>{label}</Text>
        <ImageBackground source={require('../assets/img/Square.png')} resizeMode='contain' style={{ justifyContent: 'center', height: 60, width: 70 }}>
            <TouchableOpacity onPress={onPress}>
                <Image source={icon} style={styles.icon} />
            </TouchableOpacity>
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26D4CD',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#FFC627',
        borderRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 25,
        width: '85%',
        elevation: 5,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
    },
    label: {
        fontSize: 22,
        fontFamily: 'Alegreya',
        fontWeight: 'bold',
        color: '#3D0C02',
        flex: 1,
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginLeft: 15,
    },
});

export default SettingsScreen;
