import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import IconBottom from '../components/icons/iconBottom';
import Feed from '../screen/app/Feed';
import History from '../screen/app/History';
import Home from '../screen/app/Home';
import Review from '../screen/app/Review';
import Chats from '../screen/pages/chats';
import Schedule from '../screen/pages/schedule';
import 'react-native-gesture-handler';

const HomeTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeTabRoute = () => {
  return (
    <HomeTab.Navigator
      tabBarOptions={{
        activeTintColor: '#384DFE',
        labelStyle: {
          fontSize: 12,
          flex: 0.5,
          position: 'relative',
          bottom: 5,
          fontFamily: 'Nunito-Regular',
        },
        style: {
          height: 60,
        },
      }}>
      <HomeTab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: (props) => (
            <IconBottom
              data={props}
              image={require('../assets/image/home.png')}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name="History"
        component={History}
        options={{
          title: 'History',
          tabBarIcon: (props) => (
            <IconBottom
              data={props}
              image={require('../assets/image/history.png')}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name="Feed"
        component={Feed}
        options={{
          title: 'Feed',
          tabBarIcon: (props) => (
            <IconBottom
              data={props}
              image={require('../assets/image/feed.png')}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name="Review"
        component={Review}
        options={{
          title: 'Review',
          tabBarIcon: (props) => (
            <IconBottom
              data={props}
              image={require('../assets/image/review.png')}
            />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
};

const HomeStackRoot = () => {
  const options = {
    headerTintColor: '#D0C9D6',
    headerTitleStyle: {
      display: 'none',
    },
    headerStyle: {elevation: 0, backgroundColor: '#fff'},
  };
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeTab"
        component={HomeTabRoute}
        options={options}
      />
      <HomeStack.Screen
        name="Chats"
        component={Chats}
        options={options}
      />
      <HomeStack.Screen name="Schedule" component={Schedule} options={options} />
    </HomeStack.Navigator>
  );
};

export default HomeStackRoot;
