import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet } from 'react-native';

import {
  ScreenContainer,
  Navigation,
  HelpIconButton,
} from '@components/shared';

import CategoryChooser from '@components/home/CategoryChooser';


export default class HomeScreen extends React.Component {
  static propTypes = {
  };

  static defaultProps = {

  };

  state = {
    // fadeOpacity: new Animated.Value(0),
  };

  render() {
    const category = 'JOURNEY';
    const { navigation } = this.props;

    return (
      <ScreenContainer category={category}>
        <Navigation>
          <HelpIconButton
            category={category}
            onPress={() => navigation.push('Help')}
          />
        </Navigation>
        <ScrollView>
          <CategoryChooser navigation={navigation} />
        </ScrollView>
      </ScreenContainer>
    );
  }
}


const styles = StyleSheet.create({

});
