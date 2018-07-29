import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import { FONTS, COLORS, BORDERRADIUS } from 'app/styles';

export default function ButtonSecondary({ category, title, onPress, disabled }) {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (category) {
    buttonStyles.push({ borderColor: COLORS[category].LIGHT });
  }

  const accessibilityStates = [];
  if (disabled) {
    buttonStyles.push(styles.buttonDisabled);
    textStyles.push(styles.textDisabled);
    accessibilityStates.push('disabled');
  }

  const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Touchable
      accessibilityRole="button"
      background={TouchableNativeFeedback.Ripple('#ffffff')}
      accessibilityStates={accessibilityStates}
      disabled={disabled}
      onPress={onPress}
    >
      <View style={buttonStyles}>
        <Text style={textStyles} disabled={disabled}>
          {title}
        </Text>
      </View>
    </Touchable>
  );
}

ButtonSecondary.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

ButtonSecondary.defaultProps = {
  category: 'JOURNEY',
  disabled: false,
};


const styles = StyleSheet.create({
  button: {
    borderColor: COLORS.JOURNEY.LIGHT,
    borderWidth: 2,
    borderRadius: BORDERRADIUS,
    marginBottom: 8,
  },
  text: {
    fontFamily: FONTS.PRIMARY,
    fontSize: 18,
    color: COLORS.GRAY.DARK,
    paddingVertical: 8,
    paddingHorizontal: 16,
    textAlign: 'center',
  },
  buttonDisabled: {
    borderColor: COLORS.GRAY.LIGHT,
  },
  textDisabled: {
    color: COLORS.GRAY.MEDIUM,
  },
});
