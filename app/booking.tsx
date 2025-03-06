import { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link, router, useNavigation } from 'expo-router';
import { FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons';
import styles from './BookingScreen';
import { LinearGradient } from 'expo-linear-gradient';


export default function BookingScreen() {
  const [platinumSeats, setPlatinumSeats] = useState(0);
  const [goldSeats, setGoldSeats] = useState(0);
  const [silverSeats, setSilverSeats] = useState(0);
  const navigation = useNavigation();
  
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Select Seats',
      headerTitleAlign: 'center',
      headerLeft: () => (
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="#5F6368" />
        </TouchableOpacity>
      )
    });
  }, [navigation]);

  const platinumPrice = 1580;
  const goldPrice = 800;
  const silverPrice = 480;

  const totalPrice = platinumSeats * platinumPrice + goldSeats * goldPrice + silverSeats * silverPrice;

  const handleSeatChange = (type: string, delta: number) => {
    if (type === 'platinum') {
      setPlatinumSeats(Math.max(0, Math.min(8, platinumSeats + delta)));
    } else if (type === 'gold') {
      setGoldSeats(Math.max(0, Math.min(10, goldSeats + delta)));
    } else if (type === 'silver') {
      setSilverSeats(Math.max(0, Math.min(15, silverSeats + delta)));
    }
  };

  return (
    <View style={styles.container}>

      <ScrollView style={styles.content}>
        {/* Seating Layout */}
        <View style={styles.seatingLayout}>
          <Text style={styles.stageText}>Stage</Text>
            <LinearGradient
                colors={['#ABAAD4', '#59586E']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.platinumSection}
            >
            <Text style={styles.seatDesc}>
                Platinum Section {'\u20B9'} 1580
            </Text>
          </LinearGradient>
          <LinearGradient
                colors={['#FAC38C', '#947353']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.goldSection}
            >
            <Text style={styles.seatDesc}>
                Gold Section {'\u20B9'} 800
            </Text>
          </LinearGradient>
          <LinearGradient
                colors={['#DBDBDB', '#757575']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.silverSection}
            >
            <Text style={styles.seatDesc}>
                Silver Section {'\u20B9'} 480
            </Text>
          </LinearGradient>
        </View>

        {/* Ticket Selection */}
        <View style={styles.ticketSelection}>
          <View style={styles.ticketRow}>
           <View>
           <View style={styles.ticketClassSection}>
                <FontAwesome name="ticket" size={16} color="#ABAAD4" />
                <Text style={styles.ticketClass}>Platinum Class {'\u20B9'} 1580</Text>
            </View>
            <Text style={styles.seatAvailabiltyText}>8 seats available</Text>
           </View>
            <View style={styles.seatControls}>
              <TouchableOpacity onPress={() => handleSeatChange('platinum', -1)}>
                <Feather name="minus-square" size={16} color="#7E2CCF" />
              </TouchableOpacity>
              <Text style={styles.seatCount}>{platinumSeats}</Text>
              <TouchableOpacity onPress={() => handleSeatChange('platinum', 1)}>
                <Feather name="plus-square" size={16} color="#7E2CCF" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.ticketRow}>
            <View>
            <View style={styles.ticketClassSection}>
                <FontAwesome name="ticket" size={16} color="#FAC38C" />
                <Text style={styles.ticketClass}>Gold Class {'\u20B9'} 800</Text>
            </View>
            <Text style={styles.seatAvailabiltyText}>10 seats available</Text>
            </View>
            <View style={styles.seatControls}>
              <TouchableOpacity onPress={() => handleSeatChange('gold', -1)}>
              <Feather name="minus-square" size={16} color="#7E2CCF" />
              </TouchableOpacity>
              <Text style={styles.seatCount}>{goldSeats}</Text>
              <TouchableOpacity onPress={() => handleSeatChange('gold', 1)}>
                <Feather name="plus-square" size={16} color="#7E2CCF" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.ticketRow}>
           <View>
           <View style={styles.ticketClassSection}>
                <FontAwesome name="ticket" size={16} color="#DCDCDC" />
                <Text style={styles.ticketClass}>Silver Class {'\u20B9'} 480</Text>
            </View>
            <Text style={styles.seatAvailabiltyText}>15 seats available</Text>
           </View>
            <View style={styles.seatControls}>
              <TouchableOpacity onPress={() => handleSeatChange('silver', -1)}>
              <Feather name="minus-square" size={16} color="#7E2CCF" />
              </TouchableOpacity>
              <Text style={styles.seatCount}>{silverSeats}</Text>
              <TouchableOpacity onPress={() => handleSeatChange('silver', 1)}>
                <Feather name="plus-square" size={16} color="#7E2CCF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
            <Text style={styles.totalPrice}>
            <Text style={styles.rupeeIcon}>{'\u20B9'}</Text>
            <Text style={styles.redText}> {totalPrice}</Text>
            <Text style={styles.totalSeatsText}> for {platinumSeats + goldSeats + silverSeats} seats</Text>
            </Text>
            <Text style={styles.taxText}>+199 tax & fees</Text>
        </View>
        <TouchableOpacity style={styles.proceedButton}>
            <Text style={styles.proceedButtonText}>Proceed to Pay</Text>
        </TouchableOpacity>
        </View>
      </View>
  );
}