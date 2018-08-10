import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, StatusBar } from 'react-native';

import Background from 'app/components/shared/Background';


export default function ScreenContainer({ category, children }) {

  return (
    <View style={styles.parentContainer}>
      <Background category={category}>
        <StatusBar
          translucent
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="dark-content"
        />
        <View style={styles.container}>
          {children}
        </View>
      </Background>
    </View>
  );
}

ScreenContainer.propTypes = {
  category: PropTypes.string,
};

ScreenContainer.defaultProps = {
  category: 'JOURNEY',
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 18,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginTop: StatusBar.currentHeight || 20,
  },
});
