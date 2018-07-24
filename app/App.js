import React from 'react';
import firebase from 'react-native-firebase';
import { StyleSheet, Platform, Image, Text, View, ScrollView, ImageBackground } from 'react-native';

import BodyText from 'app/components/shared/BodyText';
import H1Text from 'app/components/shared/H1Text';
import H2Text from 'app/components/shared/H2Text';
import SubtitleText from 'app/components/shared/SubtitleText';

import Background from 'app/components/shared/Background';
import RoundedBox from 'app/components/shared/RoundedBox';
import DividingLine from 'app/components/shared/DividingLine';


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
          <View style={styles.container}>
            <ScrollView>
              <RoundedBox>
                <H1Text>
                  Deepening
                </H1Text>
                <SubtitleText>
                  Tagline about how Deepening cards bring you into a relaxed state
                </SubtitleText>
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
