import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardPill: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const data = [
  {
    id: 1,
    title: 'Ed Sheeran',
    image: require('../assets/images/ed-sheeran.png'),
  },
  {
    id: 2,
    title: 'Super Bowl',
    image: require('../assets/images/super-bowl.png'),
  },
  {
    id: 3,
    title: 'Beyonce',
    image: require('../assets/images/beyonce.png'),
  },
];

const CarouselComponent = () => {
  const renderCard = ({item}) => {
    return (
      <View style={styles.cardContainer}>
        <Image style={styles.cardImage} source={item.image} />
        <View style={styles.cardPill}>
          <Text style={styles.cardText}>{item.title}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderCard}
        sliderWidth={300}
        itemWidth={250}
        loop
      />
    </View>
  );
};

export default CarouselComponent;
