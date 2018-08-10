import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'app/components/shared/IconButtons/IconButton';

export default function HelpIconButton({ category, onPress }) {

  return (
    <IconButton
      category={category}
      iconName="help-circle"
      labelText="Help"
      onPress={onPress}
      style={{
        marginRight: -18,
      }}
    />
  );
}

HelpIconButton.propTypes = {
  category: PropTypes.string,
  onPress: PropTypes.func,
};

HelpIconButton.defaultProps = {
  category: 'JOURNEY',
  onPress: () => console.log('Help'),
};
