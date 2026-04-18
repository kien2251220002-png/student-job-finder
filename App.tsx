import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './src/navigation/RootNavigator';
import { JobProvider } from './src/features/job/services/JobContext';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <JobProvider>
          <RootNavigator />
        </JobProvider>
      </NavigationContainer>
      <StatusBar style="dark" />
    </>
  );
}
