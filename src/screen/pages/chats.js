import React from 'react';
import {Image, ScrollView, StatusBar, Text, View} from 'react-native';
import {Content, Container} from '../../components';
import {ChatStyles} from '../../styles/_chats';

const Chats = () => {
  return (
    <ScrollView>
      <Content>
        <Container>
          <StatusBar backgroundColor="#e5e5e5" />
          <View>
            <Text style={ChatStyles.title}>Chat</Text>
            <Text style={ChatStyles.desc}>Start chatting with the doctor</Text>
          </View>

          <View style={ChatStyles.header}>
            <Image source={require('../../assets/image/avatar.png')} />
            <View style={ChatStyles.headerTitle}>
              <Text style={ChatStyles.headerUsername}>Dr. Wellman Sp.KK</Text>
              <Text style={ChatStyles.headerDesc}>Online</Text>
            </View>
          </View>
        </Container>
      </Content>

      <Container>
        <View style={ChatStyles.hero}>
          <Image source={require('../../assets/image/logo-mini.png')} />
          <Text style={ChatStyles.heroTitle}>Welcome to MediPlus!</Text>

          <View style={ChatStyles.divider} />
          <Text style={ChatStyles.heroText} >
            Hi Ainara! Wellman will be here with you shortly. Please describe
            your medical condition.
          </Text>
        </View>
      </Container>
    </ScrollView>
  );
};

export default Chats;
