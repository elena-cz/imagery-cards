import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BORDERRADIUS } from 'app/styles';


export default function RoundedBox(props) {
  const { style, children } = props;

  return (
    <View {...props} style={[styles.container, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: BORDERRADIUS,
    backgroundColor: 'white',
    marginBottom: 18,
    padding: 16,
    alignItems: 'center',
  },
});
