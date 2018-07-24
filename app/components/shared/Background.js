import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, StyleSheet } from 'react-native';
import { BACKGROUNDS } from 'app/styles';


export default function Background(props) {
  const { category, children } = props;

  return (
    <ImageBackground
      {...props}
      source={BACKGROUNDS[category]}
      style={styles.container}
      imageStyle={styles.image}
    >
      {children}
    </ImageBackground>
  );
}

Background.propTypes = {
  category: PropTypes.string,
};

Background.defaultProps = {
  category: 'JOURNEY',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});
