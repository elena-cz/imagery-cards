import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import { FONTS, COLORS, BORDERRADIUS } from 'app/styles';

export default function ButtonPrimary({ category, title, onPress, disabled }) {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (category) {
    buttonStyles.push({ backgroundColor: COLORS[category].LIGHT });
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

ButtonPrimary.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

ButtonPrimary.defaultProps = {
  category: 'JOURNEY',
  disabled: false,
};


const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.JOURNEY.LIGHT,
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
    backgroundColor: COLORS.GRAY.LIGHT,
  },
  textDisabled: {
    color: COLORS.GRAY.MEDIUM,
  },
});








/*
 *
 * ```
 * import { Button } from 'react-native';
 * ...
 *
 * <Button
 *   onPress={onPressLearnMore}
 *   title="Learn More"
 *   color="#841584"
 *   accessibilityLabel="Learn more about this purple button"
 * />
 * ```
 *
 */

// class ButtonPrimary extends React.Component<{
//   title: string,
//   onPress: () => any,
//   color?: ?string,
//   disabled?: ?boolean,
// }> {
//   static propTypes = {
//     /**
//      * Text to display inside the button
//      */
//     title: PropTypes.string.isRequired,
//     /**
//      * Color of the text (iOS), or background color of the button (Android)
//      */
//     color: PropTypes.string,
//     /**
//      * If true, disable all interactions for this component.
//      */
//     disabled: PropTypes.bool,
//     /**
//      * Handler to be called when the user taps the button
//      */
//     onPress: PropTypes.func.isRequired,
//   };

//   render() {
//     const {
//       color,
//       onPress,
//       title,
//       disabled,
//     } = this.props;
//     const buttonStyles = [styles.button];
//     const textStyles = [styles.text];
//     if (color) {
//       if (Platform.OS === 'ios') {
//         textStyles.push({color: color});
//       } else {
//         buttonStyles.push({backgroundColor: color});
//       }
//     }
//     const accessibilityStates = [];
//     if (disabled) {
//       buttonStyles.push(styles.buttonDisabled);
//       textStyles.push(styles.textDisabled);
//       accessibilityStates.push('disabled');
//     }
//     invariant(
//       typeof title === 'string',
//       'The title prop of a Button must be a string',
//     );
//     const formattedTitle =
//       Platform.OS === 'android' ? title.toUpperCase() : title;
//     const Touchable =
//       Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
//     return (
//       <Touchable
//         accessibilityRole="button"
//         accessibilityStates={accessibilityStates}
//         disabled={disabled}
//         onPress={onPress}>
//         <View style={buttonStyles}>
//           <Text style={textStyles} disabled={disabled}>
//             {formattedTitle}
//           </Text>
//         </View>
//       </Touchable>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   button: Platform.select({
//     ios: {
//       backgroundColor: '#D7EEF9',
//       borderRadius: 6,
//     },
//     android: {
//       elevation: 0,
//       // Material design blue from https://material.google.com/style/color.html#color-color-palette
//       backgroundColor: '#2196F3',
//       borderRadius: 6,
//     },
//   }),
//   text: Platform.select({
//     ios: {
//       // iOS blue from https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/
//       color: '#007AFF',
//       textAlign: 'center',
//       padding: 8,
//       fontSize: 18,
//     },
//     android: {
//       color: 'white',
//       textAlign: 'center',
//       padding: 8,
//       fontWeight: '500',
//     },
//   }),
//   buttonDisabled: Platform.select({
//     ios: {},
//     android: {
//       elevation: 0,
//       backgroundColor: '#dfdfdf',
//     },
//   }),
//   textDisabled: Platform.select({
//     ios: {
//       color: '#cdcdcd',
//     },
//     android: {
//       color: '#a1a1a1',
//     },
//   }),
// });

// module.exports = ButtonPrimary;