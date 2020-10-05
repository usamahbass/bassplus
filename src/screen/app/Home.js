import React from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../../styles/home/styles';

const Home = ({navigation}) => {
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
          source={{uri: 'https://i.ibb.co/n3vy9hQ/Group-2.png'}}
          style={[styles.iconSearch, {height: 60, width: 60}]}
        />
      </View>
      <Text style={styles.help}>How can we help you?</Text>
      <View style={styles.boxHelp}>
        <ScrollView horizontal={true}>
        <TouchableOpacity onPress = { () => navigation.navigate('Chats')} style={styles.boxBidget}>
            <Image
              source={{uri: 'https://i.ibb.co/ZVFKgwF/icon-chat-32x32.png'}}
              style={[styles.iconSearch,{height : 30, width : 30}]}
            />
            <Text style={styles.tWidget}>Chat a free</Text>
          </TouchableOpacity>
          <View style={styles.boxBidget}>
            <Image
              source={{uri: 'https://i.ibb.co/LrZrLb3/icon-chat-32x32-copy.png'}}
              style={[styles.iconSearch,{height : 30, width : 30}]}
            />
            <Text style={styles.tWidget}>Schedule</Text>
          </View>
          <View style={styles.boxBidget}>
            <Image
              source={{uri: 'https://i.ibb.co/pz64Zgg/icon-chat-32x32-copy-2.png'}}
              style={[styles.iconSearch,{height : 30, width : 30}]}
            />
            <Text style={styles.tWidget}>Buy Medicine </Text>
          </View>
          <View style={styles.boxBidget}>
            <Image
              source={{uri: 'https://i.ibb.co/pz64Zgg/icon-chat-32x32-copy-2.png'}}
              style={styles.iconSearch}
            />
            <Text style={styles.tWidget}>Chat a free</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.boxTitle}>
        <Text style={[styles.help, {marginTop: 10}]}>Popular Categories</Text>
        <Text style={styles.see}>See All</Text>
      </View>
      <View style={[styles.boxHelp, {marginRight: 35}]}>
        <View
          style={[
            styles.boxBidget,
            {width: '50%', height: 160, backgroundColor: '#384DFE'},
          ]}
        >
          <Image
            source={{uri: 'https://i.ibb.co/HFpfFzL/icon-heart-48x48.png'}}
            style={[styles.iconSearch, {height: 70, width: 70}]}
          />
          <Text style={[styles.tWidget, {color: '#fff'}]}>Cardiology</Text>
        </View>
        <View
          style={[
            styles.boxBidget,
            {width: '50%', height: 160, backgroundColor: '#FF685C'},
          ]}
        >
          <Image
            source={{uri: 'https://i.ibb.co/GHvx2jJ/icon-heart-48x48-copy.png'}}
            style={[styles.iconSearch, {height: 70, width: 70}]}
          />
          <Text style={[styles.tWidget, {color: '#fff'}]}>Pulmonology</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
