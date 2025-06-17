import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import MainTabNavigator from "./src/navigation/MainTabNavigator";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import GameScreen from "./src/screens/GameScreen";
import ResultScreen from "./src/screens/ResultScreen";
import ComparisonScreen from "./src/screens/ComparisonScreen";
import FruitMoreScreen from "./src/screens/FruitMoreScreen";
// import WelcomeScreen from "./src/screens/WelcomeScreen";
const Stack = createStackNavigator();

const Left = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
        </TouchableOpacity>
    )
}

export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerLeft: Left, headerStyle: { backgroundColor: '#360013' },
                        headerTitleStyle: {
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 24,
                        },
                    }}>
                        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="MainTab" component={MainTabNavigator} options={{ headerShown: false }} />
                        <Stack.Screen name="GameScreen" component={GameScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="ComparisonScreen" component={ComparisonScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="FruitMoreScreen" component={FruitMoreScreen} options={{ headerShown: false }} />

                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}
