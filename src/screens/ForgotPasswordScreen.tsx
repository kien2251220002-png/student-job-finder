import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { COLORS } from '../styles/colors';
import { globalStyles } from '../styles/globalStyles';

type ForgotPasswordScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPassword'
>;

export default function ForgotPasswordScreen({
  navigation,
}: ForgotPasswordScreenProps) {
  const [email, setEmail] = useState('trmklemvieciam@gmail.com');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Quên mật khẩu?</Text>

          <Text style={styles.subtitle}>
            Để đặt lại mật khẩu, bạn cần nhập địa chỉ email hoặc số điện thoại của bạn.
          </Text>

          {/* Email Input */}
          <Text style={globalStyles.label}>Email</Text>
          <TextInput
            style={globalStyles.input}
            placeholder="Nhập email của bạn"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor={COLORS.gray}
          />

          {/* Buttons */}
          <TouchableOpacity
            style={globalStyles.primaryButton}
            onPress={() => navigation.navigate('VerifyEmail')}
          >
            <Text style={globalStyles.buttonText}>LẤY LẠI MẬT KHẨU</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={globalStyles.secondaryButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={globalStyles.buttonText}>QUAY LẠI TRANG ĐĂNG NHẬP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    paddingVertical: 40,
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
});
