import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

import RoundedBox from 'app/components/shared/RoundedBox';
import H2Text from 'app/components/shared/H2Text';
import DividingLine from 'app/components/shared/DividingLine';
import CardLinkList from 'app/components/shared/CardLinkList';

import CARDS from 'app/exampleCards';

export default function AllCardsList({ category, navigation }) {

  const cardList = CARDS[category];

  return (
    <RoundedBox>
      <H2Text>
        All Cards
      </H2Text>
      <DividingLine category={category} />
      <CardLinkList
        cards={cardList}
        onPress={(index) => navigation.push('Card', { index, cardList })}
        // withCategoryDot
      />
    </RoundedBox>
  );
}

AllCardsList.propTypes = {
  category: PropTypes.string,
};

AllCardsList.defaultProps = {
  category: 'JOURNEY',
};


const styles = StyleSheet.create({

});
