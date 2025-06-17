import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import {unlockAchievement} from "../redux/slices/achievementsSlice";
import achievements from "./Achievements";
import {useDispatch, useSelector} from "react-redux";

const quizData = [
    {
        emoji: '🥭',
        title: 'Dried Mango',
        question: 'Which vitamin is dried mango especially rich in?',
        options: ['Vitamin A', 'Vitamin D', 'Vitamin K'],
        answer: 'Vitamin A',
    },
    {
        emoji: '🌴',
        title: 'Dates',
        question: 'What do dates taste most like?',
        options: ['Bubble gum', 'Caramel', 'Sour candy'],
        answer: 'Caramel',
    },
    {
        emoji: '🍍',
        title: 'Dried Pineapple',
        question: 'Which tropical vitamin is found in dried pineapple?',
        options: ['Vitamin C', 'Vitamin B12', 'Vitamin D'],
        answer: 'Vitamin C',
    },
    {
        emoji: '🍏',
        title: 'Dried Apples',
        question: 'What is the main nutrient in dried apples that helps with digestion?',
        options: ['Calcium', 'Fiber', 'Protein'],
        answer: 'Fiber',
    },
    {
        emoji: '🌰',
        title: 'Dried Figs',
        question: 'What tiny surprise is inside every dried fig?',
        options: ['Chia seeds', 'Tiny jelly beans', 'Crunchy seeds'],
        answer: 'Crunchy seeds',
    },
    {
        emoji: '🍌',
        title: 'Dried Banana',
        question: 'Which mineral makes dried bananas good for energy?',
        options: ['Potassium', 'Zinc', 'Iron'],
        answer: 'Potassium',
    },
    {
        emoji: '🍒',
        title: 'Dried Cranberries',
        question: 'Which part of your body do cranberries help support?',
        options: ['Bones', 'Urinary tract', 'Teeth'],
        answer: 'Urinary tract',
    },
    {
        emoji: '🥥',
        title: 'Dried Coconut',
        question: 'What type of fat is found in dried coconut?',
        options: ['Trans fat', 'MCT (healthy fat)', 'Butter fat'],
        answer: 'MCT (healthy fat)',
    },
    {
        emoji: '🍇',
        title: 'Raisins (Dried Grapes)',
        question: 'What are raisins a natural source of?',
        options: ['Iron', 'Vitamin D', 'Caffeine'],
        answer: 'Iron',
    },
    {
        emoji: '🧡',
        title: 'Dried Papaya',
        question: 'Which nutrient gives dried papaya its orange color?',
        options: ['Vitamin B', 'Beta-carotene', 'Sugar'],
        answer: 'Beta-carotene',
    },
];

const QuizCard = ({ data, onAnswered }) => {
    const [selected, setSelected] = useState(null);

    const dispatch = useDispatch();
    const achievements = useSelector(state => state.achievements.achievements);

    useEffect(() => {
        const id = 3;
        if (!achievements.includes(id)) {
            dispatch(unlockAchievement(id));
            console.log(`🎉 Achievement unlocked: ${id}`);
        }
    }, []);

    const handlePress = (option) => {
        if (!selected) {
            setSelected(option);
            onAnswered();
        }
    };

    return (
        <View style={styles.card}>
            <Text style={styles.emoji}>{data.emoji}</Text>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.question}>{data.question}</Text>
            {data.options.map((option, index) => {
                const isCorrect = selected && option === data.answer;
                const isWrong = selected && selected === option && option !== data.answer;
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handlePress(option)}
                        style={[
                            styles.option,
                            isCorrect && styles.correct,
                            isWrong && styles.wrong,
                        ]}
                        disabled={!!selected}
                    >
                        <Text style={styles.optionText}>
                            {option} {isCorrect ? '✅' : ''}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default function GameScreen({navigation}) {
    const [answeredCount, setAnsweredCount] = useState(0);

    const handleAnswered = () => {
        const newCount = answeredCount + 1;
        setAnsweredCount(newCount);
        if (newCount === quizData.length) {
            navigation.navigate('ResultScreen');
        }
    };

    return (
        <ScrollView style={styles.container}>
            {quizData.map((item, index) => (
                <QuizCard key={index} data={item} onAnswered={handleAnswered}/>
            ))}
            <View style={{marginBottom: 50}}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: '#ff69b4',
    },
    card: {
        backgroundColor: '#75E2FF',
        margin: 10,
        borderRadius: 15,
        padding: 20,
        elevation: 3,
    },
    emoji: {
        fontSize: 30,
        textAlign: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        fontFamily: 'Alegreya',
        textAlign: 'center',
        marginVertical: 10,
    },
    question: {
        fontSize: 18,
        fontFamily: 'Alegreya',
        marginBottom: 15,
        textAlign: 'center',
    },
    option: {
        backgroundColor: '#fbd94c',
        padding: 12,
        borderRadius: 10,
        marginVertical: 5,
    },
    optionText: {
        fontFamily: 'Alegreya',
        fontSize: 18,
        textAlign: 'center',
    },
    correct: {
        backgroundColor: '#b0e57c',
    },
    wrong: {
        backgroundColor: '#d3d3d3',
    },
});
