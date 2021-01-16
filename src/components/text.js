import React from 'react';
import {Text} from 'react-native';

const MyText = ({text, ...rest}) => {
  return (
    <Text style={{fontFamily: "Nunito-Regular"}} {...rest}>
      {text}
    </Text>
  );
};

export default MyText;
