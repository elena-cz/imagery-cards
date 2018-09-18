import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'app/components/shared/IconButtons/IconButton';

export default function FavoriteIconButton({ category, onPress }) {

  return (
    <IconButton
      category={category}
      iconName="heart"
      labelText="Favorite"
      onPress={onPress}
      style={{
        // backgroundColor: 'blue',
        // marginRight: -20,
        // paddingRight: 10,
        // marginLeft: 0,
      }}
    />
  );
}

FavoriteIconButton.propTypes = {
  category: PropTypes.string,
  onPress: PropTypes.func,
};

FavoriteIconButton.defaultProps = {
  category: 'JOURNEY',
  onPress: () => console.log('Favorite pressed'),
};
