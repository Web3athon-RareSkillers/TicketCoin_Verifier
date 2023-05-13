import React from 'react';

import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import RoundedButton from '../components/roundedButton';
const SCREEN_WIDTH = Dimensions.get('window').width;

function SplashScreen({navigation}) {
  return (
    <>
      <SafeAreaView>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </SafeAreaView>

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <ImageBackground
          source={require('../assets/images/home_bg.png')}
          style={styles.backgroundImage}
        />

        <View
          style={{
            padding: 16,
            flexDirection: 'column',
            flex: 1,
            position: 'absolute',
          }}>
          <View style={{marginBottom: 32}}>
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
          </View>

          <View style={{marginBottom: 32}}>
            <Text
              style={{color: 'white', fontFamily: 'NexaBold', fontSize: 32}}>
              Secure event tickets using{''}
              <Text
                style={{
                  color: '#7B4ACD',
                  fontFamily: 'NexaBold',
                  fontSize: 32,
                }}>
                {' '}
                Blockchain
              </Text>
            </Text>
          </View>
          <View
            style={{
              marginBottom: 48,
              flex: 1,
              justifyContent: 'center',
              width: SCREEN_WIDTH - 32,
            }}>
            <RoundedButton
              onPress={() => navigation.navigate('Onboard')}
              title={'Start Experience    >>'}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default SplashScreen;
