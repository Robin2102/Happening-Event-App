import { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Link, router, useNavigation } from 'expo-router';
import { FontAwesome, MaterialIcons, Feather, Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { categories, sections } from './data';
import LocationModal from '@/components/LocationModal';
import styles from './HomeScreen.styles'

export default function HomeScreen() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('Entertainment');
  const [notificationCount] = useState(3);
  const tabs = ['Entertainment', 'Academic', 'Volunteering'];
  const [locationModalVisible, setLocationModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('#2 KR Layout, Indiranagar');
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Happening',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#7E2CCF',
        fontFamily: 'PostNoBillsJaffna-ExtraBold',
      },
      headerLeft: () => <View />,
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 16 }}>
          <Ionicons name="notifications-outline" size={24} color="#7E2CCF" />
          <View
            style={{
              position: 'absolute',
              top: -5,
              right: -5,
              backgroundColor: '#7E2CCF',
              borderRadius: 10,
              width: 20,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 12 }}>3</Text>
          </View>
        </TouchableOpacity>
      ),
    });
      async function loadFonts() {
        await Font.loadAsync({
         'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
         'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        });
        setFontsLoaded(true);
      }
      loadFonts();
    }, []);

    if (!fontsLoaded) {
      return <Text>Loading...</Text>;
    }

  const renderCategoryRow = (data: any[]) => (
    <View style={styles.categoryRow}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.map((item, index) => (
        <TouchableOpacity key={index} style={styles.categoryCard}>
          <Image source={{ uri: item.image }} style={styles.categoryImage} />
          <View style={styles.imageOverlay} />
          <Text style={styles.categoryTitle}>{item.title}</Text>
        </TouchableOpacity>
      ))}
      </ScrollView>
    </View>
  );

  const renderHorizontalSection = (title: string, data: any[], type: 'popular' | 'resume' | 'offer' | 'seasonal') => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={[
              styles.horizontalCard,
              type === 'popular' && styles.popularCard,
              type === 'resume' && styles.resumeCard,
              type === 'offer' && styles.offerCard,
            ]}
            onPress={() => router.push('/event-details')}
          >
            {type === 'offer' && (
              <View style={styles.offerBadge}>
                <Text style={{ color: 'white', fontSize: 12 }}>OFFER</Text>
              </View>
            )}
            
            <Image 
              source={{ uri: item.image }} 
              style={[
                styles.horizontalImage,
                type === 'popular' && styles.popularImage,
                type === 'resume' && styles.resumeImage,
              ]} 
            />
            {type === 'offer' && (
            <View style={styles.offerOverlay}>
              <Text style={styles.offerMainText}>{item.text}</Text>
              <Text style={styles.offerSubText}>{item.title}</Text>
            </View>
          )}
          
          {type === 'offer' && (
            <View style={styles.offerBadge}>
              <Text style={styles.offerCode}>{item.code}</Text>
            </View>
          )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
  
  const renderSeasonalSection = (title: string, data: any[]) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.seasonalRow}>
          {data.map((item, index) => (
            <TouchableOpacity key={index} style={[styles.categoryCard, styles.seasonalCard]}>
              <Image source={{ uri: item.image }} style={styles.categoryImage} />
              <View style={styles.imageOverlay} />
              <Text style={styles.categoryTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
  

  return (
    <View style={styles.container}>
     
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Location Section */}
        <TouchableOpacity onPress={() => setLocationModalVisible(true)}>
            <View style={styles.locationSection}>
                <Feather name="map-pin" size={22} color="#5F6368" />
                <View style={styles.localtionNamesSection}>
                    <Text style={styles.cityText}>Bangalore</Text>
                    <Text style={styles.locationText}>{selectedLocation}</Text>
                </View>
            </View>
        </TouchableOpacity>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Category Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pick your category</Text>
          {renderCategoryRow(categories.slice(0, 5))}
          {renderCategoryRow(categories.slice(5))}
        </View>

        {renderHorizontalSection('Most Popular', sections.popular, 'popular')}
        {renderHorizontalSection('Resume your booking', sections.resumeBooking, 'resume')}
        {renderHorizontalSection('Recommended for you', sections.recommended, 'popular')}
        {renderHorizontalSection('Offers for you', sections.offers, 'offer')}
        {renderSeasonalSection('Seasonal events', sections.seasonal)}
      </ScrollView>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        {['home', 'events', 'search', 'liked', 'profile'].map((icon, index) => (
          <TouchableOpacity key={index} style={styles.footerIcon}>
            <MaterialIcons
              name={
                icon === 'home' ? 'home' :
                icon === 'events' ? 'event' :
                icon === 'search' ? 'search' :
                icon === 'liked' ? 'favorite-border' : 'person-outline'
              }
              size={24}
              color="#666"
            />
          </TouchableOpacity>
        ))}
      </View>
      <LocationModal
        visible={locationModalVisible}
        onClose={() => setLocationModalVisible(false)}
        onConfirm={(location) => setSelectedLocation(location)}
        currentLocation={selectedLocation}
        />
    </View>
  );
}