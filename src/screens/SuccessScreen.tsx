import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { useJobs } from '../features/job/services/JobContext';
import { COLORS } from '../styles/colors';
import { Ionicons } from '@expo/vector-icons';

type SuccessScreenProps = NativeStackScreenProps<RootStackParamList, 'Success'>;

export default function SuccessScreen({ navigation, route }: SuccessScreenProps) {
  const { jobId, fileName } = route.params;
  const { getJobById, setSelectedCategory } = useJobs();
  const job = getJobById(jobId);

  const handleSimilarJobs = () => {
    if (job) {
      setSelectedCategory(job.category);
    }
    navigation.navigate('Home');
  };

  if (!job) {
    return (
      <SafeAreaView style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Không tìm thấy thông tin công việc.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconBox}>
          <Ionicons name="checkmark" size={80} color={COLORS.white} />
        </View>
        <Text style={styles.title}>Ứng tuyển thành công</Text>
        <Text style={styles.message}>Xin chúc mừng! CV của bạn đã được gửi đến {job.company}.</Text>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>{job.title}</Text>
          <Text style={styles.summarySub}>{job.company}</Text>
          <Text style={styles.summaryInfo}>{job.location} · {job.salary}</Text>
          <Text style={styles.fileNote}>File đã nộp: {fileName}</Text>
        </View>

        <TouchableOpacity style={styles.secondaryButton} onPress={handleSimilarJobs}>
          <Text style={styles.secondaryText}>Tìm công việc tương tự</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.primaryText}>Trở về trang chủ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '90%',
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 6,
  },
  iconBox: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.darkText,
    marginBottom: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 13,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  summaryCard: {
    width: '100%',
    padding: 18,
    borderRadius: 18,
    backgroundColor: COLORS.lightGray,
    marginBottom: 20,
  },
  summaryLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.darkText,
    marginBottom: 6,
  },
  summarySub: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 6,
  },
  summaryInfo: {
    fontSize: 12,
    color: COLORS.gray,
    marginBottom: 8,
  },
  fileNote: {
    fontSize: 11,
    color: COLORS.darkText,
  },
  secondaryButton: {
    width: '100%',
    height: 46,
    borderRadius: 14,
    backgroundColor: COLORS.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  secondaryText: {
    color: COLORS.darkText,
    fontWeight: '700',
  },
  primaryButton: {
    width: '100%',
    height: 46,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryText: {
    color: COLORS.white,
    fontWeight: '700',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  emptyText: {
    color: COLORS.darkText,
    fontSize: 14,
  },
});