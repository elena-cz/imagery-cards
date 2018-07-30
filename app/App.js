import React from 'react';
import firebase from 'react-native-firebase';
import { StyleSheet, Platform, Image, Text, View, ScrollView, ImageBackground, StatusBar } from 'react-native';

import BodyText from 'app/components/shared/BodyText';
import H1Text from 'app/components/shared/H1Text';
import H2Text from 'app/components/shared/H2Text';
import SubtitleText from 'app/components/shared/SubtitleText';

import Background from 'app/components/shared/Background';
import RoundedBox from 'app/components/shared/RoundedBox';
import DividingLine from 'app/components/shared/DividingLine';
import ButtonPrimary from 'app/components/shared/ButtonPrimary';
import ButtonSecondary from 'app/components/shared/ButtonSecondary';
import CardLinkList from 'app/components/shared/CardLinkList';

import CARDS from 'app/exampleCards';

export default class App extends React.Component {
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
      <View style={styles.parentContainer}>
        <Background category="DEEPENING">
          <StatusBar
            translucent
            backgroundColor="rgba(0, 0, 0, 0)"
            barStyle="dark-content"
          />
          <View style={styles.container}>
            
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
                  withCategoryDot
                />
              </RoundedBox>
            </ScrollView>
          </View>
        </Background>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingTop: 18,
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 20,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});
