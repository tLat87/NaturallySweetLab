import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    Dimensions,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_SIZE = width / 2 - 30; // 2 столбца + отступы



const fruits = [
//     {
//         img: require('../assets/img/main/908b40051332c94baacd717c6cfd503831b3d9a7.png'),
//         emoji: '📄',
//         title: 'Dried Mango',
//         subtitle: 'Tropical sweetness, no wrapper needed',
//         description: `With its chewy texture and sunshine flavor, dried mango is a favorite for a reason. Naturally sweet and satisfying, it feels like candy — but it’s actually a powerhouse of vitamin A, helping keep your skin and eyes healthy.
//
// This tropical fruit is more than just a treat. Its bright orange color hints at the antioxidants inside, working behind the scenes to support immunity and cell repair. And thanks to its natural sugars and fiber, it gives lasting energy without the sugar crash.
//
// Forget artificial chews and added colorants — mango delivers nature’s candy, straight from the tree.`,
//         prompt: '👉 Curious how it compares to chewy gummies?',
//         action: 'Tap to view the battle',
//     },
    {
        img: require('../assets/img/main/www.png'),
        emoji: '📄',
        title: 'Dates',
        subtitle: 'Sticky, sweet, and full of good stuff',
        description: `At first bite, a date feels just like caramel — soft, sticky, and super sweet. But behind that toffee-like taste is a fruit packed with fiber, potassium, and slow-release energy.

Dates are nature’s dessert. They’re perfect on their own or stuffed with nuts, but even solo, they satisfy like no candy ever could. While sugary toffees give a quick high and a crash, dates keep you going, naturally.

Craving something indulgent? Reach for a date and feel the difference.`,
        prompt: '👉 Want to compare them to toffees?',
        action: 'Tap to view the battle',
    },
    {
        img: require('../assets/img/main/wqfwqf.png'),

        emoji: '📄',
        title: 'Dried Pineapple',
        subtitle: 'Bright, tangy, and bursting with tropical energy',
        description: `One bite of dried pineapple and you're instantly on vacation. It’s bold, juicy, and sweet — just like a lollipop, only real. Behind the tropical zing is a boost of vitamin C to power your immune system and lift your mood.

Dried pineapple isn’t shy about flavor, and that’s what makes it such a fun swap. You get all the candy-like sweetness with none of the artificial syrups or dyes.

Lollipops may look fun — but this fruit snack comes with real benefits, and it doesn’t stick to your teeth.`,
        prompt: '👉 Ready for a showdown?',
        action: 'Tap to view the battle',
    },
    {
        img: require('../assets/img/main/ffff.png'),
        emoji: '📄',
        title: 'Dried Apples',
        subtitle: 'Crunchy, cozy, and naturally sweet',
        description: `Dried apples taste like autumn in a bite — sweet, slightly tangy, and satisfyingly chewy or crispy, depending on the slice. They’re packed with fiber and a hint of vitamin C, making them a snack that’s as good for your body as it is for your cravings.

Unlike sugary snack bars loaded with preservatives, dried apples keep things simple. Just one ingredient, naturally sweet — no syrup needed.

They’re perfect for school lunches, afternoon pick-me-ups, or late-night munchies. Real fruit, real flavor, no fuss.`,
        prompt: '👉 Wonder how they stack up against snack bars?',
        action: 'Tap to view the battle',
    },
    {
        img: require('../assets/img/main/fwqfqwfqwf.png'),
        emoji: '📄',
        title: 'Dried Figs',
        subtitle: 'Soft, sweet, and full of tiny surprises',
        description: `Dried figs are like nature’s candy truffles — rich, chewy, and full of delicate crunch from their tiny seeds. With a deep sweetness and a touch of earthiness, they feel indulgent but are actually full of fiber, calcium, and antioxidants.

Figs have been a luxury snack for centuries, and for good reason. They help support digestion and bone health while giving you that sweet, satisfying bite you crave.

So next time you reach for chocolate truffles… maybe try a fig instead.`,
        prompt: '👉 Curious how they compare to fancy treats?',
        action: 'Tap to view the battle',
    },
    {
        img: require('../assets/img/main/q.png'),
        emoji: '📄',
        title: 'Dried Bananas',
        subtitle: 'Creamy, sweet, and totally comforting',
        description: `Dried bananas are like little banana chips of joy — naturally sweet and full of mellow, comforting flavor. Their soft texture and creamy taste make them a perfect match for milk chocolate cravings.

But unlike chocolate bars, these slices are rich in potassium and fiber, and they give you long-lasting energy instead of a sugar crash.

They’re a smart snack for busy days, study sessions, or just a quiet moment with something sweet.`,
        prompt: '👉 Banana vs chocolate — who wins?',
        action: 'Tap to view the battle',
    },
];


const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Fruits</Text>
            <FlatList
                data={fruits}
                keyExtractor={(_, index) => index.toString()}
                numColumns={2}
                contentContainerStyle={styles.grid}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {navigation.navigate('FruitMoreScreen', {item})}}>
                        <ImageBackground source={require('../assets/img/Buttonrrr.png')} style={styles.itemContainer}>
                            <Image source={item.img} style={styles.image} resizeMode="contain" />
                        </ImageBackground>
                    </TouchableOpacity>
                )}
                ListFooterComponent={<View style={{ marginBottom: 150 }} />}
            />

        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f52891', // ярко-розовый фон
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3b0a18',
        fontFamily: 'Alegreya',
        textAlign: 'center',
        marginVertical: 20,
    },
    grid: {
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    itemContainer: {
        width: ITEM_SIZE,
        height: ITEM_SIZE,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: ITEM_SIZE - 10,
        height: ITEM_SIZE - 10,
    },
});
