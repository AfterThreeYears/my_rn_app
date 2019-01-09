import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';

const CITY_NAMES = ['北京', '上海', '杭州', 'aa', 'bb', 'cc', 'dd'];
export default class FlatListDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addressList: CITY_NAMES,
      isLoading: false,
    };
  }
  loadData = () => {
    this.setState({
      isLoading: true,
    })
    const addressList = this.state.addressList.slice(0);
    setTimeout(() => {
      this.setState({
        addressList: addressList.reverse(),
        isLoading: false,
      });
    }, 2000);
  }
  loadMore = () => {
    if (this.state.isLoading) return;
    this.setState({
      isLoading: true,
    })
    setTimeout(() => {
      this.setState({
        addressList: [...this.state.addressList, Math.random()],
        isLoading: false,
      });
    }, 2000);
  }
  getIndicator = () => {
    return (<View style={styles.indicatorContainer}>
      <ActivityIndicator
        style={styles.indicator}
        size={'large'}
        color={'red'}
        animating={true}
      />
      <Text>加载中...</Text>
    </View>);
  }
  renderItem = (data) => {
    return (<View style={styles.item}>
      <Text style={styles.text}>{data.item}</Text>
    </View>);
  }
  render() {
    const { addressList, isLoading } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={addressList}
          renderItem={this.renderItem}
          // refreshing={isLoading}
          // onRefresh={this.loadData}
          keyExtractor={() => `${Math.random()}`}
          refreshControl={
            <RefreshControl
              title={'6666'}
              colors={['red', 'blue']}
              tintColor={'red'}
              refreshing={isLoading}
              onRefresh={this.loadData}
            />
          }
          ListFooterComponent={this.getIndicator()}
          onEndReached={this.loadMore}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'red',
    height: 100,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {},
  indicatorContainer: {},
  indicator: {}
});
