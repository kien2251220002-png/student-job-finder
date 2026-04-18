import React from 'react';
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

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export default function SignUpScreen({ navigation }: SignUpScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Text style={styles.title}>Đăng ký tài khoản</Text>
          <Text style={styles.subtitle}>Vui lòng nhập đầy đủ thông tin</Text>

          <Text style={globalStyles.label}>Tên đầy đủ</Text>
          <TextInput style={globalStyles.input} placeholder="Nguyen Van A" placeholderTextColor={COLORS.gray} />

          <Text style={globalStyles.label}>Email</Text>
          <TextInput style={globalStyles.input} placeholder="timkiemvieclam@gmail.com" placeholderTextColor={COLORS.gray} />

          <Text style={globalStyles.label}>Mật khẩu</Text>
          <View style={styles.passwordContainer}>
            <TextInput style={styles.passwordInput} placeholder="Nhập mật khẩu" secureTextEntry placeholderTextColor={COLORS.gray} />
            <Text style={styles.eyeIcon}>👁</Text>
          </View>

          <View style={styles.rememberContainer}>
            <View style={styles.checkbox} />
            <Text style={styles.rememberText}>Nhớ tài khoản</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotText}>Bạn quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={globalStyles.primaryButton} onPress={() => navigation.navigate('SignUpSuccess')}>
            <Text style={globalStyles.buttonText}>ĐĂNG KÝ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={globalStyles.secondaryButton} onPress={() => {}}>
            <Text style={globalStyles.buttonText}>G ĐĂNG NHẬP BẰNG GOOGLE</Text>
          </TouchableOpacity>

          <View style={styles.linkRow}>
            <Text style={styles.message}>Bạn đã có tài khoản? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginLink}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 28,
    paddingHorizontal: 22,
    paddingVertical: 36,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 10 },
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.darkText,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 26,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    marginTop: 10,
    paddingRight: 15,
    backgroundColor: '#FBFBFD',
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
  },
  eyeIcon: {
    fontSize: 18,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 4,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E2E2EA',
    backgroundColor: '#EFEFF7',
  },
  rememberText: {
    fontSize: 12,
    color: '#C2C2CB',
    marginLeft: 8,
    flex: 1,
  },
  forgotText: {
    fontSize: 12,
    color: COLORS.darkText,
    fontWeight: '600',
  },
  linkRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  message: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  loginLink: {
    fontSize: 13,
    color: '#F39B1C',
    fontWeight: '700',
  },
});