import React, {useRef} from 'react';

import {Dimensions} from 'react-native';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;

function SearchBar() {
  const inputRef = useRef(); // Create a reference

  const handlePress = () => {
    inputRef.current.focus(); // Focus the input when the view is pressed
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500} // Adjust this offset according to your needs
    >
      {}
      <TouchableOpacity style={styles.outerContainer} onPress={handlePress}>
        <View style={styles.innerContainer}>
          <Image
            style={styles.icon}
            source={require('../assets/icons/search.png')}
            resizeMode="contain"
          />
          <TextInput
            ref={inputRef} // Attach the reference to the input
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#999999"
          />
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  outerContainer: {
    width: SCREEN_WIDTH - 32,
    borderRadius: 8,
  },
  innerContainer: {
    height: 40,
    flexDirection: 'row', //
    alignItems: 'center',
    borderRadius: 8,
    borderColor: '#1F1F1F',
    borderWidth: 1,
  },
  icon: {
    marginHorizontal: 12, // Adds some spacing to the left and right of the icon
    width: 16,
    height: 16,
  },
  input: {
    height: '100%',
    paddingRight: 12,
    fontFamily: 'NexaLight',
    color: '#999999', // Text color
  },
});
export default SearchBar;
