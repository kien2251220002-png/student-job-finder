// Validation helpers
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 8;
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{10,11}$/;
  return phoneRegex.test(phone);
};

// Formatting helpers
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return phone;
};

export const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// Storage helpers
export const getUserFromStorage = async (key: string) => {
  try {
    // Placeholder for AsyncStorage implementation
    return null;
  } catch (error) {
    console.error('Error getting user:', error);
    return null;
  }
};

export const saveUserToStorage = async (key: string, data: any) => {
  try {
    // Placeholder for AsyncStorage implementation
    return true;
  } catch (error) {
    console.error('Error saving user:', error);
    return false;
  }
};
