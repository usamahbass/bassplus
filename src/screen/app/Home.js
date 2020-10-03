import React from 'react';
import {Text, View, StatusBar, Image, TextInput, ScrollView} from 'react-native';
import {styles} from '../../styles/home/styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E5E5E5" />
      <View style={styles.box}>
        <View style={styles.user}>
          <Image
            source={{uri: 'https://i.ibb.co/LP0RGNG/man.png'}}
            style={{height: 30, width: 30, borderRadius: 20, marginRight: 5}}
          />
          <View>
            <Text style={styles.hi}>Hi Ainara,</Text>
            <Text style={styles.today}>How're you today?</Text>
          </View>
        </View>
        <View style={styles.bag}>
          <Image
            source={{uri: 'https://i.ibb.co/9bxn04q/notification.png'}}
            style={styles.notifikasi}
          />
          <View style={styles.boxCount}>
            <Text style={styles.count}>4</Text>
          </View>
        </View>
      </View>
      <View style={styles.boxSearch}>
        <Image
          source={{uri: 'https://i.ibb.co/SXsN9Y3/loupe.png'}}
          style={styles.iconSearch}
        />
        <TextInput placeholder="Search health issue, doctor, topic…" />
        <Image
          source={{uri: 'https://i.ibb.co/SXsN9Y3/loupe.png'}}
          style={styles.iconSearch}
        />
      </View>
      <Text style={styles.help}>How can we help you?</Text>
      <View style={styles.boxHelp}>
      <ScrollView horizontal= {true} >
        <View style={styles.boxBidget}>
          <Text>Chat a free</Text>
        </View>
        <View style={styles.boxBidget}>
          <Text>Chat a free</Text>
        </View>
        <View style={styles.boxBidget}>
          <Text>Chat a free</Text>
        </View>
        <View style={styles.boxBidget}>
          <Text>Chat a free</Text>
        </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
