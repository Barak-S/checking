import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const Input = ({ label, value, onChange, style, ...props }) => {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                label={label}
                value={text}
                type='outlined'
                onChangeText={text => setText(text)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 25,
      width: '100%',
      position: 'relative',
    },
  });

export default Input;