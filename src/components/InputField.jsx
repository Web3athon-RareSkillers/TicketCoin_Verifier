import React, {useState} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

const InputField = ({onInputChange, placeholderText}) => {
  const [text, setText] = useState('');

  const handleTextChange = value => {
    setText(value);
    onInputChange(value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholderText}
        placeholderTextColor="#999999"
        value={text}
        onChangeText={handleTextChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    backgroundColor: 'transparent',
    borderRadius: 99999,
    height: 52,
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    color: 'white',
  },
});

export default InputField;
