import { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Switch, StyleSheet } from 'react-native';
import styles from './LocationModal.style';
import { FontAwesome, MaterialIcons, Feather, Ionicons } from '@expo/vector-icons';

interface LocationModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: (location: string) => void;
  currentLocation: string;
}

const LocationModal = ({ visible, onClose, onConfirm, currentLocation }: LocationModalProps) => {
  const [useCurrentLocation, setUseCurrentLocation] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(currentLocation);
  
  const recentLocations = [
    'Mumbai, Maharashtra',
    'Bengaluru, Karnataka'
  ];

  const handleConfirm = () => {
    onConfirm(selectedLocation);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Select your location</Text>
          </View>

          <View style={styles.switchSection}>
            <Text>Phone Location permission</Text>
            <Switch
              value={useCurrentLocation}
              onValueChange={setUseCurrentLocation}
              trackColor={{ true: '#7E2CCF', false: '#f4f3f4' }}
            />
          </View>

          {/* Current Location */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Current Location</Text>
            <View style={styles.locationItem}>
             <Feather name="map-pin" size={22} color="#5F6368" />
                <View style={styles.localtionNamesSection}>
                    <Text style={styles.cityText}>Bangalore</Text>
                    <Text style={styles.locationText}>{currentLocation}</Text>
                </View>
            </View>
          </View>

          {/* Recent Locations */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Locations</Text>
            {recentLocations.map((location, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.recentLocation}
                onPress={() => setSelectedLocation(location)}
              >
                <Text style={styles.locationText}>{location}</Text>
                <View style={styles.radio}>
                  {selectedLocation === location && <View style={styles.radioSelected} />}
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Confirm Button */}
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LocationModal;