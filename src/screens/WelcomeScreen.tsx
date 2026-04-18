import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { COLORS } from '../styles/colors';
import { globalStyles } from '../styles/globalStyles';

type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundGlowTop} />
      <View style={styles.backgroundGlowBottom} />

      <View style={styles.content}>
        <View style={styles.heroCard}>
          <View style={styles.logoSection}>
            <Text style={styles.logoSmall}>SJOB</Text>
            <View style={styles.heroVisual}>
              <View style={styles.jobShadow} />
              <Text style={styles.jobText}>JOB</Text>
            </View>
          </View>

          <Text style={styles.mainTitle}>Real Job, Your Choice</Text>
          <Text style={styles.subtitle}>FIND NOW!!!</Text>

          <View style={styles.buttonSection}>
            <TouchableOpacity
              style={globalStyles.primaryButton}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={globalStyles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.loginSection}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDF4FF',
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backgroundGlowTop: {
    position: 'absolute',
    top: -80,
    right: -60,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  backgroundGlowBottom: {
    position: 'absolute',
    bottom: -100,
    left: -80,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  heroCard: {
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.36)',
    borderRadius: 28,
    paddingVertical: 34,
    paddingHorizontal: 22,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.7)',
    shadowColor: '#8CC8DA',
    shadowOpacity: 0.18,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 18,
  },
  logoSmall: {
    fontSize: 28,
    fontWeight: '700',
    color: 'rgba(48, 168, 76, 0.22)',
    letterSpacing: 2,
    marginBottom: 14,
  },
  heroVisual: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 170,
    width: '100%',
  },
  jobShadow: {
    position: 'absolute',
    bottom: 20,
    width: 190,
    height: 34,
    borderRadius: 40,
    backgroundColor: 'rgba(61, 169, 74, 0.15)',
    transform: [{ scaleX: 1.15 }],
  },
  jobText: {
    fontSize: 64,
    fontWeight: '900',
    color: '#3DA94A',
    letterSpacing: -3,
    textShadowColor: 'rgba(0,0,0,0.12)',
    textShadowOffset: { width: 0, height: 8 },
    textShadowRadius: 12,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.darkText,
    marginTop: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.darkText,
    marginTop: 4,
    marginBottom: 24,
    letterSpacing: 0.4,
  },
  buttonSection: {
    width: '100%',
    marginTop: 4,
  },
  loginSection: {
    flexDirection: 'row',
    marginTop: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 13,
    color: '#244A5B',
  },
  loginLink: {
    fontSize: 13,
    color: '#0D7BD9',
    fontWeight: '700',
  },
});
