import React from 'react';
import { TextInput, View, StyleSheet, TextInputProps, Text } from 'react-native';
import { COLORS } from '../styles/colors';

interface InputProps extends TextInputProps {
  error?: string;
}

export default function Input({ error, ...props }: InputProps) {
  return (
    <View>
      <TextInput
        style={[styles.input, error ? styles.inputError : undefined]}
        placeholderTextColor={COLORS.gray}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginTop: 10,
    fontSize: 14,
  },
  inputError: {
    borderColor: COLORS.error,
  },
  errorText: {
    color: COLORS.error,
    fontSize: 12,
    marginTop: 5,
  },
});
