import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpSuccessScreen from '../screens/SignUpSuccessScreen';
import SignUpPasswordScreen from '../screens/SignUpPasswordScreen';
import VerifyOTPScreen from '../screens/VerifyOTPScreen';
import VerifyEmailScreen from '../screens/VerifyEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import PasswordResetSuccessScreen from '../screens/PasswordResetSuccessScreen';
import JobDetailScreen from '../screens/JobDetailScreen';
import UploadCVScreen from '../screens/UploadCVScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import SuccessScreen from '../screens/SuccessScreen';
import { Job } from '../features/job/types';

export type RootStackParamList = {
  Welcome: undefined;
  SignUp: undefined;
  SignUpSuccess: undefined;
  SignUpPassword: undefined;
  PasswordResetSuccess: undefined;
  VerifyOTP: undefined;
  VerifyEmail: undefined;
  ForgotPassword: undefined;
  Login: undefined;
  Home: undefined;
  JobDetail: {
    job: Job;
  };
  UploadCV: {
    jobId: string;
  };
  Confirmation: {
    jobId: string;
    fileName: string;
    info: string;
  };
  Success: {
    jobId: string;
    fileName: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#fff' },
      }}
    >
      <Stack.Screen<"Welcome"> name="Welcome" component={WelcomeScreen} />
      <Stack.Screen<"SignUp"> name="SignUp" component={SignUpScreen} />
      <Stack.Screen<"SignUpSuccess"> name="SignUpSuccess" component={SignUpSuccessScreen} />
      <Stack.Screen<"SignUpPassword"> name="SignUpPassword" component={SignUpPasswordScreen} />
      <Stack.Screen<"PasswordResetSuccess"> name="PasswordResetSuccess" component={PasswordResetSuccessScreen} />
      <Stack.Screen<"VerifyOTP"> name="VerifyOTP" component={VerifyOTPScreen} />
      <Stack.Screen<"VerifyEmail"> name="VerifyEmail" component={VerifyEmailScreen} />
      <Stack.Screen<"ForgotPassword"> name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen<"Login"> name="Login" component={LoginScreen} />
      <Stack.Screen<"Home"> name="Home" component={HomeScreen} />
      <Stack.Screen<"JobDetail"> name="JobDetail" component={JobDetailScreen} />
      <Stack.Screen<"UploadCV"> name="UploadCV" component={UploadCVScreen} />
      <Stack.Screen<"Confirmation"> name="Confirmation" component={ConfirmationScreen} />
      <Stack.Screen<"Success"> name="Success" component={SuccessScreen} />
    </Stack.Navigator>
  );
}
