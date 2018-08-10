import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'app/components/shared/IconButtons/IconButton';

export default function FavoriteIconButton({ category }) {

  return (
    <IconButton
      category={category}
      iconName="heart"
      labelText="Favorite"
      onPress={() => console.log('Favorite pressed')}
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
};

FavoriteIconButton.defaultProps = {
  category: 'JOURNEY',
};
