import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'app/components/shared/IconButtons/IconButton';

export default function BackIconButton({ category, onPress }) {

  return (
    <IconButton
      category={category}
      iconName="arrow-left"
      labelText="Back"
      onPress={onPress}
      size={26}
      style={{
        marginLeft: -18,
        marginRight: 'auto',
      }}
    />
  );
}

BackIconButton.propTypes = {
  category: PropTypes.string,
  onPress: PropTypes.func,
};

BackIconButton.defaultProps = {
  category: 'JOURNEY',
  onPress: () => console.log('Back'),
};
