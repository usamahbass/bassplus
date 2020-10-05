import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {styles} from '../../styles/chats/styles';

class Chats extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{uri: 'https://i.ibb.co/SXK1MkR/Eye.png'}}
            style={styles.arrowLeft}
          />
          <Text style={styles.title}>Chat</Text>
          <Text style={styles.desTitle}>Start chatting with the doctor</Text>
          <View style={styles.boxUser}>
            <View style={styles.bioUser}>
              <Image
                source={{uri: 'https://i.ibb.co/grJdQWr/Mask.png'}}
                style={styles.iconUser}
              />
              <View style={styles.nameUser}>
                <Text style={styles.tName}>Dr. Wellman Sp.KK</Text>
                <Text style={styles.status}>Online</Text>
              </View>
            </View>
            <View style={styles.boxTime}>
              <Text style={styles.tName}>XN7Y78-7765</Text>
              <Text style={styles.time}>Mar 04, 2019</Text>
            </View>
          </View>
        </View>
        <View style={styles.welcome}>
          <View style={styles.headWelcome}>
            <Image
              source={{uri: 'https://i.ibb.co/MBYxq3X/Group-2-1.png'}}
              style={styles.iconWelcome}
            />
            <Text>Welcome to MediPlus!</Text>
          </View>
          <View style={styles.desWelcome}>
            <Text style={[styles.desTitleWelcome,{fontSize : 12, color : 'rgba(0,0,0,0.7)'}]}>
              Hi Ainara! Wellman will be here with you shortly. Please describe your medical condition.
            </Text>
          </View>
        </View>
        <View style={styles.message}>
          <View style={styles.tMessage}>
            <Text style={[styles.hi,{fontSize : 12}]}>Hi doc</Text>
          </View>
          <View style={styles.boxMessage} />
          <Image
            source={{uri: 'https://i.ibb.co/grJdQWr/Mask.png'}}
            style={styles.iconUser}
          />
        </View>
        <View style={styles.responMessage}>
          <Image
            source={{uri: 'https://i.ibb.co/grJdQWr/Mask.png'}}
            style={[styles.iconUser, {marginLeft: 20}]}
          />
          <View style={styles.boxresponse} />
          <View style={styles.tResponse}>
            <Text style={{marginLeft: 10, color: '#fff', fontSize : 12}}>
              Hi Ainara. I’m Dr. Wellman Sp.KK. Can I help you?
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={[styles.input,{justifyContent : 'center'}]}>
            <View style={[styles.input,{justifyContent:'space-between', width : '90%',height : 40,backgroundColor : '#F4F5F8'}]}>
              <TextInput
               placeholder="Write a message"
               style={{height : 40}}
                />
              <View style={styles.add}>
                <Text style={{color : '#fff', fontSize : 16, fontWeight : 'bold'}}>+</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Chats;
