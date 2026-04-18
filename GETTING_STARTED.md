# Getting Started Guide

## 📱 SJOB - React Native Mobile App

Tài liệu này hướng dẫn bạn cách bắt đầu với ứng dụng SJOB Student Job Finder được xây dựng bằng React Native.

## 🚀 Quick Start

### 1. Cài đặt Node.js
- Tải từ https://nodejs.org/
- Chọn phiên bản LTS (Long Term Support)

### 2. Clone và Setup Dự án

```bash
# Vào thư mục dự án
cd d:\student-job-finder

# Cài đặt dependencies
npm install
```

### 3. Chạy ứng dụng

#### **Trên Web Browser**
```bash
npm run web
```
Ứng dụng sẽ mở trên http://localhost:19006

#### **Trên Android Emulator**
```bash
npm run android
```
Yêu cầu: Android Studio + Emulator đã cài đặt

#### **Trên iOS Simulator** (Mac only)
```bash
npm run ios
```
Yêu cầu: Xcode đã cài đặt

### 4. Development Mode

```bash
# Bắt đầu Expo dev server
npm start

# Sau đó bạn có thể chọn:
# - Nhấn 'w' để chạy trên web
# - Nhấn 'a' để chạy trên Android
# - Nhấn 'i' để chạy trên iOS
```

## 📁 Cấu trúc thư mục

```
student-job-finder/
├── src/
│   ├── screens/              # Các màn hình của ứng dụng
│   │   ├── WelcomeScreen.tsx
│   │   ├── SignUpScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   └── ...
│   ├── navigation/           # Cấu hình điều hướng
│   │   └── RootNavigator.tsx
│   ├── styles/              # Các style toàn cục
│   │   ├── colors.ts
│   │   └── globalStyles.ts
│   ├── components/          # Các component tái sử dụng
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   ├── utils/               # Hàm helper
│   │   └── helpers.ts
│   ├── config/              # Cấu hình ứng dụng
│   │   └── api.ts
│   └── assets/              # Hình ảnh, font
├── App.tsx                  # Entry point chính
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── app.json                 # Expo config
└── babel.config.js          # Babel config
```

## 🎨 Các Màn Hình

### 1. **Welcome Screen** (Màn hình chào mừng)
- Hiển thị logo SJOB
- Nút "Get Started" để đăng ký
- Link "Login" để đăng nhập

### 2. **Sign Up Screen** (Đăng ký)
- Thông báo đăng ký thành công
- Nút "Bắt đầu ngay"

### 3. **Sign Up Password Screen** (Đặt mật khẩu)
- Nhập mật khẩu mới
- Xác nhận mật khẩu
- Nút "Tiếp tục"

### 4. **Verify OTP Screen** (Xác minh OTP)
- 4 ô nhập mã OTP
- Bộ đếm thời gian (00:59)
- Nút "Xác nhận mã OTP"

### 5. **Verify Email Screen** (Kiểm tra email)
- Thông báo gửi mã đến email
- Nút "Kiểm tra Email của Bạn"
- Link "Gửi lại"

### 6. **Forgot Password Screen** (Quên mật khẩu)
- Nhập email
- Nút "Lấy lại mật khẩu"

### 7. **Login Screen** (Đăng nhập)
- Nhập email
- Nhập mật khẩu
- Checkbox "Nhớ tài khoản"
- Nút "Đăng nhập"
- Nút "Đăng nhập bằng Google"
- Link "Quên mật khẩu"

### 8. **Home Screen** (Danh sách công việc)
- Tìm kiếm công việc
- Danh sách công việc nổi bật
- Card công việc với chi tiết
- Nút "Xem chi tiết"

## 🎨 Màu sắc chính

| Tên | Mã hex | Sử dụng |
|-----|--------|--------|
| Primary | #2DA84F | Nút chính, chữ nhấn |
| Secondary | #E8A520 | Nút phụ |
| Background | #F5F5F5 | Nền màn hình |
| Dark Text | #1A1A4D | Tiêu đề |
| Light Gray | #D0D0D0 | Viền, ngăn cách |

## 🔧 Thêm một tính năng mới

### Bước 1: Tạo screen mới
```typescript
// src/screens/NewScreen.tsx
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function NewScreen() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Text>Screen mới</Text>
    </SafeAreaView>
  );
}
```

### Bước 2: Thêm vào navigator
```typescript
// src/navigation/RootNavigator.tsx
<Stack.Screen name="NewScreen" component={NewScreen} />
```

### Bước 3: Điều hướng tới screen
```typescript
navigation.navigate('NewScreen');
```

## 📦 Các thư viện chính

- **React Native**: Framework mobile
- **Expo**: Platform phát triển React Native
- **React Navigation**: Quản lý điều hướng
- **TypeScript**: Type-safe JavaScript

## 🐛 Gỡ lỗi

### Vấn đề: Ứng dụng không chạy

```bash
# Xóa node_modules và reinstall
rm -r node_modules
npm install

# Xóa cache Expo
npm start -- -c
```

### Vấn đề: Lỗi TypeScript

```bash
# Kiểm tra các lỗi TypeScript
npm run typecheck
```

### Vấn đề: Port 19006 đã được sử dụng

```bash
# Chạy trên port khác
expo start --localhost
```

## 📱 Kiểm tra trên thiết bị thực

### iOS
1. Cài Expo Go từ App Store
2. Quét QR code từ terminal

### Android
1. Cài Expo Go từ Google Play
2. Quét QR code từ terminal

## 🚀 Build cho Production

### Android APK
```bash
eas build --platform android
```

### iOS IPA
```bash
eas build --platform ios
```

## 📚 Tài liệu bổ sung

- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)

## 💡 Tips

- Sử dụng `Ctrl+Shift+R` để reload app
- Sử dụng `Ctrl+M` (Android) hoặc `Cmd+D` (iOS) để mở menu Dev
- Cài đặt React Native Debugger để debug tốt hơn

## 🤝 Hỗ trợ

Nếu bạn gặp vấn đề, vui lòng:
1. Kiểm tra terminal có lỗi gì không
2. Xóa cache và reinstall
3. Tham khảo tài liệu chính thức
