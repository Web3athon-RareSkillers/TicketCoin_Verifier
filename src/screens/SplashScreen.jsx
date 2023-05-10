import React from 'react';

import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  View,
  Text,
} from 'react-native';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import RoundedButton from '../components/roundedButton';

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
            flexDirection: 'row',
            flex: 1,
            position: 'absolute',
          }}>
          <Col sm={12}>
            <Row size={12} style={{marginBottom: 32}}>
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

            <Row size={12} style={{marginBottom: 32}}>
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
            </Row>
            <Row size={12} style={{marginBottom: 48}}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <RoundedButton
                  onPress={() => navigation.navigate('Onboard')}
                  title={'Start Experience    >>'}
                />
              </View>
            </Row>
          </Col>
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
