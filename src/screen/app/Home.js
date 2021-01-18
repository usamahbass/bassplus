import React from 'react';
import {
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {MyText} from '../../components';
import {styles} from '../../styles/home/styles';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor="#E5E5E5" />

        {/* Header */}

        <View style={styles.header}>
          <View style={styles.user}>
            <Image
              source={{uri: 'https://i.ibb.co/LP0RGNG/man.png'}}
              style={styles.imageUser}
            />
            <View>
              <Text style={styles.userName}>Hi Ainara</Text>
              <Text style={styles.userHelp}>How're you today</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.notification}>
            <Image source={require('../../assets/image/notification.png')} />
            <View style={styles.notificationBox}>
              <MyText style={styles.notificationCount} text="4" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Main */}

        {/* search */}

        <View style={styles.boxSearch}>
          <Image
            style={styles.searchImage}
            source={require('../../assets/image/search.png')}
          />
          <TextInput
            placeholder="Search health issue, doctor, topic…"
            placeholderTextColor="#B0B0B0"
            style={styles.inputSearch}
          />
          <TouchableOpacity style={styles.settings}>
            <Image source={require('../../assets/image/settings.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.boxHelp}>
          <Text style={styles.title}>How can we help you ?</Text>

          <View style={styles.containerHelp}>
            <TouchableOpacity onPress={() => navigation.navigate("Chats")} style={styles.boxImage}>
              <Image source={require('../../assets/image/medical.png')} />
              <Text style={styles.boxText}>Chat a free</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Schedule")} style={styles.boxImage}>
              <Image source={require('../../assets/image/chat.png')} />
              <Text style={styles.boxText}>Schedule</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxImage}>
              <Image source={require('../../assets/image/schedule.png')} />
              <Text style={styles.boxText}>Buy Medicine</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.boxHelp}>
          <View style={styles.boxSpace}>
            <View>
              <Text style={styles.title}>Popular Categories</Text>
            </View>
            <View>
              <Text style={styles.link}>See all</Text>
            </View>
          </View>

          <View style={styles.containerCategories}>
            <TouchableOpacity style={styles.boxCategoriesLeft}>
              <Image source={require('../../assets/image/heart.png')} />
              <Text style={styles.boxTextWhite}>Cardiology</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxCategoriesRight}>
              <Image source={require('../../assets/image/pulmonology.png')} />
              <Text style={styles.boxTextWhite}>Pulmonology</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* End Main */}
      </View>
    </ScrollView>
  );
};

export default Home;
