import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, ImageBackground, StatusBar } from 'react-native';

import BodyText from 'app/components/shared/BodyText';
import H1Text from 'app/components/shared/H1Text';
import H2Text from 'app/components/shared/H2Text';
import SubtitleText from 'app/components/shared/SubtitleText';

import ScreenContainer from 'app/components/shared/ScreenContainer';
import RoundedBox from 'app/components/shared/RoundedBox';
import DividingLine from 'app/components/shared/DividingLine';
import ButtonPrimary from 'app/components/shared/ButtonPrimary';
import ButtonSecondary from 'app/components/shared/ButtonSecondary';
import CardLinkList from 'app/components/shared/CardLinkList';

import Navigation from 'app/components/shared/Navigation';
import FavoriteIconButton from 'app/components/shared/IconButtons/FavoriteIconButton';
import HelpIconButton from 'app/components/shared/IconButtons/HelpIconButton';
import BackIconButton from 'app/components/shared/IconButtons/BackIconButton';

import CARDS from 'app/exampleCards';

export default class HelpScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      // firebase things?
    };
  }

  componentDidMount() {
    // firebase things?
  }

  render() {
    return (
      <ScreenContainer category="DEEPENING">
        <Navigation>
          <BackIconButton  />
          <FavoriteIconButton />
          <FavoriteIconButton />
          <HelpIconButton />
        </Navigation>
        <ScrollView>
          <RoundedBox>
            <H1Text>
              Deepening
            </H1Text>
            <SubtitleText>
              Tagline about how Deepening cards bring you into a relaxed state
            </SubtitleText>
            <ButtonSecondary
              onPress={() => console.log('Pressed Secondary Button')}
              title="Cancel"
              category="DEEPENING"
            />
            <ButtonPrimary
              onPress={() => console.log('Pressed Primary Button')}
              title="Save"
              category="DEEPENING"
            />
          </RoundedBox>
          <RoundedBox>
            <H2Text>
              Favorites
            </H2Text>
            <DividingLine category="DEEPENING" />
            <BodyText>
              You are on vacation in the mountains and are waiting in line, ready to go as a passenger on a river rafting trip. Suddenly someone is yelling at you, “We are missing one guide today. We need you to step up and guide one of the boats!”
            </BodyText>
          </RoundedBox>
          <RoundedBox>
            <H2Text>
              All Cards
            </H2Text>
            <DividingLine category="DEEPENING" />
            <CardLinkList
              cards={CARDS.JOURNEY}
              onPress={(id) => console.log('Clicked card', id)}
              // withCategoryDot
            />
          </RoundedBox>
        </ScrollView>
      </ScreenContainer>

    );
  }
}

const styles = StyleSheet.create({
  
});
