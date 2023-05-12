import React from 'react';

import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Footer from '../components/Footer';

export default function VerifyAttendee({navigation}) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              style={styles.backIcon}
              source={require('../assets/icons/back-arrow.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Verify Attendee</Text>
          <View style={styles.emptyView} />
        </View>

        <View style={styles.progressbarWrapper}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.image}
              source={require('../assets/icons/checked.svg')}
            />
            <Text style={styles.title}>Event</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image
              style={styles.image}
              source={require('../assets/icons/unchecked.svg')}
            />
            <Text style={styles.title}>Scan</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image
              style={styles.image}
              source={require('../assets/icons/unchecked.svg')}
            />
            <Text style={styles.title}>Success</Text>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <Footer></Footer>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0C0D',
  },
  headerContainer: {
    paddingHorizontal: 32,
    paddingVertical: 64,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    height: 20,
    width: 12,
    marginRight: 12,
  },
  emptyView: {
    width: 12,
  },
  progressbarWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 20,
    width: 20,
    marginRight: 12,
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    fontWeight: 600,
    fontFamily: 'NexaBold',
    textAlign: 'center',
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
