import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FONTS, COLORS } from 'app/styles';


export default function H2Text(props) {
  const { style, children } = props;

  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.PRIMARY,
    fontSize: 24,
    color: COLORS.GRAY.DARK,
    marginBottom: 8,
  },
});
