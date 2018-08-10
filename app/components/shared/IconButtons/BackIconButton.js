import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'app/components/shared/IconButtons/IconButton';

export default function BackIconButton({ category }) {

  return (
    <IconButton
      category={category}
      iconName="arrow-left"
      labelText="Back"
      onPress={() => console.log('Help pressed')}
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
};

BackIconButton.defaultProps = {
  category: 'JOURNEY',
};
