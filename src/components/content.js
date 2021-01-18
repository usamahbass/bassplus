import React from 'react';
import {StyleSheet, View} from 'react-native';

const Content = ({children}) => {
  return <View style={styles.content}>{children}</View>;
};

export default Content;

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fff',
  },
});
