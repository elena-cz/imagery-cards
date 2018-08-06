import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Navigation(props) {
  const { style, children } = props;

  return (
    <View {...props} style={[styles.container, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 12,
    marginHorizontal: -18,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
