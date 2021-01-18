import React from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import { SearchStyles } from '../styles/components/_search';

const Search = ({ ...rest }) => {
  return (
    <View style={SearchStyles.boxSearch}>
      <Image
        style={SearchStyles.searchImage}
        source={require('../assets/image/search.png')}
      />
      <TextInput
        {...rest}
        style={SearchStyles.inputSearch}
      />
      <TouchableOpacity style={SearchStyles.settings}>
        <Image source={require('../assets/image/settings.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
