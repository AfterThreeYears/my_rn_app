import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import React from 'react';
import { Button, Platform } from 'react-native';
import HomePage from '../page/HomePage';
import Page1 from '../page/Page1';
import Page2 from '../page/Page2';
import Page3 from '../page/Page3';
import Page4 from '../page/Page4';
import Page5 from '../page/Page5';
import Ionicons from 'react-native-vector-icons/Ionicons'

const AppTopNavigator = createMaterialTopTabNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: {
      tabBarLabel: 'All',
    }
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      tabBarLabel: 'iOS',
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: {
      tabBarLabel: 'React',
    }
  },
  Page4: {
    screen: Page4,
    navigationOptions: {
      tabBarLabel: 'JS',
    }
  },
  Page5: {
    screen: Page5,
    navigationOptions: {
      tabBarLabel: 'React Native',
    }
  }
}, {
  tabBarOptions: {
    tabStyle: {
      minWidth: 50,
    },
    upperCaseLabel: false,
    scrollEnabled: true,
    style: {
      backgroundColor: '#678',
    },
    indicatorStyle: {
      height: 2,
      backgroundColor: '#fff',
    },
    labelStyle: {
      fontSize: 13,
      marginTop: 6,
      marginBottom: 6,
    },
  }
});

const AppBottomNavigator = createBottomTabNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={'ios-people'}
          size={26}
          style={{style: tintColor}}
        />
      )
    }
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      tabBarLabel: '趋势',
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={'ios-people'}
          size={26}
          style={{style: tintColor}}
        />
      )
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: {
      tabBarLabel: '收藏',
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={'ios-chatboxes'}
          size={26}
          style={{style: tintColor}}
        />
      )
    }
  },
  Page4: {
    screen: Page4,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={'ios-people'}
          size={26}
          style={{style: tintColor}}
        />
      )
    }
  },
}, {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#abcdef',
  }
});

export const AppStackNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
  },
  Page1: {
    screen: Page1,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`,
    })
  },
  Page2: {
    screen: Page2,
    navigationOptions: () => ({
      title: 'this is page2',
    }),
  },
  Page3: {
    screen: Page3,
    navigationOptions: props => {
      const { navigation: { state: { params }, setParams } } = props;
      return {
        title: params.title ? params.title : 'this is page3',
        headerRight: (
          <Button
            title={params.mode === 'edit' ? '保存' : '编辑'}
            onPress={() => setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
          />)
      };
    }
  },
  Page4: {
    screen: Page4,
    navigationOptions: {
      title: 'this is page4',
    },
  },
  Bottom: {
    screen: AppBottomNavigator,
    navigationOptions: {
      title: 'BottomNavigator',
    },
  },
  Top: {
    screen: AppTopNavigator,
    navigationOptions: {
      title: 'TopNavigator',
    },
  },
});
