import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  secondaryButton: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 14,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'System',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.darkText,
    marginTop: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.darkText,
    textAlign: 'center',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginVertical: 10,
  },
});
