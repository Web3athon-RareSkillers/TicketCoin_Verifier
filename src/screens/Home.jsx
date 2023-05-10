import React from 'react';

import {Image, StyleSheet, View, Text} from 'react-native';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import SearchBar from '../components/searchBar';
import CarouselComponent from '../components/CarouselComponent';
import RoundedButton from '../components/roundedButton';
// import Footer from '../components/Footer';

export default function Home() {
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
      <View style={{flex: 1, backgroundColor: '#0C0C0D'}}>
        <View
          style={{
            padding: 16,
            flexDirection: 'row',
            flex: 1,
            position: 'absolute',
          }}>
          <Col sm={12}>
            <Row size={12} style={{marginBottom: 32, marginTop: 48}}>
              <Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image source={require('../assets/images/logo_mini.png')} />
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'NexaBold',
                      paddingLeft: 8,
                    }}>
                    Ticketcoin
                  </Text>
                </View>
              </Text>
            </Row>

            <Row size={12} style={{marginBottom: 16}}>
              <SearchBar></SearchBar>
            </Row>
            <Row size={12} style={{marginBottom: 12}}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'NexaBold',
                  fontSize: 18,
                }}>
                Featured Event
              </Text>
            </Row>
            <Row size={12} style={{marginBottom: 12}}>
              <CarouselComponent
                data={featuredEventsSliderData}></CarouselComponent>
            </Row>
            <Row size={12} style={{marginBottom: 12}}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'NexaBold',
                  fontSize: 18,
                }}>
                Events
              </Text>
            </Row>
            <Row size={12} style={{marginBottom: 12}}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  rowGap: 8,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'NexaLight',
                    fontSize: 12,
                    marginRight: 12,
                  }}>
                  All
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'NexaLight',
                    fontSize: 12,
                    marginRight: 12,
                  }}>
                  Sport
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'NexaLight',
                    fontSize: 12,
                    marginRight: 12,
                  }}>
                  Music
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'NexaLight',
                    fontSize: 12,
                    marginRight: 12,
                  }}>
                  Art
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'NexaLight',
                    fontSize: 12,
                  }}>
                  Food
                </Text>
              </View>
            </Row>
            <Row size={12} style={{marginBottom: 16}}>
              <CarouselComponent data={allEventsSliderData}></CarouselComponent>
            </Row>
          </Col>
        </View>
        <View style={styles.floatingContainer}>
          <RoundedButton
            onPress={() => navigation.navigate('Verify')}
            subTitle={'+   Verify Attendee'}
          />
        </View>
        {/* <View style={styles.footerContainer}>
          <Footer></Footer>
        </View> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  floatingContainer: {
    position: 'absolute',
    width: 160,
    bottom: 120,
    right: 16,
  },
  footerContainer: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    height: 80,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
});
