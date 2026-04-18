// API base URL and endpoints
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';
export const API_TIMEOUT = parseInt(process.env.REACT_APP_API_TIMEOUT || '30000', 10);

export const ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    VERIFY_OTP: '/auth/verify-otp',
    RESEND_OTP: '/auth/resend-otp',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    VERIFY_EMAIL: '/auth/verify-email',
  },

  // Jobs
  JOBS: {
    LIST: '/jobs',
    DETAIL: '/jobs/:id',
    SEARCH: '/jobs/search',
    APPLY: '/jobs/:id/apply',
  },

  // User
  USER: {
    PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/profile',
    APPLICATIONS: '/user/applications',
  },
};

// Success/Error messages
export const MESSAGES = {
  SUCCESS: {
    LOGIN: 'Đăng nhập thành công!',
    SIGNUP: 'Đăng ký thành công!',
    PASSWORD_RESET: 'Mật khẩu đã được đặt lại!',
    EMAIL_VERIFIED: 'Email đã được xác minh!',
  },
  ERROR: {
    INVALID_EMAIL: 'Email không hợp lệ',
    INVALID_PASSWORD: 'Mật khẩu không hợp lệ',
    LOGIN_FAILED: 'Đăng nhập thất bại',
    NETWORK_ERROR: 'Lỗi kết nối mạng',
    UNKNOWN_ERROR: 'Đã xảy ra lỗi',
  },
};
