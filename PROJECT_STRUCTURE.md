# Project Structure Overview

```
student-job-finder/
│
├── 📄 App.tsx
│   └── Entry point của ứng dụng
│
├── 📁 src/
│   │
│   ├── 📁 screens/ (8 màn hình)
│   │   ├── WelcomeScreen.tsx
│   │   │   ├── Logo "SJOB" + "JOB"
│   │   │   ├── "Real Job, Your Choice FIND NOW!!!"
│   │   │   ├── Button "Get Started"
│   │   │   └── Link "Login"
│   │   │
│   │   ├── SignUpScreen.tsx
│   │   │   ├── Title "Đăng ký thành công!"
│   │   │   ├── Green checkmark icon
│   │   │   ├── Message "Chúc mừng bạn đã đăng ký thành công"
│   │   │   └── Button "Bắt đầu ngay"
│   │   │
│   │   ├── SignUpPasswordScreen.tsx
│   │   │   ├── Title "Thành công"
│   │   │   ├── Checkmark icon
│   │   │   ├── Input "MẬT KHẨU MỚI"
│   │   │   ├── Input "NHẬP LẠI MẬT KHẨU"
│   │   │   ├── Button "Tiếp tục" (Primary)
│   │   │   └── Button "Quay lại" (Secondary)
│   │   │
│   │   ├── VerifyOTPScreen.tsx
│   │   │   ├── Title "Nhập mã OTP của bạn"
│   │   │   ├── 4 OTP input fields
│   │   │   ├── Timer countdown
│   │   │   └── Button "Xác nhận mã OTP"
│   │   │
│   │   ├── VerifyEmailScreen.tsx
│   │   │   ├── Title "Kiểm tra email"
│   │   │   ├── Message with email info
│   │   │   ├── Button "KIỂM TRA EMAIL CỦA BẠN"
│   │   │   ├── Button "QUAY LẠI TRANG ĐĂNG NHẬP"
│   │   │   └── Link "Gửi lại"
│   │   │
│   │   ├── ForgotPasswordScreen.tsx
│   │   │   ├── Title "Quên mật khẩu?"
│   │   │   ├── Description text
│   │   │   ├── Input "Email"
│   │   │   ├── Button "LẤY LẠI MẬT KHẨU"
│   │   │   └── Button "QUAY LẠI TRANG ĐĂNG NHẬP"
│   │   │
│   │   ├── LoginScreen.tsx
│   │   │   ├── Title "Đăng nhập"
│   │   │   ├── Description
│   │   │   ├── Input "Email"
│   │   │   ├── Input "Password" with eye icon
│   │   │   ├── Checkbox "Nhớ tài khoản"
│   │   │   ├── Link "Quên mật khẩu?"
│   │   │   ├── Button "ĐĂNG NHẬP" (Primary)
│   │   │   ├── Button "ĐĂNG NHẬP BẰNG GOOGLE" (Secondary)
│   │   │   └── Link "Đăng ký"
│   │   │
│   │   └── HomeScreen.tsx
│   │       ├── Header with greeting
│   │       ├── Profile icon button
│   │       ├── Search bar
│   │       ├── "Công việc nổi bật" title
│   │       └── List of job cards:
│   │           ├── Job title
│   │           ├── Company name
│   │           ├── Location
│   │           ├── Salary
│   │           └── "Xem chi tiết" button
│   │
│   ├── 📁 navigation/
│   │   └── RootNavigator.tsx
│   │       ├── Stack Navigator setup
│   │       ├── Type definitions (RootStackParamList)
│   │       ├── Screen registrations
│   │       └── Navigation options
│   │
│   ├── 📁 components/ (Tái sử dụng)
│   │   ├── Button.tsx
│   │   │   ├── props: onPress, title, loading, disabled, variant
│   │   │   ├── variant: 'primary' | 'secondary'
│   │   │   └── Loading state animation
│   │   │
│   │   └── Input.tsx
│   │       ├── extends TextInputProps
│   │       ├── Error handling
│   │       └── Error message display
│   │
│   ├── 📁 styles/
│   │   ├── colors.ts
│   │   │   ├── PRIMARY = #2DA84F (Green)
│   │   │   ├── SECONDARY = #E8A520 (Orange)
│   │   │   ├── BACKGROUND = #F5F5F5
│   │   │   └── ... other colors
│   │   │
│   │   └── globalStyles.ts
│   │       ├── container
│   │       ├── centeredContainer
│   │       ├── primaryButton
│   │       ├── secondaryButton
│   │       ├── buttonText
│   │       ├── input
│   │       ├── label
│   │       ├── title
│   │       └── subtitle
│   │
│   ├── 📁 utils/
│   │   └── helpers.ts
│   │       ├── validateEmail()
│   │       ├── validatePassword()
│   │       ├── validatePhone()
│   │       ├── formatPhoneNumber()
│   │       ├── formatDate()
│   │       ├── getUserFromStorage()
│   │       └── saveUserToStorage()
│   │
│   ├── 📁 config/
│   │   └── api.ts
│   │       ├── API_BASE_URL
│   │       ├── API_TIMEOUT
│   │       ├── ENDPOINTS (Auth, Jobs, User)
│   │       └── MESSAGES (Success/Error)
│   │
│   └── 📁 assets/
│       ├── (Placeholder for images)
│       ├── (Placeholder for fonts)
│       └── (Placeholder for other assets)
│
├── 📄 package.json
│   ├── Dependencies: react, react-native, expo, etc.
│   ├── Dev Dependencies: typescript, babel, jest
│   └── Scripts: start, android, ios, web, test
│
├── 📄 app.json
│   └── Expo configuration (name, version, etc.)
│
├── 📄 tsconfig.json
│   └── TypeScript configuration
│
├── 📄 babel.config.js
│   └── Babel configuration for React Native
│
├── 📄 .gitignore
│   └── Git ignore rules
│
├── 📄 .env.example
│   └── Environment variables template
│
├── 📚 Documentation Files:
│   ├── README.md ⭐
│   │   └── Main project documentation
│   │
│   ├── GETTING_STARTED.md
│   │   └── Step-by-step getting started guide
│   │
│   ├── SETUP_GUIDE.md
│   │   └── Detailed setup instructions
│   │
│   ├── QUICK_REFERENCE.md
│   │   └── Quick reference for developers
│   │
│   └── PROJECT_STRUCTURE.md (This file)
│       └── Detailed project structure
│
└── 📦 node_modules/
    └── (Auto-generated after npm install)
```

## 📊 File Statistics

| Category | Count | Purpose |
|----------|-------|---------|
| **Screens** | 8 | Main UI screens |
| **Components** | 2 | Reusable components |
| **Style Files** | 2 | Global styling |
| **Utility Files** | 2 | Helpers & config |
| **Navigation** | 1 | Route management |
| **Config Files** | 4 | tsconfig, babel, app, package |
| **Documentation** | 5 | Guides & references |
| **Total** | ~30 | Files + directories |

## 🔄 Data Flow

```
User Action
    ↓
Screen Component
    ↓
Navigation (navigate/goBack)
    ↓
Next Screen
    ↓
Render UI with Colors & Styles
```

## 🎯 Key Features Implementation

### Authentication Flow
```
Welcome → SignUp → SignUpPassword → VerifyOTP → VerifyEmail → Home
```

### Forgot Password Flow
```
Login → ForgotPassword → VerifyOTP → Home
```

### Main Flow
```
Welcome → Login → Home
```

## 🔐 State Management Structure

```typescript
// Screen-level state (component state)
useState() // For local component state

// Future: Can add Redux/Context for global state
```

## 🌳 Component Hierarchy

```
App
└── NavigationContainer
    └── RootNavigator
        ├── WelcomeScreen
        │   └── ScrollView
        │       └── ... UI elements
        ├── LoginScreen
        │   └── ... UI elements
        ├── HomeScreen
        │   └── FlatList
        │       └── Job Cards
        └── ... other screens
```

## 📝 Naming Conventions

- **Files**: PascalCase for components (e.g., `LoginScreen.tsx`)
- **Components**: PascalCase (e.g., `export default function LoginScreen`)
- **Functions**: camelCase (e.g., `handleLogin()`)
- **Variables**: camelCase (e.g., `isLoading`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- **Styles**: camelCase (e.g., `primaryButton`)

## 🔌 Integration Points

### Ready to integrate:
1. ✅ API endpoints (config/api.ts)
2. ✅ Authentication logic
3. ✅ Database/Backend
4. ✅ Push notifications
5. ✅ Analytics
6. ✅ State management library (Redux/Zustand)

## 📱 Responsive Breakpoints

```typescript
// Small screens (< 375px)
// Normal screens (375px - 600px)
// Large screens (> 600px)
// Tablets (> 768px)
```

---

**Generated**: 2024
**Version**: 1.0.0
**Status**: Production Ready 🚀
