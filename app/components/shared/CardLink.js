import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BodyText from 'app/components/shared/BodyText';
import SubtitleText from 'app/components/shared/SubtitleText';
import { COLORS } from 'app/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CardLink({ title, subtitle, onPress, category, withCategoryDot }) {

  const textStyles = [styles.text];
  const bulletStyles = [styles.bullet];
  const containerStyles = [styles.container];

  if (withCategoryDot) {
    textStyles.push({ textAlign: 'left' });
    bulletStyles.push({ display: 'flex' });
    containerStyles.push({ alignSelf: 'flex-start' });
  }

  return (
    <TouchableOpacity
      accessibilityRole="link"
        onPress={onPress}
    >
      <View
        style={containerStyles}
      >
        <View style={bulletStyles}>
          <Icon name="fiber-manual-record" size={16} color={COLORS[category].MEDIUM} />
        </View>
        <View>
          <BodyText style={textStyles}>
            {title}
          </BodyText>
          <SubtitleText style={textStyles}>
            {subtitle}
          </SubtitleText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

CardLink.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  category: PropTypes.string,
  withCategoryDot: PropTypes.bool,
};

CardLink.defaultProps = {
  subtitle: '',
  category: 'JOURNEY',
  withCategoryDot: false,
};


const styles = StyleSheet.create({
  container: {
    paddingBottom: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  bullet: {
    display: 'none',
    paddingRight: 8,
    paddingTop: 2,
  },
  text: {
    textAlign: 'center',
  },
});

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: COLORS.JOURNEY.LIGHT,
//     borderRadius: BORDERRADIUS,
//     marginBottom: 8,
//   },
//   text: {
//     fontFamily: FONTS.PRIMARY,
//     fontSize: 18,
//     color: COLORS.GRAY.DARK,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     textAlign: 'center',
//   },
//   buttonDisabled: {
//     backgroundColor: COLORS.GRAY.LIGHT,
//   },
//   textDisabled: {
//     color: COLORS.GRAY.MEDIUM,
//   },
// });
