import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FONTS, COLORS } from 'app/styles';


export default function SubtitleText(props) {
  const { style, children } = props;

  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.ITALIC,
    fontSize: 16,
    color: COLORS.GRAY.MEDIUM,
    textAlign: 'center',
    marginBottom: 8,
  },
});
