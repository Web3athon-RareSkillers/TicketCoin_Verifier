import React, {useState} from 'react';

import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import SearchBar from '../components/SearchBar';
import CarouselComponent from '../components/CarouselComponent';
import RoundedButton from '../components/roundedButton';
import Footer from '../components/Footer';

export default function Home({navigation}) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearchInputChange = text => {
    console.log('Input value:', text);
  };

  // MOCK DATA FOR FEATURED EVENTS
  const featuredEventsSliderData = [
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
    {
      id: 4,
      title: 'Gretan Van Fleet',
      image: require('../assets/images/gretan-van-fleet.png'),
    },
  ];

  // MOCK DATA FOR ALL EVENTS
  const allEventsSliderData = [
    {
      id: 1,
      subTitle: 'Ed Sheeran',
      eventCounter: '123 Events',
      image: require('../assets/images/ed-sheeran.png'),
    },
    {
      id: 2,
      subTitle: 'Super Bowl',
      eventCounter: '1 Event',
      image: require('../assets/images/super-bowl.png'),
    },
    {
      id: 3,
      subTitle: 'Beyonce',
      eventCounter: '109 Events',
      image: require('../assets/images/beyonce.png'),
    },
    {
      id: 4,
      subTitle: 'Gretan Van Fleet',
      eventCounter: '87 Events',
      image: require('../assets/images/gretan-van-fleet.png'),
    },
  ];
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
          <Col sm={12}>
            <Row size={12} style={styles.headerWrap}>
              <Text>
                <View style={styles.headerContainer}>
                  <Image
                    style={styles.logo}
                    source={require('../assets/images/logo_mini.png')}
                  />
                  <Text style={styles.ticketcoinText}>Ticketcoin</Text>
                </View>
              </Text>
            </Row>
            <Row size={12} style={styles.searchBarRow}>
              <View>
                <SearchBar onInputChange={handleSearchInputChange}></SearchBar>
              </View>
            </Row>
            <Row size={12} style={styles.titleRow}>
              <Text style={styles.featuredEventText}>Featured Event</Text>
            </Row>
            <Row size={12} style={styles.carouselRow}>
              <CarouselComponent
                data={featuredEventsSliderData}></CarouselComponent>
            </Row>
            <Row size={12} style={styles.secondTitleRow}>
              <Text style={styles.eventsText}>Events</Text>
            </Row>
            <Row size={12} style={styles.categoryRow}>
              <View style={styles.categoryContainer}>
                <TouchableOpacity onPress={() => setSelectedCategory('All')}>
                  <Text
                    style={
                      selectedCategory === 'All'
                        ? styles.selectedCategoryText
                        : styles.unselectedCategoryText
                    }>
                    All
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedCategory('Sport')}>
                  <Text
                    style={
                      selectedCategory === 'Sport'
                        ? styles.selectedCategoryText
                        : styles.unselectedCategoryText
                    }>
                    Sport
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedCategory('Music')}>
                  <Text
                    style={
                      selectedCategory === 'Music'
                        ? styles.selectedCategoryText
                        : styles.unselectedCategoryText
                    }>
                    Music
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedCategory('Art')}>
                  <Text
                    style={
                      selectedCategory === 'Art'
                        ? styles.selectedCategoryText
                        : styles.unselectedCategoryText
                    }>
                    Art
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedCategory('Food')}>
                  <Text
                    style={
                      selectedCategory === 'Food'
                        ? styles.selectedCategoryText
                        : styles.unselectedCategoryText
                    }>
                    Food
                  </Text>
                </TouchableOpacity>
              </View>
            </Row>
            <Row size={12} style={styles.carouselRow}>
              <CarouselComponent data={allEventsSliderData}></CarouselComponent>
            </Row>
          </Col>
        </View>
        <View style={styles.floatingContainer}>
          <RoundedButton
            onPress={() => navigation.navigate('VerifyAttendee')}
            subTitle={'+   Verify Attendee'}
          />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Footer></Footer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#0C0C0D',
  },
  innerContainer: {
    padding: 16,
    flexDirection: 'row',
    flex: 1,
    position: 'absolute',
  },
  logo: {
    height: 20,
    width: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ticketcoinText: {
    color: 'white',
    fontFamily: 'NexaBold',
    paddingLeft: 8,
  },
  headerWrap: {
    marginBottom: 32,
    marginTop: 48,
  },
  searchBarRow: {
    marginBottom: 16,
  },
  titleRow: {
    marginBottom: 12,
  },
  carouselRow: {
    marginBottom: 16,
  },
  secondTitleRow: {
    marginBottom: 12,
  },
  categoryRow: {
    marginBottom: 12,
  },
  featuredEventText: {
    color: 'white',
    fontFamily: 'NexaBold',
    fontSize: 18,
  },
  eventsText: {
    color: 'white',
    fontFamily: 'NexaBold',
    fontSize: 18,
  },
  categoryContainer: {
    flexDirection: 'row',
    flex: 1,
    rowGap: 8,
  },
  selectedCategoryText: {
    color: 'white',
    fontFamily: 'NexaBold',
    fontSize: 12,
    marginRight: 12,
  },
  unselectedCategoryText: {
    color: '#999999',
    fontFamily: 'NexaLight',
    fontSize: 12,
    marginRight: 12,
  },
  floatingContainer: {
    position: 'absolute',
    width: 160,
    bottom: 120,
    right: 16,
  },
  footerContainer: {
    height: 80,
    position: 'absolute',
    bottom: 0,
    flex: 1,
    right: 0,
    left: 0,
  },
});
