import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

import ScreenContainer from 'app/components/shared/ScreenContainer';
import Navigation from 'app/components/shared/Navigation';
import HelpIconButton from 'app/components/shared/IconButtons/HelpIconButton';
import RoundedBox from 'app/components/shared/RoundedBox';
import H1Text from 'app/components/shared/H1Text';


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
          <RoundedBox>
            <H1Text>
              Pick a Card
            </H1Text>
          </RoundedBox>
        </ScrollView>
      </ScreenContainer>
    );
  }
}


const styles = StyleSheet.create({
  
});
