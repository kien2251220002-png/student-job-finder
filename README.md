# SJOB - Student Job Finder (React Native)

<div align="center">

![SJOB](https://img.shields.io/badge/SJOB-Student%20Job%20Finder-green)
![React Native](https://img.shields.io/badge/React%20Native-0.72.4-blue)
![License](https://img.shields.io/badge/license-MIT-green)

**Ứng dụng mobile tìm kiếm việc làm cho sinh viên**

[Hướng Dẫn](#-hướng-dẫn-cài-đặt--chạy) • [Cấu Trúc](#-cấu-trúc-dự-án) • [Tính Năng](#-tính-năng) • [Công Nghệ](#-công-nghệ)

</div>

---

## 📖 Giới thiệu

**SJOB** là một ứng dụng React Native được xây dựng để giúp sinh viên dễ dàng tìm kiếm, ứng tuyển và quản lý các cơ hội việc làm part-time và thực tập. Ứng dụng có giao diện hiện đại, dễ sử dụng và được thiết kế để chạy trên iOS, Android và Web.

## ✨ Tính năng

- ✅ **Đăng ký & Đăng nhập** - Xác minh email với OTP
- ✅ **Quên mật khẩu** - Đặt lại mật khẩu an toàn
- ✅ **Danh sách công việc** - Xem công việc nổi bật
- ✅ **Tìm kiếm công việc** - Tìm kiếm theo từ khóa
- ✅ **Chi tiết công việc** - Xem thông tin chi tiết
- ✅ **Responsive Design** - Tương thích tất cả kích thước màn hình
- ✅ **Dark/Light Mode Ready** - Hỗ trợ theme tối/sáng

## 🛠️ Công nghệ

| Công Nghệ | Phiên Bản | Mục Đích |
|-----------|----------|---------|
| React Native | 0.72.4 | Framework mobile |
| Expo | 49.0.0 | Platform phát triển |
| TypeScript | 5.0 | Type-safe language |
| React Navigation | 6.1.9 | Quản lý điều hướng |
| StyleSheet | Built-in | Styling |

## 📋 Yêu cầu hệ thống

- **Node.js**: v16.0.0 hoặc cao hơn
- **npm**: v8.0.0 hoặc cao hơn
- **Expo CLI**: v49.0.0 hoặc cao hơn

**Để chạy trên thiết bị:**
- **Android**: Android Studio + Emulator hoặc thiết bị thực
- **iOS**: Xcode + Simulator hoặc thiết bị thực (macOS)
- **Web**: Chrome, Firefox, Safari hoặc browser khác

## ⚙️ Hướng dẫn cài đặt & chạy

### 1. Clone dự án
```bash
cd d:\student-job-finder
```

### 2. Cài đặt dependencies
```bash
npm install
# hoặc sử dụng yarn
yarn install
```

### 3. Tạo file .env (optional)
```bash
cp .env.example .env
```

### 4. Chạy ứng dụng

#### 🌐 Chạy trên Web
```bash
npm run web
```
Truy cập: http://localhost:19006

#### 📱 Chạy trên Android
```bash
npm run android
```
Yêu cầu: Android Emulator hoặc thiết bị thực được kết nối

#### 🍎 Chạy trên iOS
```bash
npm run ios
```
Yêu cầu: macOS + Xcode

#### 🚀 Chạy với Expo CLI
```bash
npm start
# Nhấn:
# w - Web
# a - Android
# i - iOS
# j - Debugger
```

## 📁 Cấu trúc dự án

```
student-job-finder/
│
├── src/
│   ├── screens/                    # 📱 Tất cả các màn hình
│   │   ├── WelcomeScreen.tsx       # Màn hình chào mừng
│   │   ├── SignUpScreen.tsx        # Đăng ký thành công
│   │   ├── SignUpPasswordScreen.tsx # Đặt mật khẩu
│   │   ├── VerifyOTPScreen.tsx     # Xác minh OTP
│   │   ├── VerifyEmailScreen.tsx   # Kiểm tra email
│   │   ├── ForgotPasswordScreen.tsx# Quên mật khẩu
│   │   ├── LoginScreen.tsx         # Đăng nhập
│   │   └── HomeScreen.tsx          # Danh sách công việc
│   │
│   ├── navigation/                 # 🧭 Điều hướng
│   │   └── RootNavigator.tsx       # Navigator chính
│   │
│   ├── components/                 # 🧩 Component tái sử dụng
│   │   ├── Button.tsx              # Nút bấm
│   │   └── Input.tsx               # Input field
│   │
│   ├── styles/                     # 🎨 Styling
│   │   ├── colors.ts               # Định nghĩa màu
│   │   └── globalStyles.ts         # Global styles
│   │
│   ├── utils/                      # 🔧 Tiện ích
│   │   └── helpers.ts              # Helper functions
│   │
│   ├── config/                     # ⚙️ Cấu hình
│   │   └── api.ts                  # API config
│   │
│   └── assets/                     # 📦 Assets
│
├── App.tsx                         # 🔴 Entry point
├── app.json                        # Expo config
├── tsconfig.json                   # TypeScript config
├── babel.config.js                 # Babel config
├── package.json                    # Dependencies
├── .gitignore
├── .env.example
├── GETTING_STARTED.md              # Hướng dẫn bắt đầu
├── SETUP_GUIDE.md                  # Hướng dẫn cài đặt
└── README.md                       # File này
```

## 🎨 Giao diện & Thiết kế

### Màu sắc chính

```typescript
const COLORS = {
  primary: '#2DA84F',        // Xanh lá - Nút chính
  secondary: '#E8A520',      // Vàng cam - Nút phụ
  background: '#F5F5F5',     // Xám nhạt - Nền
  white: '#FFFFFF',          // Trắng
  darkText: '#1A1A4D',       // Xanh đậm - Text chính
  lightGray: '#F0F0F0',      // Xám nhạt
  gray: '#D0D0D0',           // Xám
  textSecondary: '#666666',  // Xám đậm - Text phụ
};
```

### Typography

- **Tiêu đề chính**: 24px, Bold
- **Tiêu đề phụ**: 18px, Semi-bold
- **Body text**: 14-16px, Regular
- **Labels**: 14px, Medium
- **Small text**: 12px, Regular

## 📖 Hướng dẫn sử dụng

### Điều hướng giữa các màn hình

```typescript
// Đi tới màn hình khác
navigation.navigate('Login');

// Trở về màn hình trước
navigation.goBack();

// Thay thế stack
navigation.replace('Home');
```

### Sử dụng state

```typescript
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
```

### Tạo một màn hình mới

```typescript
// src/screens/NewScreen.tsx
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type NewScreenProps = NativeStackScreenProps<RootStackParamList, 'NewScreen'>;

export default function NewScreen({ navigation }: NewScreenProps) {
  return (
    <SafeAreaView>
      <Text>Hello World</Text>
    </SafeAreaView>
  );
}
```

## 🔌 Kết nối API

### Ví dụ fetch dữ liệu

```typescript
const fetchJobs = async () => {
  try {
    const response = await fetch('https://api.example.com/jobs');
    const data = await response.json();
    setJobs(data);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## 🧪 Testing

```bash
# Chạy tests
npm test

# Watch mode
npm test -- --watch
```

## 📦 Build cho Production

### Android APK
```bash
eas build --platform android
```

### iOS App
```bash
eas build --platform ios
```

### Web
```bash
expo export --platform web
```

## 🐛 Khắc phục sự cố

### ❌ Lỗi: "Cannot find module"
```bash
npm install
expo prebuild --clean
```

### ❌ Lỗi: "Port 19006 already in use"
```bash
expo start -- --localhost
```

### ❌ Lỗi: "Android emulator not found"
- Mở Android Studio
- Chạy emulator từ AVD Manager

### ❌ Lỗi: TypeScript

```bash
# Kiểm tra lỗi TypeScript
tsc --noEmit
```

## 📚 Tài liệu tham khảo

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation Guide](https://reactnavigation.org/docs/getting-started)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🔐 Bảo mật

- ⚠️ **Không** lưu mật khẩu trong plain text
- ⚠️ Sử dụng HTTPS cho API calls
- ⚠️ Validate tất cả user input
- ✅ Sử dụng environment variables cho secrets

## 🤝 Góp ý & Đóng góp

Các góp ý và đóng góp được chào đón! Vui lòng:

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License

MIT License - xem file [LICENSE](LICENSE) để chi tiết

## 👨‍💻 Tác giả

Được xây dựng với ❤️ cho sinh viên Việt Nam

## 📞 Liên hệ

- 📧 Email: support@sjob.example.com
- 🐦 Twitter: [@sjobfinder](https://twitter.com/sjobfinder)
- 💬 Discord: [Join Server](https://discord.gg/sjob)

---

<div align="center">

Made with ❤️ by SJOB Team

⭐ Nếu bạn thích dự án này, vui lòng star! ⭐

</div>
#   T H M D  
 #   T H M D  
 