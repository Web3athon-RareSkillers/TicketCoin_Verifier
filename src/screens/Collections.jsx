import React from 'react';

import {Image, StyleSheet, View, Text} from 'react-native';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import SearchBar from '../components/SearchBar';
import RoundedButton from '../components/roundedButton';
import Footer from '../components/Footer';

export default function Collections({navigation}) {
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
                  <Image
                    style={{height: 20, width: 20}}
                    source={require('../assets/images/logo_mini.png')}
                  />
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
                Collections
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
                    color: '#999999',
                    fontFamily: 'NexaLight',
                    fontSize: 12,
                    marginRight: 12,
                  }}>
                  Sport
                </Text>
                <Text
                  style={{
                    color: '#999999',
                    fontFamily: 'NexaLight',
                    fontSize: 12,
                    marginRight: 12,
                  }}>
                  Music
                </Text>
                <Text
                  style={{
                    color: '#999999',
                    fontFamily: 'NexaLight',
                    fontSize: 12,
                    marginRight: 12,
                  }}>
                  Art
                </Text>
                <Text
                  style={{
                    color: '#999999',
                    fontFamily: 'NexaLight',
                    fontSize: 12,
                  }}>
                  Food
                </Text>
              </View>
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
