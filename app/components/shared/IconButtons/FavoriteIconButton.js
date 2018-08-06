import React from 'react';
import IconButton from 'app/components/shared/IconButtons/IconButton';

export default function FavoriteIconButton(props) {

  return (
    <IconButton
      category="DEEPENING"
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