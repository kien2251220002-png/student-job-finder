import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { useJobs } from '../features/job/services/JobContext';
import { COLORS } from '../styles/colors';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

type UploadCVScreenProps = NativeStackScreenProps<RootStackParamList, 'UploadCV'>;

export default function UploadCVScreen({ navigation, route }: UploadCVScreenProps) {
  const { jobId } = route.params;
  const { getJobById } = useJobs();
  const job = getJobById(jobId);
  const [fileName, setFileName] = useState('');
  const [info, setInfo] = useState('');

  const handleSelectFile = () => {
    setFileName(`CV_${job?.title?.replace(/\s+/g, '_') || 'application'}.pdf`);
  };

  const handleUpload = () => {
    if (!fileName) return;
    navigation.navigate('Confirmation', {
      jobId,
      fileName,
      info,
    });
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
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={20} color={COLORS.darkText} />
          <Text style={styles.backText}>Quay lại</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.subtitle}>{job.company} · {job.location}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Upload CV</Text>
          <TouchableOpacity style={styles.uploadBox} onPress={handleSelectFile} activeOpacity={0.85}>
            <MaterialCommunityIcons name="file-upload-outline" size={24} color={COLORS.primary} />
            <Text style={styles.uploadText}>{fileName ? 'Chọn file khác' : 'Chọn file CV của bạn'}</Text>
          </TouchableOpacity>
          {fileName ? (
            <View style={styles.fileRow}>
              <MaterialCommunityIcons name="file-pdf-box" size={20} color={COLORS.secondary} />
              <Text style={styles.fileName}>{fileName}</Text>
            </View>
          ) : null}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Thông tin thêm</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Chứng minh tại sao bạn phù hợp với công việc này"
            placeholderTextColor={COLORS.gray}
            multiline
            value={info}
            onChangeText={setInfo}
            textAlignVertical="top"
          />
        </View>

        <TouchableOpacity
          style={[styles.actionButton, !fileName && styles.disabledButton]}
          onPress={handleUpload}
          disabled={!fileName}
        >
          <Text style={styles.actionText}>Upload CV</Text>
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
  backButton: {
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
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.darkText,
    marginBottom: 10,
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 14,
    height: 62,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  uploadText: {
    fontSize: 12,
    color: COLORS.darkText,
    fontWeight: '700',
  },
  fileRow: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 14,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  fileName: {
    fontSize: 12,
    color: COLORS.darkText,
    fontWeight: '700',
    marginLeft: 10,
  },
  textArea: {
    minHeight: 140,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 14,
    backgroundColor: COLORS.white,
    padding: 14,
    fontSize: 12,
    color: COLORS.darkText,
  },
  actionButton: {
    height: 48,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: COLORS.gray,
  },
  actionText: {
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