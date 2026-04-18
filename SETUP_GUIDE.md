# SJOB - Student Job Finder (React Native)

Ứng dụng React Native để sinh viên tìm kiếm việc làm part-time và thực tập.

## Cấu trúc dự án

```
src/
├── screens/          # Tất cả các màn hình
│   ├── WelcomeScreen.tsx
│   ├── SignUpScreen.tsx
│   ├── SignUpSuccessScreen.tsx
│   ├── SignUpPasswordScreen.tsx
│   ├── VerifyOTPScreen.tsx
│   ├── VerifyEmailScreen.tsx
│   ├── ForgotPasswordScreen.tsx
│   ├── LoginScreen.tsx
│   └── HomeScreen.tsx
├── navigation/       # Quản lý điều hướng
│   └── RootNavigator.tsx
├── styles/          # CSS/Styling
│   ├── colors.ts
│   └── globalStyles.ts
├── components/      # Các component tái sử dụng
└── assets/          # Hình ảnh, fonts, etc
```

## Các màn hình

1. **Welcome Screen** - Màn hình chào mừng với nút "Get Started"
2. **Sign Up Screen** - Đăng ký thành công
3. **Sign Up Password Screen** - Nhập mật khẩu mới
4. **Verify OTP Screen** - Xác minh mã OTP
5. **Verify Email Screen** - Kiểm tra email
6. **Forgot Password Screen** - Quên mật khẩu
7. **Login Screen** - Đăng nhập
8. **Home Screen** - Danh sách công việc

## Cài đặt

### Yêu cầu
- Node.js (v16 hoặc cao hơn)
- npm hoặc yarn
- Expo CLI

### Bước cài đặt

1. **Cài đặt dependencies**
```bash
npm install
# hoặc
yarn install
```

2. **Cài đặt Expo CLI** (nếu chưa có)
```bash
npm install -g expo-cli
```

3. **Chạy ứng dụng**

**Chạy trên web:**
```bash
npm run web
# hoặc
expo start --web
```

**Chạy trên Android:**
```bash
npm run android
# hoặc
expo start --android
```

**Chạy trên iOS:**
```bash
npm run ios
# hoặc
expo start --ios
```

## Tính năng

✅ Màn hình chào mừng với giao diện modern
✅ Đăng ký tài khoản
✅ Xác minh email với OTP
✅ Đặt lại mật khẩu
✅ Đăng nhập
✅ Danh sách công việc
✅ Responsive design
✅ Điều hướng suôn sẻ giữa các màn hình

## Color Scheme

- Primary: #2DA84F (Xanh lá)
- Secondary: #E8A520 (Vàng cam)
- Background: #F5F5F5 (Xám nhạt)
- White: #FFFFFF
- Dark Text: #1A1A4D

## Công nghệ sử dụng

- React Native
- Expo
- TypeScript
- React Navigation
- StyleSheet

## Các bước tiếp theo

1. Kết nối với backend API
2. Thêm xác thực (Authentication)
3. Implement tính năng tìm kiếm công việc
4. Thêm chi tiết công việc
5. Quản lý hồ sơ người dùng
6. Push notifications

## Ghi chú

- Ứng dụng được xây dựng 100% theo thiết kế trong các hình ảnh
- Hỗ trợ cả iOS, Android, và Web
- Sử dụng các icon emoji cho giao diện đơn giản
- Có thể tích hợp icons thực tế từ thư viện (như react-native-vector-icons)

## License

MIT
