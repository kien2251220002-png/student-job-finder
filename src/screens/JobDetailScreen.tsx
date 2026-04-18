import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/RootNavigator';
import { useJobs } from '../features/job/services/JobContext';
import { COLORS } from '../styles/colors';
import JobCard from '../features/job/components/JobCard';

type JobDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'JobDetail'>;

export default function JobDetailScreen({ navigation, route }: JobDetailScreenProps) {
  const { job } = route.params;
  const { jobs } = useJobs();

  const relatedJobs = jobs
    .filter((item) => item.id !== job.id && (item.category === job.category || item.jobType === job.jobType))
    .slice(0, 3);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
            <Ionicons name="arrow-back" size={20} color={COLORS.darkText} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="bookmark-outline" size={20} color={COLORS.darkText} />
          </TouchableOpacity>
        </View>

        <View style={styles.detailHeader}>
          <View style={styles.brandCircle}>
            <Text style={styles.brandText}>{job.company.charAt(0)}</Text>
          </View>
          <View style={styles.detailMeta}>
            <Text style={styles.title}>{job.title}</Text>
            <Text style={styles.subtitle}>{job.company}</Text>
            <Text style={styles.badge}>{job.location}</Text>
          </View>
        </View>

        <View style={styles.detailStats}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Salary</Text>
            <Text style={styles.statValue}>{job.salary}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Type</Text>
            <Text style={styles.statValue}>{job.jobType}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Category</Text>
            <Text style={styles.statValue}>{job.category}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mô tả công việc</Text>
          <Text style={styles.sectionText}>{job.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Yêu cầu</Text>
          {job.requirements.map((item) => (
            <View key={item} style={styles.requirementRow}>
              <View style={styles.requirementDot} />
              <Text style={styles.requirementText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Related Jobs</Text>
          {relatedJobs.length > 0 ? (
            relatedJobs.map((item) => (
              <JobCard
                key={item.id}
                job={item}
                onPress={() => navigation.navigate('JobDetail', { job: item })}
                onApply={() => navigation.navigate('JobDetail', { job: item })}
              />
            ))
          ) : (
            <Text style={styles.emptyText}>Không có công việc tương tự.</Text>
          )}
        </View>

        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.messageButton}>
            <Text style={styles.messageLabel}>NHẮN TIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.applyButton}
            onPress={() => navigation.navigate('UploadCV', { jobId: job.id })}
          >
            <Text style={styles.applyLabel}>ĐĂNG KÝ NGAY</Text>
          </TouchableOpacity>
        </View>
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
    paddingBottom: 24,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  iconButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  brandCircle: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  brandText: {
    fontSize: 24,
    color: COLORS.white,
    fontWeight: '900',
  },
  detailMeta: {
    flex: 1,
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
    marginBottom: 6,
  },
  badge: {
    fontSize: 11,
    color: COLORS.primary,
    fontWeight: '700',
  },
  detailStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statItem: {
    width: '30%',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 10,
    color: COLORS.textSecondary,
    marginBottom: 6,
  },
  statValue: {
    fontSize: 12,
    color: COLORS.darkText,
    fontWeight: '700',
    textAlign: 'center',
  },
  section: {
    backgroundColor: COLORS.white,
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.darkText,
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    lineHeight: 19,
  },
  requirementRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  requirementDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.primary,
    marginTop: 8,
    marginRight: 10,
  },
  requirementText: {
    flex: 1,
    fontSize: 12,
    color: COLORS.textSecondary,
    lineHeight: 19,
  },
  emptyText: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  messageButton: {
    flex: 1,
    marginRight: 12,
    height: 48,
    borderRadius: 14,
    backgroundColor: COLORS.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.darkText,
  },
  applyButton: {
    flex: 1,
    height: 48,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.white,
  },
  scrollContent: {
    paddingHorizontal: 14,
    paddingTop: 6,
    paddingBottom: 30,
  },
  successContent: {
    flexGrow: 1,
    paddingHorizontal: 14,
    paddingTop: 6,
    paddingBottom: 30,
    alignItems: 'center',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  iconTouch: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeWrap: {
    alignItems: 'center',
    marginTop: -8,
    marginBottom: 10,
  },
  badgeOuter: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 1.4,
    borderColor: '#323232',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeInner: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#2B2B2B',
    letterSpacing: 0.4,
  },
  metaWrap: {
    backgroundColor: '#EFEFEF',
    borderRadius: 0,
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginHorizontal: -14,
    marginBottom: 12,
    alignItems: 'center',
  },
  jobTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.darkText,
    marginBottom: 6,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  metaText: {
    fontSize: 11,
    color: COLORS.darkText,
  },
  metaDot: {
    fontSize: 10,
    color: COLORS.darkText,
    marginHorizontal: 9,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
    paddingHorizontal: 8,
  },
  sectionLabel: {
    fontSize: 11,
    color: '#5E5E6E',
  },
  sectionBlock: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: COLORS.darkText,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 10.5,
    lineHeight: 15,
    color: '#6C6C7C',
  },
  readMoreButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#E3DBFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginTop: 8,
  },
  readMoreText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#4B3B82',
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 9,
    paddingRight: 8,
  },
  bulletDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#57577E',
    marginTop: 6,
    marginRight: 10,
  },
  bulletText: {
    flex: 1,
    fontSize: 10.5,
    lineHeight: 15,
    color: '#6C6C7C',
  },
  locationText: {
    fontSize: 10.5,
    color: '#6C6C7C',
    marginBottom: 10,
  },
  mapCard: {
    height: 92,
    borderRadius: 12,
    backgroundColor: '#F0F0F0',
    overflow: 'hidden',
    position: 'relative',
  },
  mapRoads: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.88)',
    borderStyle: 'solid',
    transform: [{ scale: 0.92 }],
  },
  mapYellowStrip: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 16,
    height: '100%',
    backgroundColor: '#FFD864',
  },
  mapBlueStrip: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 22,
    height: '100%',
    backgroundColor: '#7FC7F0',
    transform: [{ skewY: '10deg' }],
  },
  mapPinWrap: {
    position: 'absolute',
    left: '50%',
    top: '34%',
    alignItems: 'center',
    marginLeft: -10,
  },
  mapPinHead: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF2020',
  },
  mapPinPoint: {
    width: 14,
    height: 8,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#FF2020',
    marginTop: -1,
  },
  infoItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEF5',
  },
  infoLabel: {
    fontSize: 11,
    color: COLORS.darkText,
    fontWeight: '700',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 10.5,
    color: '#6C6C7C',
  },
  facilityRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  facilityBullet: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: '#57577E',
    marginTop: 7,
    marginRight: 10,
  },
  facilityText: {
    fontSize: 10.5,
    color: '#6C6C7C',
  },
  bottomActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  messageButton: {
    flex: 1,
    height: 36,
    borderRadius: 4,
    backgroundColor: '#6E83AF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  messageButtonText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  applyButton: {
    flex: 1,
    height: 36,
    borderRadius: 4,
    backgroundColor: '#39A239',
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyButtonText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  applySection: {
    marginBottom: 12,
  },
  helperText: {
    fontSize: 10,
    color: '#8A8A9A',
    marginBottom: 14,
  },
  uploadBox: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#D8D8E6',
    borderRadius: 12,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  uploadBoxCompact: {
    marginTop: 6,
  },
  uploadText: {
    fontSize: 12,
    color: COLORS.darkText,
    fontWeight: '700',
  },
  noteBox: {
    minHeight: 132,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EFEFF5',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 11,
    color: COLORS.darkText,
  },
  fileCard: {
    borderWidth: 1,
    borderColor: '#E8E0F7',
    borderRadius: 12,
    backgroundColor: '#F4F1FE',
    padding: 12,
    flexDirection: 'row',
    marginBottom: 10,
  },
  fileIconWrap: {
    width: 32,
    height: 42,
    borderRadius: 6,
    backgroundColor: '#FFF7F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  fileMeta: {
    flex: 1,
  },
  fileName: {
    fontSize: 11,
    color: COLORS.darkText,
    fontWeight: '700',
    marginBottom: 2,
  },
  fileInfo: {
    fontSize: 9.5,
    color: '#9A9AA8',
    marginBottom: 8,
  },
  removeFileButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  removeFileText: {
    fontSize: 10,
    color: '#FF5B57',
    fontWeight: '600',
    marginLeft: 6,
  },
  successCard: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 12,
  },
  successFileRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F1FE',
    borderRadius: 12,
    padding: 12,
    marginBottom: 34,
  },
  successIconCircle: {
    width: 108,
    height: 108,
    borderRadius: 54,
    backgroundColor: '#39A239',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  successTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.darkText,
    marginBottom: 8,
  },
  successMessage: {
    fontSize: 11,
    color: '#6C6C7C',
    marginBottom: 28,
    textAlign: 'center',
  },
  secondaryAction: {
    width: '100%',
    height: 40,
    borderRadius: 4,
    backgroundColor: '#6E83AF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  secondaryActionText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '700',
  },
  primaryAction: {
    width: '100%',
    height: 40,
    borderRadius: 4,
    backgroundColor: '#39A239',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryActionText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '700',
  },
});