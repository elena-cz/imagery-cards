import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

import ScreenContainer from 'app/components/shared/ScreenContainer';
import Navigation from 'app/components/shared/Navigation';
import HelpIconButton from 'app/components/shared/IconButtons/HelpIconButton';
import BackIconButton from 'app/components/shared/IconButtons/BackIconButton';
import RoundedBox from 'app/components/shared/RoundedBox';
import H1Text from 'app/components/shared/H1Text';
import SubtitleText from 'app/components/shared/SubtitleText';
import ButtonPrimary from 'app/components/shared/ButtonPrimary';


export default class CategoryBrowseScreen extends React.Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  state = {
    // fadeOpacity: new Animated.Value(0),
  };



  render() {
    const { navigation } = this.props;
    const category = navigation.getParam('category', 'JOURNEY');

    return (
      <ScreenContainer category={category}>
        <Navigation>
          <BackIconButton  
            category={category}
            onPress={() => navigation.goBack()}
          />
          <HelpIconButton
            category={category}
            onPress={() => navigation.push('Help')}
          />
        </Navigation>
        <ScrollView>
          <RoundedBox>
            <H1Text>
              Deepening
            </H1Text>
            <SubtitleText>
              Tagline about how Deepening cards bring you into a relaxed state
            </SubtitleText>
            <ButtonPrimary
              onPress={() => console.log('Pressed Primary Button')}
              title="Random Card"
              category={category}
            />
          </RoundedBox>
        </ScrollView>
      </ScreenContainer>
    );
  }
}


const styles = StyleSheet.create({

});
