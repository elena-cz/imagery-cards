import React from 'react';
import firebase from 'react-native-firebase';
import { StyleSheet, Platform, Image, Text, View, ScrollView, ImageBackground } from 'react-native';

import BodyText from 'app/components/shared/BodyText';


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
        <ImageBackground
          source={require('./assets/images/BlueBkg.png')}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.container}>
            <ScrollView>
              <View style={styles.roundedBox}>
                <Text style={styles.title}>
                  Title
                </Text>
              </View>
              <View style={styles.roundedBox}>
                <Text style={styles.body}>
                  You are on vacation in the mountains and are waiting in line, ready to go as a passenger on a river rafting trip. Suddenly someone is yelling at you, “We are missing one guide today. We need you to step up and guide one of the boats!”
                </Text>
              </View>
              <View style={styles.roundedBox}>
                <BodyText>
                  You are on vacation in the mountains and are waiting in line, ready to go as a passenger on a river rafting trip. Suddenly someone is yelling at you, “We are missing one guide today. We need you to step up and guide one of the boats!”
                </BodyText>
              </View>
              <View style={styles.roundedBox}>
                <Text>
                  You are on vacation in the mountains and are waiting in line, ready to go as a passenger on a river rafting trip. Suddenly someone is yelling at you, “We are missing one guide today. We need you to step up and guide one of the boats!”
                </Text>
              </View>
              <View style={styles.roundedBox}>
                <Text>
                  You are on vacation in the mountains and are waiting in line, ready to go as a passenger on a river rafting trip. Suddenly someone is yelling at you, “We are missing one guide today. We need you to step up and guide one of the boats!”
                </Text>
              </View>
              <View style={styles.roundedBox}>
                <Text>
                  You are on vacation in the mountains and are waiting in line, ready to go as a passenger on a river rafting trip. Suddenly someone is yelling at you, “We are missing one guide today. We need you to step up and guide one of the boats!”
                </Text>
              </View>
              <View style={styles.roundedBox}>
                <Text>
                  You are on vacation in the mountains and are waiting in line, ready to go as a passenger on a river rafting trip. Suddenly someone is yelling at you, “We are missing one guide today. We need you to step up and guide one of the boats!”
                </Text>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
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
  roundedBox: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: 'white',
    marginBottom: 18,
    padding: 16,
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
  title: {
    fontFamily: 'BakerieSmoothWide-Medium',
    color: 'black',
    fontSize: 30,
  },
  body: {
    fontFamily: 'WoodfordBourne-Regular',
    color: 'black',
    fontSize: 18,
  },
});
