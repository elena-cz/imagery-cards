import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { COLORS } from 'app/styles';

export default function DividingLine({ category, style }) {
  return (
    <View style={[styles.line, style, { borderBottomColor: COLORS[category].LIGHT }]} />
  );
}

DividingLine.propTypes = {
  category: PropTypes.string,
};

DividingLine.defaultProps = {
  category: 'JOURNEY',
};

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.JOURNEY.LIGHT,
    width: '60%',
    marginBottom: 8,
  },
});
