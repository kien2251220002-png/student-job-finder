import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../styles/colors';

export default function ProfileEditAboutConfirmScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.8}>
          <Ionicons name="close" size={24} color={COLORS.darkText} />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>About me</Text>
        <View style={styles.iconButtonPlaceholder} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.cardSection}>
          <Text style={styles.lblSectionTitle}>Giới thiệu về bản thân</Text>
          <View style={styles.inputCard}>
            <Text style={styles.placeholderText}>Giới thiệu về bản thân</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.confirmSheet}>
        <View style={styles.sheetHandle} />
        <Text style={styles.sheetTitle}>Xác nhận chỉnh sửa</Text>
        <Text style={styles.sheetSubtitle}>Bạn có chắc chắn muốn chỉnh sửa?</Text>
        <TouchableOpacity style={styles.btnConfirm} activeOpacity={0.8}>
          <Text style={styles.btnConfirmText}>XÁC NHẬN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCancel} activeOpacity={0.8}>
          <Text style={styles.btnCancelText}>HỦY</Text>
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
  cardSection: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 20,
    marginHorizontal: 16,
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
  placeholderText: {
    color: COLORS.gray,
    fontSize: 14,
    lineHeight: 22,
  },
  confirmSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 28,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 10,
  },
  sheetHandle: {
    width: 60,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#E6E7EC',
    alignSelf: 'center',
    marginBottom: 16,
  },
  sheetTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.darkText,
    marginBottom: 8,
    textAlign: 'center',
  },
  sheetSubtitle: {
    fontSize: 13,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: 18,
  },
  btnConfirm: {
    height: 52,
    borderRadius: 16,
    backgroundColor: '#239B33',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  btnConfirmText: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.white,
  },
  btnCancel: {
    height: 52,
    borderRadius: 16,
    backgroundColor: '#C07A08',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCancelText: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.white,
  },
});
