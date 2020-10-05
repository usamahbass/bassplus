import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {styles} from '../../styles/chats/styles';

class Schedule extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{uri: 'https://i.ibb.co/SXK1MkR/Eye.png'}}
            style={styles.arrowLeft}
          />
          <Text style={styles.title}>Schedule</Text>
          <Text style={styles.desTitle}>Make a consultation appointment</Text>

          <View style={styles.boxSearch}>
            <Image
              source={{uri: 'https://i.ibb.co/SXsN9Y3/loupe.png'}}
              style={[styles.iconSearch,{marginLeft : 10}]}
            />
            <TextInput placeholder="Search doctor, specialization…" />
            <Image
              source={{uri: 'https://i.ibb.co/n3vy9hQ/Group-2.png'}}
              style={[styles.iconSearch, {height: 70, width: 70, marginRight : 0, marginLeft : 18}]}
            />
          </View>
        </View>

        <View style={[styles.welcome, {margin: 10, height: 150}]}>
          <View style={styles.boxUser}>
            <View style={styles.bioUser}>
              <Image
                source={{uri: 'https://i.ibb.co/grJdQWr/Mask.png'}}
                style={[
                  styles.iconUser,
                  {
                    alignSelf: 'flex-start',
                    alignItems: 'center',
                    marginRight: 8,
                  },
                ]}
              />
              <View style={styles.nameUser}>
                <Text style={styles.tName}>Dr. Wellman Sp.KK</Text>
                <Text style={[styles.status, {color: '#000'}]}>
                  Dermatologist
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={{uri: 'https://i.ibb.co/28QZ7LF/Shape.png'}}
                    style={{height: 10, width: 10}}
                  />
                  <Text
                    style={[
                      styles.desTitle,
                      {
                        fontSize: 8,
                        marginLeft: 0,
                        marginTop: 10,
                        marginBottom: 0,
                        marginBottom: 10,
                        marginLeft: 5,
                      },
                    ]}
                  >
                    Americas Medical City
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 0,
                  }}
                >
                  <Image
                    source={{uri: 'https://i.ibb.co/JRjwr5z/Shape-1.png'}}
                    style={{height: 10, width: 10}}
                  />
                  <Text
                    style={[
                      styles.desTitle,
                      {fontSize: 8, marginLeft: 0, marginLeft: 5},
                    ]}
                  >
                   2.31 km from you
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              marginLeft: 10,
              marginRight: 10,
              height: 50,
              borderTopWidth: 1,
              marginTop: 10,
              borderTopColor: '#B0B0B0',
              flexDirection : 'row',
              justifyContent : 'space-between',
              alignItems : 'center'
            }}
          >
            <View>
              <Text style={{color : 'rgba(0,0,0,0.4)', fontSize : 12}}>Consulting Services from</Text>
              <Text style={{color : '#FF685C', fontSize : 12}}>$ 23.00</Text>
            </View>
            <View style={{backgroundColor : '#384DFE', width : 103, height : 34, alignItems : 'center', justifyContent : 'center', borderRadius : 10}}>
                <Text style={{color: '#fff', fontSize : 12, textAlign : 'center'}}>Make Schedule</Text>
            </View>
          </View>
        </View>
        <View style={[styles.welcome, {margin: 10, height: 150}]}>
          <View style={styles.boxUser}>
            <View style={styles.bioUser}>
              <Image
                source={{uri: 'https://i.ibb.co/grJdQWr/Mask.png'}}
                style={[
                  styles.iconUser,
                  {
                    alignSelf: 'flex-start',
                    alignItems: 'center',
                    marginRight: 8,
                  },
                ]}
              />
              <View style={styles.nameUser}>
                <Text style={styles.tName}>Dr. Albert Sp.KK</Text>
                <Text style={[styles.status, {color: '#000'}]}>
                  Dermatologist
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={{uri: 'https://i.ibb.co/28QZ7LF/Shape.png'}}
                    style={{height: 10, width: 10}}
                  />
                  <Text
                    style={[
                      styles.desTitle,
                      {
                        fontSize: 8,
                        marginLeft: 0,
                        marginTop: 10,
                        marginBottom: 0,
                        marginBottom: 10,
                        marginLeft: 5,
                      },
                    ]}
                  >
                   Americas Hospital
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 0,
                  }}
                >
                  <Image
                    source={{uri: 'https://i.ibb.co/JRjwr5z/Shape-1.png'}}
                    style={{height: 10, width: 10}}
                  />
                  <Text
                    style={[
                      styles.desTitle,
                      {fontSize: 8, marginLeft: 0, marginLeft: 5},
                    ]}
                  >
                    2.31 km from you
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              marginLeft: 10,
              marginRight: 10,
              height: 50,
              borderTopWidth: 1,
              marginTop: 10,
              borderTopColor: '#B0B0B0',
              flexDirection : 'row',
              justifyContent : 'space-between',
              alignItems : 'center'
            }}
          >
            <View>
              <Text style={{color : 'rgba(0,0,0,0.4)', fontSize : 12}}>Consulting Services from</Text>
              <Text style={{color : '#FF685C', fontSize : 12}}>$ 23.00</Text>
            </View>
            <View style={{backgroundColor : '#384DFE', width : 103, height : 34, alignItems : 'center', justifyContent : 'center', borderRadius : 10}}>
                <Text style={{color: '#fff', fontSize : 12, textAlign : 'center'}}>Make Schedule</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Schedule;
