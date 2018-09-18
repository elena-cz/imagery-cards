import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import CardLink from 'app/components/shared/CardLink';

import CARDS from 'app/exampleCards';

export default class CardLinkList extends React.Component {

  renderItem = ({ item, index }) => {
    const { onPress, withCategoryDot } = this.props;
    const { title, subtitle, category } = CARDS[item];

    return (
      <CardLink
        title={title}
        subtitle={subtitle}
        category={category}
        onPress={() => onPress(index)}
        withCategoryDot={withCategoryDot}
      />
    );
  };

  render() {
    const { cards } = this.props;

    return (
      <View style={{ flex: 1, alignSelf: 'stretch' }}>
        <FlatList
          data={cards}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.toString()}
          style={{ alignSelf: 'stretch' }}
        />
      </View>
    );
  }
}

CardLinkList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.number).isRequired,
  onPress: PropTypes.func.isRequired,
  withCategoryDot: PropTypes.bool,
};

CardLinkList.defaultProps = {
  withCategoryDot: false,
};
