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
import RoundedButton from '../components/roundedButton';
const SCREEN_WIDTH = Dimensions.get('window').width;

function SplashScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />

      <View style={styles.contentContainer}>
        <ImageBackground
          source={require('../assets/images/home_bg.png')}
          style={styles.backgroundImage}
        />

        <View style={styles.absoluteContainer}>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/images/logo_mini.png')} />
            <Text style={styles.logoText}>Ticketcoin</Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Secure event tickets using{' '}
              <Text style={styles.highlightedText}>Blockchain</Text>
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <RoundedButton
              onPress={() => navigation.navigate('Onboard')}
              title={'Start Experience    >>'}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  absoluteContainer: {
    padding: 16,
    flexDirection: 'column',
    flex: 1,
    position: 'absolute',
  },
  logoContainer: {
    marginBottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    color: 'white',
    fontFamily: 'NexaBold',
    paddingLeft: 8,
  },
  titleContainer: {
    marginBottom: 32,
  },
  title: {
    color: 'white',
    fontFamily: 'NexaBold',
    fontSize: 32,
  },
  highlightedText: {
    color: '#7B4ACD',
    fontFamily: 'NexaBold',
    fontSize: 32,
  },
  buttonContainer: {
    marginBottom: 48,
    flex: 1,
    justifyContent: 'center',
    width: SCREEN_WIDTH - 32,
  },
});

export default SplashScreen;
