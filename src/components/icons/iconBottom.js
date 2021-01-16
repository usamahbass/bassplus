import React from 'react';
import {View, Image} from 'react-native';

const IconBottom = (props) => {
  const {color, focused} = props.data;
  let colorSelected = focused ? color : '#D0C9D6';
  return (
    <View>
      <Image
        source={props.image}
        style={{width: 22, height: 22, tintColor: colorSelected}}
      />
    </View>
  );
};

export default IconBottom;
