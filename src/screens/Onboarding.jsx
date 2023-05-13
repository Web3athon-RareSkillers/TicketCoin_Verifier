import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Animated,
  Dimensions,
} from 'react-native';
import RoundedButton from '../components/roundedButton';
import TransparentButton from '../components/transparentButton';
import {useAuthorization} from '../components/AuthorizationProvider';
import {transact} from '@solana-mobile/mobile-wallet-adapter-protocol';
import {toUint8Array} from 'js-base64';
import {PublicKey} from '@solana/web3.js';
import {AuthContext} from '../../AuthContext';
import {useConnection} from '@solana/wallet-adapter-react';
const SCREEN_WIDTH = Dimensions.get('window').width;

export const APP_IDENTITY = {
  name: 'TicketCoin',
  uri: 'https://ticketcoin.com',
  icon: '../assets/images/logo_mini.png',
};

function getPublicKeyFromAddress(address) {
  const publicKeyByteArray = toUint8Array(address);
  return new PublicKey(publicKeyByteArray);
}

function convertLamportsToSOL(lamports) {
  return new Intl.NumberFormat(undefined, {maximumFractionDigits: 1}).format(
    (lamports || 0) / LAMPORTS_PER_SOL,
  );
}

function getAccountFromAuthorizedAccount(account) {
  return {
    ...account,
    publicKey: getPublicKeyFromAddress(account.address),
  };
}

function Onboarding({navigation}) {
  const {authorizeSession} = useAuthorization();
  const {connection} = useConnection();
  const [authorizationInProgress, setAuthorizationInProgress] = useState(false);
  const {user, isLoading, login, logout} = useContext(AuthContext);

  const handleConnectPress = useCallback(async () => {
    try {
      if (authorizationInProgress) {
        return;
      }
      setAuthorizationInProgress(true);
      await transact(async wallet => {
        await authorizeSession(wallet);
        navigation.navigate('Home');
      });
    } finally {
      setAuthorizationInProgress(false);
    }
  }, [authorizationInProgress, authorizeSession]);

  const skipConnection = () => {
    navigation.navigate('Home');
  };

  const handleConnectPress1 = useCallback(async () => {
    await transact(async wallet => {
      // Transact starts a session with the wallet app during which our app
      // can send actions (like `authorize`) to the wallet.
      const authResult = await wallet.authorize({
        cluster: 'devnet',
        identity: APP_IDENTITY,
      });
      const {accounts, auth_token} = authResult;

      // After authorizing, store the authResult with the onConnect callback we pass into the button
      console.log({
        address: accounts[0].address,
        label: accounts[0].label,
        authToken: auth_token,
        publicKey: getPublicKeyFromAddress(accounts[0].address),
      });
      login({
        address: accounts[0].address,
        label: accounts[0].label,
        authToken: auth_token,
        publicKey: getPublicKeyFromAddress(accounts[0].address),
      });
      navigation.navigate('Home');
    });
  });

  const pulseAnimation = useRef(new Animated.Value(1)).current;
  const verticalAnimation = useRef(new Animated.Value(0)).current;

  const startAnimations = () => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(pulseAnimation, {
            toValue: 1.1,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnimation, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(verticalAnimation, {
            toValue: -10,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(verticalAnimation, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
          }),
        ]),
      ]),
    ).start();
  };

  useEffect(() => {
    startAnimations();
  }, []);
  return (
    <>
      <SafeAreaView>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </SafeAreaView>

      <View
        style={{
          padding: 16,
          flexDirection: 'column',
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#0C0C0D',
        }}>
        <View
          style={{
            marginTop: 140,
            marginBottom: 64,
          }}>
          <Animated.Image
            source={require('../assets/images/wallet.png')}
            style={[
              {
                transform: [
                  {scale: pulseAnimation},
                  {translateY: verticalAnimation},
                ],
              },
            ]}
          />
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 56,
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'NexaBold',
              fontSize: 24,
              textAlign: 'center',
            }}>
            Connect your wallet
          </Text>
          <Text
            style={{
              color: '#999999',
              fontFamily: 'NexaLight',
              fontSize: 16,
              marginTop: 10,
              textAlign: 'center',
            }}>
            Attach your wallet to get full access of event tickets from booking,
            buying and verifying
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            width: SCREEN_WIDTH - 32,
            marginBottom: 64,
            gap: 16,
            maxHeight: 120,
          }}>
          <RoundedButton
            onPress={() => handleConnectPress()}
            title={'Connect wallet'}
          />
          <TransparentButton
            title={'Skip for now'}
            onPress={() => skipConnection()}
          />
        </View>
      </View>
    </>
  );
}

export default Onboarding;
