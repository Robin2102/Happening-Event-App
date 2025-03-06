import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, EvilIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import * as Font from 'expo-font';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'postnobillsjaffna-ExtraBold': require('../assets/fonts/postnobillsjaffna-extrabold.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);
  
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  

  const handleSendOtp = () => {
    setOtpSent(true);
  };

  const handleLogin = () => {
    router.push('/home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Happening</Text>
      <Text style={styles.subtitle}>Login now to find whats happening around you </Text>

      <TextInput
        style={styles.input}
        placeholder="Email address or mobile number"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {otpSent && (
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          value={otp}
          onChangeText={setOtp}
          keyboardType="number-pad"
        />
      )}

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.otpButton} onPress={handleSendOtp}>
        <Text style={styles.otpButtonText}>Send OTP</Text>
      </TouchableOpacity>

      <Text style={styles.socialText}>or</Text>

      <Text style={styles.socialText}>Sign in with other options:</Text>
      
      <View style={styles.socialContainer}>
        <EvilIcons name="sc-twitter" size={32} color="#1DA1F2" />
        <FontAwesome name="instagram" size={28} color="#E1306C" style={styles.icon} />
        <FontAwesome name="facebook-square" size={28} color="#4267B2" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 45,
    fontWeight: '800',
    textAlign: 'center',
    fontFamily: 'PostNoBillsJaffna-ExtraBold',
    marginBottom: 8,
    color: '#7E2CCF'
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 40,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#7E2CCF',
    padding: 15,
    borderRadius: 24,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  otpButton: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30,
  },
  otpButtonText: {
    color: '#7E2CCF',
    fontWeight: 'bold',
  },
  socialText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
  },
  icon: {
    marginHorizontal: 15,
  },
});