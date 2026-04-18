import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { COLORS } from '../styles/colors';
import { globalStyles } from '../styles/globalStyles';

type VerifyOTPScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'VerifyOTP'
>;

export default function VerifyOTPScreen({
  navigation,
}: VerifyOTPScreenProps) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(59);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Nhập mã OTP của bạn</Text>

        <Text style={styles.subtitle}>
          Vui lòng nhập mã gồm 6 chữ số đã được gửi đến email của bạn
        </Text>

        {/* OTP Input Fields */}
        <View style={styles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="numeric"
              value={value}
              onChangeText={(text) => handleOtpChange(index, text)}
              placeholder="0"
              placeholderTextColor={COLORS.gray}
            />
          ))}
        </View>

        <Text style={styles.timerText}>
          Gửi lại mã sau {String(timeLeft).padStart(2, '0')}:59
        </Text>

        {/* Buttons */}
        <TouchableOpacity
          style={globalStyles.primaryButton}
          onPress={() => navigation.navigate('SignUpPassword')}
        >
          <Text style={globalStyles.buttonText}>Xác nhận mã OTP</Text>
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
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.darkText,
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  otpInput: {
    width: '22%',
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.darkText,
  },
  timerText: {
    textAlign: 'center',
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 20,
  },
});
