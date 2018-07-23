import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FONTS, COLORS } from 'app/styles';


export default function BodyText(props) {
  const { style, children } = props;

  return (
    <Text {...props} style={[styles.bodyText, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: FONTS.PRIMARY,
    fontSize: 18,
    color: COLORS.GRAY.DARK,
  },
});
