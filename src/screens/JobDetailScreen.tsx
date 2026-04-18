import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/RootNavigator';
import { COLORS } from '../styles/colors';

type JobDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'JobDetail'>;

type ScreenMode = 'detail' | 'apply' | 'success';

type FileState = {
  name: string;
  size: string;
  updatedAt: string;
};

const requirementItems = [
  'Sed ut perspiciatis unde omnis iste natus error sit.',
  'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur & adipisci velit.',
  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
];

const facilities = [
  'Medical',
  'Dental',
  'Technical Certification',
  'Meal Allowance',
  'Transport Allowance',
  'Regular Hours',
  'Mondays-Fridays',
];

const informationRows = [
  { label: 'Position', value: 'Backend Developer' },
  { label: 'Qualification', value: "Bachelor's Degree" },
  { label: 'Experience', value: '3 Years' },
  { label: 'Job Type', value: 'Full-Time' },
  { label: 'Specialization', value: 'Design' },
];

export default function JobDetailScreen({ navigation, route }: JobDetailScreenProps) {
  const { jobTitle, company, location, logoText } = route.params;
  const [mode, setMode] = useState<ScreenMode>('detail');
  const [uploadedFile, setUploadedFile] = useState<FileState | null>(null);
  const [applicationNote, setApplicationNote] = useState('');

  const openApplyFlow = () => setMode('apply');
  const completeApplication = () => setMode('success');

  const renderHeader = () => (
    <View style={styles.topBar}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconTouch}>
        <Ionicons name="arrow-back" size={20} color={COLORS.darkText} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconTouch}>
        <Ionicons name="bookmark-outline" size={20} color={COLORS.darkText} />
      </TouchableOpacity>
    </View>
  );

  const renderCompanyBadge = () => (
    <View style={styles.badgeWrap}>
      <View style={styles.badgeOuter}>
        <View style={styles.badgeInner}>
          <Text style={styles.badgeText}>{logoText}</Text>
        </View>
      </View>
    </View>
  );

  const renderMeta = () => (
    <View style={styles.metaWrap}>
      <Text style={styles.jobTitle}>{jobTitle}</Text>
      <View style={styles.metaRow}>
        <Text style={styles.metaText}>{company}</Text>
        <Text style={styles.metaDot}>•</Text>
        <Text style={styles.metaText}>VietNam</Text>
        <Text style={styles.metaDot}>•</Text>
        <Text style={styles.metaText}>1 day ago</Text>
      </View>
    </View>
  );

  const renderBottomActions = () => (
    <View style={styles.bottomActions}>
      <TouchableOpacity style={styles.messageButton}>
        <Text style={styles.messageButtonText}>NHẮN TIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.applyButton}
        onPress={mode === 'detail' ? openApplyFlow : completeApplication}
      >
        <Text style={styles.applyButtonText}>{mode === 'detail' ? 'ĐĂNG KÝ NGAY' : 'ĐĂNG KÝ'}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderJobDetail = () => (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
      {renderHeader()}
      {renderCompanyBadge()}
      {renderMeta()}

      <View style={styles.sectionRow}>
        <Text style={styles.sectionLabel}>Salary</Text>
        <Text style={styles.sectionLabel}>Job Type</Text>
        <Text style={styles.sectionLabel}>Postion</Text>
      </View>

      <View style={styles.sectionBlock}>
        <Text style={styles.sectionTitle}>Job Description</Text>
        <Text style={styles.paragraph}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem ...
        </Text>
        <TouchableOpacity style={styles.readMoreButton}>
          <Text style={styles.readMoreText}>Read more</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionBlock}>
        <Text style={styles.sectionTitle}>Requirements</Text>
        {requirementItems.map((item) => (
          <View key={item} style={styles.bulletRow}>
            <View style={styles.bulletDot} />
            <Text style={styles.bulletText}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={styles.sectionBlock}>
        <Text style={styles.sectionTitle}>Location</Text>
        <Text style={styles.locationText}>Hoa Hai, Ngu Hanh Son, Da Nang, VietNam</Text>
        <View style={styles.mapCard}>
          <View style={styles.mapYellowStrip} />
          <View style={styles.mapBlueStrip} />
          <View style={styles.mapRoads} />
          <View style={styles.mapPinWrap}>
            <View style={styles.mapPinHead} />
            <View style={styles.mapPinPoint} />
          </View>
        </View>
      </View>

      <View style={styles.sectionBlock}>
        <Text style={styles.sectionTitle}>Informations</Text>
        {informationRows.map((row) => (
          <View key={row.label} style={styles.infoItem}>
            <Text style={styles.infoLabel}>{row.label}</Text>
            <Text style={styles.infoValue}>{row.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.sectionBlock}>
        <Text style={styles.sectionTitle}>Facilities and Others</Text>
        {facilities.map((item) => (
          <View key={item} style={styles.facilityRow}>
            <View style={styles.facilityBullet} />
            <Text style={styles.facilityText}>{item}</Text>
          </View>
        ))}
      </View>

      {renderBottomActions()}
    </ScrollView>
  );

  const renderApplyFlow = () => (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
      {renderHeader()}
      {renderCompanyBadge()}
      {renderMeta()}

      <View style={styles.applySection}>
        <Text style={styles.sectionTitle}>Upload CV</Text>
        <Text style={styles.helperText}>Thêm CV của bạn để ứng tuyển công việc</Text>

        {uploadedFile ? (
          <View style={styles.fileCard}>
            <View style={styles.fileIconWrap}>
              <MaterialCommunityIcons name="file-pdf-box" size={22} color="#FF5B57" />
            </View>
            <View style={styles.fileMeta}>
              <Text style={styles.fileName}>{uploadedFile.name}</Text>
              <Text style={styles.fileInfo}>{uploadedFile.size} - {uploadedFile.updatedAt}</Text>
              <TouchableOpacity style={styles.removeFileButton} onPress={() => setUploadedFile(null)}>
                <Ionicons name="trash-outline" size={14} color="#FF5B57" />
                <Text style={styles.removeFileText}>Remove file</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}

        <TouchableOpacity
          style={[styles.uploadBox, uploadedFile ? styles.uploadBoxCompact : null]}
          onPress={() =>
            setUploadedFile({
              name: 'ngoanhtru - CV - Backend Developer',
              size: '367 kb',
              updatedAt: '2 April 2026 at 18:30 pm',
            })
          }
          activeOpacity={0.85}
        >
          <MaterialCommunityIcons name="file-upload-outline" size={24} color={COLORS.darkText} />
          <Text style={styles.uploadText}>Upload CV</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Information</Text>
        <TextInput
          style={styles.noteBox}
          multiline
          numberOfLines={4}
          placeholder="Chứng minh tại sao bạn là người phù hợp với công việc này"
          placeholderTextColor="#D2D2DA"
          value={applicationNote}
          onChangeText={setApplicationNote}
          textAlignVertical="top"
        />
      </View>

      {renderBottomActions()}
    </ScrollView>
  );

  const renderSuccess = () => (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.successContent}>
      {renderHeader()}

      <View style={styles.successCard}>
        <View style={styles.successFileRow}>
          <View style={styles.fileIconWrap}>
            <MaterialCommunityIcons name="file-pdf-box" size={22} color="#FF5B57" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.fileName}>ngoanhtru - CV - Backend Developer</Text>
            <Text style={styles.fileInfo}>367 kb - 2 April 2026 at 18:30 pm</Text>
          </View>
        </View>

        <View style={styles.successIconCircle}>
          <Ionicons name="checkmark" size={92} color="#2E8E37" />
        </View>

        <Text style={styles.successTitle}>Successful</Text>
        <Text style={styles.successMessage}>Xin chúc mừng, đơn của bạn đã được gửi đi</Text>

        <TouchableOpacity style={styles.secondaryAction} onPress={() => setMode('detail')}>
          <Text style={styles.secondaryActionText}>TÌM CÔNG VIỆC TƯƠNG TỰ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryAction} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.primaryActionText}>TRỞ VỀ TRANG CHỦ</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      {mode === 'detail' ? renderJobDetail() : mode === 'apply' ? renderApplyFlow() : renderSuccess()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
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
    gap: 14,
    marginTop: 4,
  },
  messageButton: {
    flex: 1,
    height: 36,
    borderRadius: 4,
    backgroundColor: '#6E83AF',
    alignItems: 'center',
    justifyContent: 'center',
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
    gap: 10,
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
    gap: 6,
  },
  removeFileText: {
    fontSize: 10,
    color: '#FF5B57',
    fontWeight: '600',
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