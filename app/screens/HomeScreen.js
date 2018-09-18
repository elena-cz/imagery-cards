import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import ScreenContainer from 'app/components/shared/ScreenContainer';
import Navigation from 'app/components/shared/Navigation';
import HelpIconButton from 'app/components/shared/IconButtons/HelpIconButton';
import CategoryChooser from 'app/components/home/CategoryChooser';


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
