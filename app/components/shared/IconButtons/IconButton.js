import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { COLORS, FONTS } from 'app/styles';
import Icon from 'react-native-vector-icons/Feather';


export default class IconButton extends React.Component {
  static propTypes = {
    category: PropTypes.string,
    iconName: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    size: PropTypes.number,
  };

  static defaultProps = {
    category: 'JOURNEY',
    size: 24,
  };

  state = {
    fadeOpacity: new Animated.Value(0),
  };

  fadeInAndOut = () => {
    const { fadeOpacity } = this.state;
    Animated.sequence([
      Animated.timing(
        fadeOpacity,
        {
          toValue: 1,
          duration: 500,
        },
      ),
      Animated.delay(1500),
      Animated.timing(
        fadeOpacity,
        {
          toValue: 0,
          duration: 1000,
        },
      ),
    ]).start();
  };

  render() {
    const { category, iconName, labelText, onPress, style, size } = this.props;
    const { fadeOpacity } = this.state;
    const { fadeInAndOut } = this;

    return (
      <View style={[styles.container, style]}>
        <Animated.View style={{ ...styles.label, opacity: fadeOpacity }}>
          <Text style={styles.labelText}>
            {labelText}
          </Text>
        </Animated.View>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={labelText}
          onPress={onPress}
          onLongPress={fadeInAndOut}
        >
          <Icon name={iconName} size={size} color={COLORS[category].ICON} />
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: 60,
    display: 'flex',
    alignItems: 'center',
    marginRight: -18,
    // marginLeft: -10,
  },
  label: {
    opacity: 90,
    backgroundColor: 'white',
    borderRadius: 2,
    // zIndex: 2,
    paddingHorizontal: 4,
    marginBottom: 2,
  },
  labelText: {
    color: COLORS.GRAY.MEDIUM,
    fontFamily: FONTS.PRIMARY,
    fontSize: 14,
  },
});
