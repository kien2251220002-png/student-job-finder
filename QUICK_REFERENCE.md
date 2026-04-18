# Quick Reference Guide - SJOB React Native

## 📱 Màn hình & Điều hướng

| Màn hình | Route | Mô tả |
|---------|-------|-------|
| Welcome | `Welcome` | Trang chủ - Chào mừng |
| Sign Up | `SignUp` | Đăng ký thành công |
| Set Password | `SignUpPassword` | Nhập mật khẩu mới |
| Verify OTP | `VerifyOTP` | Xác minh mã OTP |
| Verify Email | `VerifyEmail` | Kiểm tra email |
| Forgot Password | `ForgotPassword` | Quên mật khẩu |
| Login | `Login` | Đăng nhập |
| Home | `Home` | Danh sách công việc |

## 🔑 Màu sắc

```typescript
import { COLORS } from '../styles/colors';

COLORS.primary        // #2DA84F - Xanh lá
COLORS.secondary      // #E8A520 - Vàng cam
COLORS.background     // #F5F5F5 - Xám nhạt
COLORS.white          // #FFFFFF - Trắng
COLORS.black          // #000000 - Đen
COLORS.darkText       // #1A1A4D - Text chính
COLORS.textSecondary  // #666666 - Text phụ
```

## 🎯 Global Styles

```typescript
import { globalStyles } from '../styles/globalStyles';

globalStyles.container           // Flex container với padding
globalStyles.centeredContainer   // Container có center
globalStyles.primaryButton       // Nút xanh chính
globalStyles.secondaryButton     // Nút vàng phụ
globalStyles.buttonText          // Text cho nút
globalStyles.input               // Input field
globalStyles.label               // Label cho form
globalStyles.title               // Tiêu đề 24px
globalStyles.subtitle            // Subtitle 16px
```

## 🧩 Component có sẵn

### Button Component
```typescript
import Button from '../components/Button';

<Button
  title="Click me"
  onPress={() => console.log('Clicked')}
  variant="primary"  // 'primary' | 'secondary'
  loading={false}
  disabled={false}
/>
```

### Input Component
```typescript
import Input from '../components/Input';

<Input
  placeholder="Enter text"
  value={value}
  onChangeText={setValue}
  error={errorMessage}
/>
```

## 🧪 Mẫu Screen mới

```typescript
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { COLORS } from '../styles/colors';
import { globalStyles } from '../styles/globalStyles';

type MyScreenProps = NativeStackScreenProps<RootStackParamList, 'ScreenName'>;

export default function MyScreen({ navigation }: MyScreenProps) {
  const [state, setState] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={globalStyles.title}>My Screen</Text>
          
          {/* Content goes here */}
          
          <TouchableOpacity
            style={globalStyles.primaryButton}
            onPress={() => navigation.navigate('NextScreen')}
          >
            <Text style={globalStyles.buttonText}>Next</Text>
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
  },
  content: {
    padding: 20,
  },
});
```

## 📦 Thêm Screen mới

### Step 1: Tạo screen file
```bash
# Tạo file src/screens/MyNewScreen.tsx
```

### Step 2: Thêm vào RootNavigator
```typescript
// src/navigation/RootNavigator.tsx

// Import
import MyNewScreen from '../screens/MyNewScreen';

// Add to type
export type RootStackParamList = {
  // ... existing
  MyNewScreen: undefined;
};

// Add to Stack
<Stack.Screen name="MyNewScreen" component={MyNewScreen} />
```

### Step 3: Điều hướng
```typescript
// Từ màn hình khác
navigation.navigate('MyNewScreen');
```

## 🔄 State Management

### Sử dụng useState
```typescript
const [email, setEmail] = useState('');
const [loading, setLoading] = useState(false);
const [errors, setErrors] = useState({});
```

## 🌐 Gọi API

### Fetch example
```typescript
const fetchData = async () => {
  try {
    setLoading(true);
    const response = await fetch(
      'https://api.example.com/endpoint',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: value })
      }
    );
    
    if (!response.ok) throw new Error('Network error');
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.error('Error:', error);
    setErrors({ api: 'Failed to fetch' });
  } finally {
    setLoading(false);
  }
};
```

## ✅ Validation

```typescript
import { 
  validateEmail, 
  validatePassword, 
  validatePhone 
} from '../utils/helpers';

// Usage
if (!validateEmail(email)) {
  setErrors({ email: 'Invalid email' });
}

if (!validatePassword(password)) {
  setErrors({ password: 'Password too short' });
}
```

## 📱 Responsive Design

```typescript
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const isSmallScreen = width < 375;
const isLargeScreen = width > 600;
```

## 🎨 Custom StyleSheet

```typescript
const styles = StyleSheet.create({
  customButton: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  customText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.darkText,
  },
});
```

## 🔗 Navigation Patterns

### Navigate with params
```typescript
navigation.navigate('Details', { id: 123 });

// Receive params
const Details = ({ route }) => {
  const { id } = route.params;
};
```

### Go back
```typescript
navigation.goBack();
navigation.pop();
```

### Replace screen
```typescript
navigation.replace('Home');
```

## 📝 TypeScript Tips

### Define props
```typescript
interface MyProps {
  title: string;
  onPress: () => void;
  optional?: string;
}
```

### Define state
```typescript
interface User {
  id: number;
  email: string;
  name: string;
}

const [user, setUser] = useState<User | null>(null);
```

## 🚀 Commands

```bash
# Start dev server
npm start

# Run on web
npm run web

# Run on Android
npm run android

# Run on iOS
npm run ios

# Install dependencies
npm install

# Clear cache
npm start -- -c

# Build for production
eas build --platform android
eas build --platform ios
```

## 🐛 Debug

### React Native Debugger
```bash
# Install globally
npm install -g react-native-debugger

# Open DevTools in app: Ctrl+D (Android) / Cmd+D (iOS)
```

### Console logging
```typescript
console.log('Debug:', variable);
console.warn('Warning:', message);
console.error('Error:', error);
```

## 📚 Tài liệu

- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)

---

⭐ **Tip**: Bookmark this guide for quick reference!
