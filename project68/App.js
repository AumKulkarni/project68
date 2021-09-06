import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer}from 'react-navigation'
import {createBottomTabNavigator}from 'react-navigation-tabs'
import FacebookScreen from './screens/facebookscreen'
import InstagramScreen from './screens/instagramscreen'
export default class App extends React.Component{
render(){
return(
<AppContainer/>
)
}
}
const TabNavigator=createBottomTabNavigator({
Facebook:{screen:FacebookScreen},
Instagram:{screen:InstagramScreen}
})
const AppContainer=createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
