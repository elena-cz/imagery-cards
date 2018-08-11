import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import RoundedBox from 'app/components/shared/RoundedBox';
import H1Text from 'app/components/shared/H1Text';
import BodyText from 'app/components/shared/BodyText';

export default function CategoryChooser({ navigation }) {

  return (
    <RoundedBox>
      <H1Text>
        Pick a Card
      </H1Text>

      <View style={styles.categoriesContainer}>
        <TouchableOpacity
          style={styles.button}
          accessibilityRole="button"
          accessibilityLabel="Deepening Cards"
          onPress={() => navigation.push('CategoryBrowse', { category: 'DEEPENING' })}
        >
          <Image
            style={styles.icon}
            source={require('app/assets/images/DeepeningMiniCard.png')}
          />
          <BodyText>
            Deepening
          </BodyText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          accessibilityRole="button"
          accessibilityLabel="Journey Cards"
          onPress={() => navigation.push('CategoryBrowse', { category: 'JOURNEY' })}
        >
          <Image
            style={styles.icon}
            source={require('app/assets/images/JourneyMiniCard.png')}
          />
          <BodyText>
            Journey
          </BodyText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          accessibilityRole="button"
          accessibilityLabel="Lightening Cards"
          onPress={() => navigation.push('CategoryBrowse', { category: 'LIGHTENING' })}
        >
          <Image
            style={styles.icon}
            source={require('app/assets/images/LighteningMiniCard.png')}
          />
          <BodyText>
            Lightening
          </BodyText>
        </TouchableOpacity>

      </View>

    </RoundedBox>
  );
}

CategoryChooser.propTypes = {
};

// CategoryChooser.defaultProps = {
//   category: 'JOURNEY',
// };


const styles = StyleSheet.create({
  categoriesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 100,
    paddingTop: 8,
  },
  icon: {
    height: 60,
    resizeMode: 'contain',
    marginBottom: 8,
  },
});
