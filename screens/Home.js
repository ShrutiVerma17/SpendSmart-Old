import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Home extends React.Component {
  renderArticles = () => {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var ranNums = [];
    i = nums.length;
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
}
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          {/*<Card item={articles[0]} horizontal  />*/}
          
          <Block flex row>
            <Card item={articles[ranNums[0]]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[ranNums[1]]} />
          </Block>
          <Block flex row>
          <Card item={articles[ranNums[2]]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[ranNums[3]]} />
            </Block>
            <Block flex row>
          <Card item={articles[ranNums[4]]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[ranNums[5]]} />
            </Block>
            <Block flex row>
          <Card item={articles[ranNums[6]]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[ranNums[7]]} />
            </Block>
            <Block flex row>
          <Card item={articles[ranNums[8]]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[ranNums[9]]} />
            </Block>
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
