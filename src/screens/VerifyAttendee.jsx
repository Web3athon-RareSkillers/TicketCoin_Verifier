import React from 'react';

import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import RoundedButton from '../components/roundedButton';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';
import InputField from '../components/InputField';
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function VerifyAttendee({navigation}) {
  const handleDropdownSelect = option => {
    console.log('Selected option:', option);
  };

  const handleInputChange = text => {
    console.log('Input value:', text);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.backIcon}
              source={require('../assets/icons/back-arrow.png')}
            />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Verify Attendee</Text>
          </View>
          <View style={styles.emptyView} />
        </View>

        <View style={styles.progressbarWrapper}>
          <View style={styles.iconContainer}>
            <Image
              style={[styles.checkIcon, styles.brightIcon]}
              source={require('../assets/icons/unchecked.png')}
            />
            <Text style={[styles.iconText, styles.textActive]}>Event</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image
              style={styles.checkIcon}
              source={require('../assets/icons/unchecked.png')}
            />
            <Text style={[styles.iconText, styles.textInactive]}>Scan</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image
              style={styles.checkIcon}
              source={require('../assets/icons/unchecked.png')}
            />
            <Text style={[styles.iconText, styles.textInactive]}>Success</Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            flex: 1,
            marginBottom: 16,
            maxHeight: 104,
            zIndex: 2,
          }}>
          <Text style={styles.inputTitle}>Event Category</Text>
          <Dropdown
            options={['All', 'Sport', 'Music', 'Art', 'Food']}
            onSelect={handleDropdownSelect}
            dropdownPlaceholder="All"
          />
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            flex: 1,
            marginBottom: 16,
            maxHeight: 104,
            zIndex: 1,
          }}>
          <Text style={styles.inputTitle}>Event Name</Text>
          <InputField
            onInputChange={handleInputChange}
            placeholderText={'Type event name here'}
          />
        </View>
        <View style={styles.buttonContainer}>
          <RoundedButton
            onPress={() => navigation.navigate()}
            title={'Proceed to scan    >> '}
          />
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
    paddingHorizontal: 16,
    paddingVertical: 64,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
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
    marginBottom: 80,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkIcon: {
    marginRight: 12,
    opacity: 0.5,
  },
  brightIcon: {
    opacity: 1,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'NexaBold',
    textAlign: 'center',
  },
  inputTitle: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'NexaBold',
    textAlign: 'left',
    paddingBottom: 4,
  },
  iconText: {
    fontSize: 12,
    fontFamily: 'NexaBold',
    textAlign: 'center',
  },
  textInactive: {
    color: '#999999',
  },
  textActive: {
    color: 'white',
  },
  buttonsWrap: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxHeight: 220,
  },
  buttonContainer: {
    flex: 1,
    width: SCREEN_WIDTH,
    paddingHorizontal: 16,
    maxHeight: 52,
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
