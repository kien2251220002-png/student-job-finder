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

type SignUpSuccessScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpSuccess'>;

export default function SignUpSuccessScreen({ navigation }: SignUpSuccessScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Đăng ký thành công!</Text>

        {/* Success Icon */}
        <View style={styles.iconContainer}>
          <Text style={styles.checkmark}>✓</Text>
        </View>

        <Text style={styles.message}>Chúc mừng bạn đã đăng ký thành công.</Text>

        {/* Buttons */}
        <TouchableOpacity
          style={globalStyles.primaryButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={globalStyles.buttonText}>Bắt đầu ngay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.darkText,
    marginBottom: 40,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#C8E6C9',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  checkmark: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  message: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginVertical: 20,
  },
});
