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

type SignUpPasswordScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SignUpPassword'
>;

export default function SignUpPasswordScreen({
  navigation,
}: SignUpPasswordScreenProps) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Thành công</Text>

          {/* Success Icon */}
          <View style={styles.iconContainer}>
            <Text style={styles.checkmark}>✓</Text>
          </View>

          <Text style={styles.subtitle}>
            Vui lòng nhập mật khẩu mới của bạn
          </Text>

          {/* Password Input */}
          <Text style={globalStyles.label}>MẬT KHẨU MỚI</Text>
          <TextInput
            style={globalStyles.input}
            placeholder="Nhập mật khẩu"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholderTextColor={COLORS.gray}
          />

          {/* Confirm Password Input */}
          <Text style={globalStyles.label}>NHẬP LẠI MẬT KHẨU</Text>
          <TextInput
            style={globalStyles.input}
            placeholder="Xác nhận mật khẩu"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholderTextColor={COLORS.gray}
          />

          {/* Buttons */}
          <TouchableOpacity
            style={globalStyles.primaryButton}
            onPress={() => navigation.navigate('PasswordResetSuccess')}
          >
            <Text style={globalStyles.buttonText}>Tiếp tục</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={globalStyles.secondaryButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={globalStyles.buttonText}>Quay lại trang đăng nhập</Text>
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
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.darkText,
    textAlign: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#C8E6C9',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  checkmark: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: 20,
  },
});
