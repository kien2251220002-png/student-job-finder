import React, { useState } from 'react';
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

type VerifyEmailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'VerifyEmail'
>;

export default function VerifyEmailScreen({
  navigation,
}: VerifyEmailScreenProps) {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Kiểm tra email</Text>

        <Text style={styles.subtitle}>
          Chúng tôi đã gửi nhất khẩu khó phức tạp đến địa chỉ email: trmklemvieciam@gmail.com
        </Text>

        {/* Check Email Button */}
        <TouchableOpacity
          style={globalStyles.primaryButton}
          onPress={() => navigation.navigate('VerifyOTP')}
        >
          <Text style={globalStyles.buttonText}>KIỂM TRA EMAIL CỦA BẠN</Text>
        </TouchableOpacity>

        {/* Back Button */}
        <TouchableOpacity
          style={globalStyles.secondaryButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={globalStyles.buttonText}>QUAY LẠI TRANG ĐĂNG NHẬP</Text>
        </TouchableOpacity>

        {/* Didn't receive email */}
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Bạn không nhận được email? </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.footerLink}>Gửi lại</Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 20,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  footerLink: {
    fontSize: 12,
    color: COLORS.secondary,
    fontWeight: '600',
  },
});
