import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;

const TransparentButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.gradient}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    overflow: 'hidden',
    borderColor: '#1F1F1F',
    borderWidth: 1,
    width: SCREEN_WIDTH - 64,
  },
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH - 64,
    height: 50,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'NexaLight',
    textAlign: 'center',
  },
});

export default TransparentButton;
