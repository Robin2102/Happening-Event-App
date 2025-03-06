import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link, router, useNavigation } from 'expo-router';
import { FontAwesome, MaterialIcons, Feather, Ionicons, Entypo } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import styles from './EventDetailsScreen'

export default function EventDetailsScreen() {
  const [activeTab, setActiveTab] = useState('About');
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
       'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
       'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, );

    
    if (!fontsLoaded) {
      return <Text>Loading...</Text>;
    } 
  const eventDetails = {
    title: "The complete AR Rahman Show",
    image: "https://picsum.photos/400/300?concert",
    duration: "2hr 50min",
    ageRating: "5+ years",
    category: "Bollywood, Retro",
    languages: ["English", "Hindi"],
    priceRange: "₹480 - ₹1500",
    location: "North Avenue Grounds, Bangalore",
    date: "Sat 26.Oct.2025",
    time: "7:00 pm",
    seats: "115 seats available",
    policies: [
      "No refunds within 24 hours of event",
      "Children under 5 not allowed",
      "Valid ID required for entry"
    ],
    offers: [
      "10% off on group bookings (4+ tickets)",
      "Free drink with VIP tickets",
      "Early bird discounts available"
    ]
  };

  return (
    <View style={styles.container}>
      {/* Banner */}
      <View style={styles.bannerContainer}>
        <Image source={{ uri: eventDetails.image }} style={styles.bannerImage} />
         {/* Back Button */}
         <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.push('/home')} // Goes back to the previous screen
        >
           <MaterialIcons name="arrow-back-ios" size={24} color="white" />
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity 
          style={styles.shareButton} 
        >
          <Ionicons name="share-social" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.tabBar}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'About' && styles.activeTab]}
            onPress={() => setActiveTab('About')}
          >
            <Text style={[styles.tabText, activeTab === 'About' && styles.activeTabText]}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'Crew' && styles.activeTab]}
            onPress={() => setActiveTab('Crew')}
          >
            <Text style={[styles.tabText, activeTab === 'Crew' && styles.activeTabText]}>Crew</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content}>
        {/* Title Section */}
        <Text style={styles.title}>{eventDetails.title}</Text>

        {/* Action Icons */}
        <View style={styles.iconRow}>
          <View style={styles.iconContainer}>
            <FontAwesome name="heart" size={16} color="#7E2CCF"  />
            <Text style={styles.iconTextPrimary}>160 Interested</Text>
          </View>
          <View style={styles.iconTeaserContainer}>
            <FontAwesome name="play-circle-o" size={16} color="#7E2CCF" />
            <Text style={styles.iconText}>Teaser</Text>
          </View>
          <View style={styles.iconContainer}>
            <Ionicons name="flash-outline" size={16} color="#FF935B" />
            <Text style={styles.iconText1}>Fast Filling</Text>
          </View>
        </View>

        {/* Event Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
           <View style={styles.detailRowBlock}>
            <MaterialCommunityIcons name="timer-sand-full" size={16} color="black" />
            <Text style={styles.detailText}>{eventDetails.duration}</Text>
           </View>
           <View style={styles.detailRowBlock}>
            <FontAwesome name="user" size={16} color="#5F6368" />
            <Text style={styles.detailText}>{eventDetails.ageRating}</Text>
           </View>
           <View style={styles.detailRowBlock}>
            <Ionicons name="musical-note" size={16} color="#5F6368" />
            <Text style={styles.detailText}>{eventDetails.category}</Text>
           </View>
          </View>

          <View style={styles.detailRowBlock}>
            <FontAwesome5 name="globe-europe" size={16} color="#5F6368" />
            <Text style={styles.languageText}>{eventDetails.languages.join(', ')}</Text>
          </View>

          <View style={styles.detailRowBlock}>
            <FontAwesome name="calendar-plus-o" size={16} color="#5F6368" />
            <Text style={styles.dateText}>{eventDetails.date}</Text>
          </View>

          <View style={styles.detailRowBlock}>
            <Text style={styles.detailText}>Prices</Text>
            <Text style={styles.priceText}>{eventDetails.priceRange}</Text>
          </View>
        </View>

        {/* Location Section */}
        <View style={styles.locationCard}>
          <View style={styles.locationHeader}>
            <Feather name="map-pin" size={20} color="#7E2CCF" />
            <Text style={styles.locationTitle}>{eventDetails.location}</Text>
          </View>
          <View style={styles.seatInfo}>
            <Text style={styles.timeText}>{eventDetails.time}</Text>
            <Text style={styles.seatText}>{eventDetails.seats}</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['cafe', 'hotel', 'restaurant', 'parking'].map((icon, index) => (
              <View key={index} style={styles.nearbyIcon}>
                <MaterialIcons 
                  name={icon as any} 
                  size={28} 
                  color="#5F6368" 
                />
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Policies */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Policies & Rules</Text>
          {eventDetails.policies.map((policy, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{policy}</Text>
            </View>
          ))}
        </View>

        {/* Offers */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Offers for You</Text>
          {eventDetails.offers.map((offer, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{offer}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.bookButton}  onPress={() => router.push('/booking')}>
          <Text style={styles.bookButtonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
