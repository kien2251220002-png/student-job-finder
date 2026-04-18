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

type ProfileEditExperienceScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProfileEditExperience'
>;

export default function ProfileEditExperienceScreen({ navigation, route }: ProfileEditExperienceScreenProps) {
  const mode = route.params?.mode ?? 'add';
  const title = mode === 'edit' ? 'Chỉnh sửa kinh nghiệm làm việc' : 'Thêm kinh nghiệm làm việc';
  const initialExperience = route.params?.experience;
  const [position, setPosition] = useState(initialExperience?.position ?? '');
  const [company, setCompany] = useState(initialExperience?.company ?? '');
  const [startDate, setStartDate] = useState(initialExperience?.startDate ?? '');
  const [endDate, setEndDate] = useState(initialExperience?.endDate ?? '');
  const [description, setDescription] = useState(initialExperience?.description ?? '');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.iconButton}
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color={COLORS.darkText} />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>{title}</Text>
        {mode === 'edit' ? (
          <TouchableOpacity
            style={styles.iconButton}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('ProfileEditExperienceConfirm', {
                mode: 'delete',
                onConfirm: () => {
                  route.params?.onDelete?.(route.params?.index ?? 0);
                  navigation.navigate('Profile');
                },
              })
            }
          >
            <Ionicons name="trash-outline" size={22} color={COLORS.darkText} />
          </TouchableOpacity>
        ) : (
          <View style={styles.iconButtonPlaceholder} />
        )}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Chức vụ</Text>
          <TextInput
            style={styles.fieldInput}
            placeholder="Nhập chức vụ"
            placeholderTextColor={COLORS.gray}
            value={position}
            onChangeText={setPosition}
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Company</Text>
          <TextInput
            style={styles.fieldInput}
            placeholder="Nhập công ty"
            placeholderTextColor={COLORS.gray}
            value={company}
            onChangeText={setCompany}
          />
        </View>

        <View style={styles.rowGroup}>
          <View style={styles.fieldGroupHalf}>
            <Text style={styles.fieldLabel}>Start date</Text>
            <TextInput
              style={styles.fieldInput}
              placeholder="Aug 2023"
              placeholderTextColor={COLORS.gray}
              value={startDate}
              onChangeText={setStartDate}
            />
          </View>
          <View style={styles.fieldGroupHalf}>
            <Text style={styles.fieldLabel}>End date</Text>
            <TextInput
              style={styles.fieldInput}
              placeholder="Aug 2025"
              placeholderTextColor={COLORS.gray}
              value={endDate}
              onChangeText={setEndDate}
            />
          </View>
        </View>

        <View style={styles.checkboxRow}>
          <View style={styles.checkboxBox} />
          <Text style={styles.checkboxLabel}>This is my position now</Text>
        </View>

        <View style={styles.fieldGroupLarge}>
          <Text style={styles.fieldLabel}>Description</Text>
          <TextInput
            style={styles.textArea}
            multiline
            placeholder="Mô tả công việc"
            placeholderTextColor={COLORS.gray}
            value={description}
            onChangeText={setDescription}
          />
        </View>
      </ScrollView>

      <View style={styles.footerRow}>
        <TouchableOpacity
          style={styles.btnCancel}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('ProfileEditExperienceConfirm', {
              mode: 'cancel',
              onConfirm: () => navigation.navigate('Profile'),
            })
          }
        >
          <Text style={styles.btnCancelText}>HỦY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnSave}
          activeOpacity={0.8}
          onPress={() => {
            route.params?.onSave?.(
              {
                position,
                company,
                startDate,
                endDate,
                description,
              },
              route.params?.index
            );
            navigation.navigate('Profile');
          }}
        >
          <Text style={styles.btnSaveText}>LƯU</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
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
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  fieldGroup: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.darkText,
    marginBottom: 8,
  },
  fieldInput: {
    height: 48,
    borderRadius: 16,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    fontSize: 14,
    color: COLORS.darkText,
    borderWidth: 1,
    borderColor: '#E8EAEE',
  },
  rowGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  fieldGroupHalf: {
    flex: 1,
    marginBottom: 16,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkboxBox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    marginRight: 10,
    backgroundColor: COLORS.white,
  },
  checkboxLabel: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  fieldGroupLarge: {
    marginBottom: 16,
  },
  textArea: {
    minHeight: 140,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    padding: 16,
    textAlignVertical: 'top',
    fontSize: 14,
    color: COLORS.darkText,
    borderWidth: 1,
    borderColor: '#E8EAEE',
  },
  footerRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 18,
    gap: 12,
  },
  btnCancel: {
    flex: 1,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#C07A08',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCancelText: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.white,
  },
  btnSave: {
    flex: 1,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#239B33',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSaveText: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.white,
  },
});
