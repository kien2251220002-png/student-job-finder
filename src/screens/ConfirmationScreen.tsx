import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { useJobs } from '../features/job/services/JobContext';
import { COLORS } from '../styles/colors';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

type ConfirmationScreenProps = NativeStackScreenProps<RootStackParamList, 'Confirmation'>;

export default function ConfirmationScreen({ navigation, route }: ConfirmationScreenProps) {
  const { jobId, fileName, info } = route.params;
  const { getJobById } = useJobs();
  const job = getJobById(jobId);

  if (!job) {
    return (
      <SafeAreaView style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Không tìm thấy thông tin công việc.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.topRow} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={20} color={COLORS.darkText} />
          <Text style={styles.backText}>Quay lại</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Xác nhận thông tin ứng tuyển</Text>
        <Text style={styles.subtitle}>{job.title} · {job.company}</Text>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>Công việc</Text>
          <Text style={styles.cardValue}>{job.title}</Text>
          <Text style={styles.cardValue}>{job.company}</Text>
          <Text style={styles.cardInfo}>{job.location} · {job.salary}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>CV đã chọn</Text>
          <View style={styles.fileRow}>
            <MaterialCommunityIcons name="file-pdf-box" size={18} color={COLORS.secondary} />
            <Text style={styles.fileName}>{fileName}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>Thông tin thêm</Text>
          <Text style={styles.cardValue}>{info || 'Không có thêm thông tin'}</Text>
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate('Success', { jobId, fileName })}
        >
          <Text style={styles.submitText}>Đăng ký</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 16,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  backText: {
    marginLeft: 8,
    color: COLORS.darkText,
    fontWeight: '700',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.darkText,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 18,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
  },
  cardLabel: {
    fontSize: 11,
    color: COLORS.textSecondary,
    fontWeight: '700',
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 14,
    color: COLORS.darkText,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardInfo: {
    fontSize: 12,
    color: COLORS.gray,
  },
  fileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileName: {
    fontSize: 13,
    color: COLORS.darkText,
    fontWeight: '700',
    marginLeft: 8,
  },
  submitButton: {
    height: 48,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  submitText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '700',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.background,
  },
  emptyText: {
    fontSize: 14,
    color: COLORS.darkText,
  },
});