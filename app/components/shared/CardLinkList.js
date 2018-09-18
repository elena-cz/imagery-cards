import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import CardLink from 'app/components/shared/CardLink';


export default class CardLinkList extends React.Component {

  renderItem = ({ item, index }) => {
    const { onPress, withCategoryDot } = this.props;
    const { title, subtitle, category } = item;

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
          keyExtractor={({ id }) => id.toString()}
          style={{ alignSelf: 'stretch' }}
        />
      </View>
    );
  }
}

CardLinkList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onPress: PropTypes.func.isRequired,
  withCategoryDot: PropTypes.bool,
};

CardLinkList.defaultProps = {
  withCategoryDot: false,
};
