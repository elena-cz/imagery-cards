import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

import {
  ScreenContainer,
  Navigation,
  HelpIconButton,
  BackIconButton,
  RoundedBox,
  H1Text,
  SubtitleText,
  ButtonPrimary,
} from '@components/shared';

import AllCardsList from '@components/categoryBrowse/AllCardsList';

import CATEGORY_INFO from 'app/categoryInfo';

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
              {CATEGORY_INFO[category].name}
            </H1Text>
            <SubtitleText style={{ marginBottom: 16 }}>
              {CATEGORY_INFO[category].description}
            </SubtitleText>
            <ButtonPrimary
              onPress={() => console.log('Pressed Primary Button')}
              title="Random Card"
              category={category}
            />
          </RoundedBox>

          <AllCardsList category={category} navigation={navigation} />

        </ScrollView>
      </ScreenContainer>
    );
  }
}


const styles = StyleSheet.create({

});
