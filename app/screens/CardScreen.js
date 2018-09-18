import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';


import Card from 'app/components/card/Card';

import SETS from 'app/exampleSets';
import CARDS from 'app/exampleCards';

export default class CardScreen extends React.Component {
  static propTypes = {
  };

  static defaultProps = {

  };

  state = {
    // fadeOpacity: new Animated.Value(0),
  };

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    // const cardData = navigation.getParam('cardData', CARDS.JOURNEY[0]);

    return (
      <Card
        style={styles.screen}
        cardData={CARDS[item]}
        navigation={navigation}
      />
    );
  };

  render() {
    const { navigation } = this.props;
    const cardList = navigation.getParam('cardList', SETS.JOURNEY);

    return (
      <View style={{ flex: 1, alignSelf: 'stretch' }}>
        <FlatList
          data={cardList}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.toString()}
          style={{ width: 250 }}
          horizontal
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({

});


// export default class CardLinkList extends React.Component {

//   renderItem = ({ item }) => {
//     const { onPress, withCategoryDot } = this.props;
//     const { id, title, subtitle, category } = item;

//     return (
//       <CardLink
//         title={title}
//         subtitle={subtitle}
//         category={category}
//         onPress={() => onPress(item)}
//         withCategoryDot={withCategoryDot}
//       />
//     );
//   };

//   render() {
//     const { cards } = this.props;

//     return (
//       <View style={{ flex: 1, alignSelf: 'stretch' }}>
//         <FlatList
//           data={cards}
//           renderItem={this.renderItem}
//           keyExtractor={({ id }) => id.toString()}
//           style={{ alignSelf: 'stretch' }}
//         />
//       </View>
//     );
//   }
// }
