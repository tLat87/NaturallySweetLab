import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View, Text, Image, StyleSheet, Settings, ImageBackground} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from "../screens/SettingsScreen";
import QuizStartScreen from "../screens/QuizStartScreen";
import FruitVsCandy from "../screens/FruitVsCandy";
import AchievementsScreen from "../screens/Achievements";

const Tab = createBottomTabNavigator();

const TabIcon = ({ iconSource }) => (
    <ImageBackground source={require('../assets/img/NaturallyweetLab4/Frame31.png')} style={styles.tabItem} resizeMode='stretch'>
        <Image source={iconSource} style={styles.icon} />
    </ImageBackground>
);

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 40,
                    left: 20,
                    right: 20,
                    borderRadius: 50,
                    width: '90%',
                    marginLeft: '5%',
                    backgroundColor: '#FFC727',
                    height: 80,
                    borderWidth: 3,
                    borderColor: '#fff',
                    paddingTop: 20,
                    paddingBottom: 8,
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.3,
                    shadowRadius: 10,
                },
                tabBarShowLabel: false,
            }}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon

                            iconSource={require('../assets/img/NaturallyweetLab4/Watermelon.png')}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="FruitVsCandy"
                component={FruitVsCandy}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon

                            iconSource={require('../assets/img/NaturallyweetLab4/Battle.png')}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="AchievementsScreen"
                component={AchievementsScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon

                            iconSource={require('../assets/img/NaturallyweetLab4/84ac723d89c3a30f4c30d58441ad1bc30f9a3570.png')}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="QuizStartScreen"
                component={QuizStartScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                    <TabIcon

                        iconSource={require('../assets/img/NaturallyweetLab4/Quiz.png')}
                    />
                    ),
                }}
            />

            {/*<Tab.Screen*/}
            {/*    name="Settings"*/}
            {/*    component={SettingsScreen}*/}
            {/*    options={{*/}
            {/*        tabBarIcon: ({ focused }) => (*/}
            {/*            <TabIcon*/}

            {/*                iconSource={require('../assets/img/NaturallyweetLab4/Group84.png')}*/}
            {/*            />*/}
            {/*        ),*/}
            {/*    }}*/}
            {/*/>*/}

            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                    <TabIcon

                        iconSource={require('../assets/img/NaturallyweetLab4/Group84.png')}
                    />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width:50,
        height:50,
        // padding: 20,
    },
    icon: {
        width: 24,
        height: 24,
        marginTop: -10,
        resizeMode: 'contain',
    },

});

export default MainTabNavigator;
