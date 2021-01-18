import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScheduleStyles} from '../../styles/_schedule';
import Search from '../../components/search';

const Schedule = () => {
  return (
    <ScrollView>
      <View style={ScheduleStyles.content}>
        <View style={ScheduleStyles.container}>
          <StatusBar backgroundColor="#E5E5E5" />
          <Text style={ScheduleStyles.title}>Schedule</Text>
          <Text style={ScheduleStyles.desc}>
            Make a consultation appointment
          </Text>
          <Search
            placeholder="Search doctor, specialization…"
            placeholderTextColor="#b0b0b0"
          />

          {/* Card List */}

          {Array.from(new Array(2)).map((el, i) => (
            <View key={i} style={ScheduleStyles.cardList}>
              <View style={ScheduleStyles.cardHeader}>
                <Image source={require('../../assets/image/avatar.png')} />
                <View style={ScheduleStyles.cardTitle}>
                  <Text style={ScheduleStyles.cardUsername}>
                    Dr. Wellman Sp.KK
                  </Text>
                  <Text style={ScheduleStyles.cardDesc}>Dermatologist</Text>
                </View>
              </View>

              <View style={ScheduleStyles.cardBody}>
                <View style={ScheduleStyles.cardBodyDesc}>
                  <Image
                    source={require('../../assets/image/medical-blue.png')}
                  />
                  <Text style={ScheduleStyles.cardBodyText}>
                    Americas Medical City
                  </Text>
                </View>
                <View style={ScheduleStyles.cardBodyDesc}>
                  <Image source={require('../../assets/image/location.png')} />
                  <Text style={ScheduleStyles.cardBodyText}>
                    2.31 km from you
                  </Text>
                </View>
              </View>

              <View style={ScheduleStyles.separator} />

              <View style={ScheduleStyles.cardFooter}>
                <View>
                  <Text style={ScheduleStyles.textTitle}>
                    Consulting Services from
                  </Text>
                  <Text style={ScheduleStyles.textPrice}>$ 23.00</Text>
                </View>

                <TouchableOpacity style={ScheduleStyles.button}>
                  <Text style={ScheduleStyles.buttonText}>Make Schedule</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Schedule;
