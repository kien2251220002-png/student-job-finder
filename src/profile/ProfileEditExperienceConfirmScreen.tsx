import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { COLORS } from '../styles/colors';
import { RootStackParamList } from '../navigation/RootNavigator';

type ProfileEditExperienceConfirmScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProfileEditExperienceConfirm'
>;

export default function ProfileEditExperienceConfirmScreen({ navigation, route }: ProfileEditExperienceConfirmScreenProps) {
  const mode = route.params.mode;
  const title = mode === 'delete' ? 'Xóa thông tin ?' : 'Hủy thay đổi?';
  const subtitle =
    mode === 'delete'
      ? 'Bạn có chắc chắn muốn xóa kinh nghiệm công việc?'
      : 'Bạn có chắc chắn muốn hủy những thay đổi bạn đã nhập?';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.8} onPress={() => navigation.goBack()}>
          <Text style={styles.closeText}>×</Text>
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Kinh nghiệm làm việc</Text>
        <View style={styles.iconButtonPlaceholder} />
      </View>

      <View style={styles.sheetContainer}>
        <View style={styles.sheetHandle} />
        <Text style={styles.sheetTitle}>{title}</Text>
        <Text style={styles.sheetSubtitle}>{subtitle}</Text>

        <TouchableOpacity
          style={styles.btnConfirm}
          activeOpacity={0.8}
          onPress={() => {
            route.params.onConfirm?.();
            navigation.navigate('Profile');
          }}
        >
          <Text style={styles.btnConfirmText}>XÁC NHẬN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCancel} activeOpacity={0.8} onPress={() => navigation.goBack()}>
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
  closeText: {
    fontSize: 28,
    lineHeight: 28,
    color: COLORS.darkText,
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
  sheetContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 24,
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
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.darkText,
    textAlign: 'center',
    marginBottom: 8,
  },
  sheetSubtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
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
