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

type PasswordResetSuccessScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'PasswordResetSuccess'
>;

export default function PasswordResetSuccessScreen({ navigation }: PasswordResetSuccessScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Thành công</Text>
        <Text style={styles.description}>
          Mật khẩu của bạn đã được cập nhật, vui lòng thay đổi mật khẩu thường xuyên để tránh tình trạng này xảy ra.
        </Text>

        <View style={styles.imagePlaceholder}>
          <Text style={styles.imageIcon}>✉️</Text>
        </View>

        <TouchableOpacity style={globalStyles.primaryButton} onPress={() => navigation.navigate('Login')}>
          <Text style={globalStyles.buttonText}>TIẾP TỤC</Text>
        </TouchableOpacity>

        <TouchableOpacity style={globalStyles.secondaryButton} onPress={() => navigation.navigate('Login')}>
          <Text style={globalStyles.buttonText}>QUAY LẠI TRANG ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  card: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 28,
    paddingHorizontal: 22,
    paddingVertical: 36,
    alignItems: 'center',
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
  description: {
    fontSize: 13,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 19,
    marginBottom: 30,
  },
  imagePlaceholder: {
    width: 150,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  imageIcon: {
    fontSize: 42,
  },
});