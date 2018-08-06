import React from 'react';
import IconButton from 'app/components/shared/IconButtons/IconButton';

export default function HelpIconButton(props) {

  return (
    <IconButton
      category="DEEPENING"
      iconName="help-circle"
      labelText="Help"
      onPress={() => console.log('Help pressed')}
      style={{
        marginRight: -18,
      }}
    />
  );
}
