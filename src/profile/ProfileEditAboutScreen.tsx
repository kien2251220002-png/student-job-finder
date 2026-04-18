import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/RootNavigator';
import { COLORS } from '../styles/colors';

type ProfileEditAboutScreenProps = NativeStackScreenProps<RootStackParamList, 'ProfileEditAbout'>;

export default function ProfileEditAboutScreen({ navigation, route }: ProfileEditAboutScreenProps) {
  const [aboutText, setAboutText] = useState(route.params?.aboutInitial ?? '');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.iconButton}
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color={COLORS.darkText} />
          </TouchableOpacity>
          <Text style={styles.screenTitle}>About me</Text>
          <View style={styles.iconButtonPlaceholder} />
        </View>

        <View style={styles.cardSection}>
          <Text style={styles.lblSectionTitle}>Giới thiệu về bản thân</Text>
          <View style={styles.inputCard}>
            <TextInput
              style={styles.textArea}
              placeholder="Giới thiệu về bản thân"
              placeholderTextColor={COLORS.gray}
              multiline
              value={aboutText}
              onChangeText={setAboutText}
              editable
            />
          </View>
        </View>

        <View style={styles.fillSpace} />

        <TouchableOpacity
          style={styles.btnConfirm}
          activeOpacity={0.8}
          onPress={() => {
            route.params?.onSave?.(aboutText);
            navigation.navigate('Profile');
          }}
        >
          <Text style={styles.btnConfirmText}>XÁC NHẬN</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },
  iconButtonPlaceholder: {
    width: 44,
    height: 44,
  },
  screenTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.darkText,
  },
  cardSection: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 4,
  },
  lblSectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.darkText,
    marginBottom: 14,
  },
  inputCard: {
    backgroundColor: '#F7F8FC',
    borderRadius: 20,
    minHeight: 220,
    padding: 16,
  },
  textArea: {
    flex: 1,
    fontSize: 14,
    color: COLORS.darkText,
    lineHeight: 20,
    textAlignVertical: 'top',
  },
  fillSpace: {
    flex: 1,
  },
  btnConfirm: {
    height: 54,
    borderRadius: 16,
    backgroundColor: '#239B33',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  btnConfirmText: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.white,
  },
});
