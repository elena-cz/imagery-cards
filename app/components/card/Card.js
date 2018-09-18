import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions } from 'react-native';

import ScreenContainer from 'app/components/shared/ScreenContainer';
import Navigation from 'app/components/shared/Navigation';
import HelpIconButton from 'app/components/shared/IconButtons/HelpIconButton';
import BackIconButton from 'app/components/shared/IconButtons/BackIconButton';
import RoundedBox from 'app/components/shared/RoundedBox';
import H1Text from 'app/components/shared/H1Text';
import SubtitleText from 'app/components/shared/SubtitleText';
import BodyText from 'app/components/shared/BodyText';

export default function Card({ cardData, navigation }) {
  const { title, subtitle, text, category } = cardData;

  return (
    <ScreenContainer category={category} style={styles.screen}>

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

      <RoundedBox>
        <H1Text>
          {title}
        </H1Text>
        <SubtitleText>
          {subtitle}
        </SubtitleText>
        <BodyText>
          {text}
        </BodyText>
      </RoundedBox>

    </ScreenContainer>
  );
}

Card.propTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

Card.defaultProps = {
  // category: 'JOURNEY',
};


const styles = StyleSheet.create({
  screen: {
    // width: Dimensions.get('window').window,
    width: 250,
  },
});
