import React from 'react';
import IconButton from 'app/components/shared/IconButtons/IconButton';

export default function BackIconButton(props) {

  return (
    <IconButton
      category="DEEPENING"
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
