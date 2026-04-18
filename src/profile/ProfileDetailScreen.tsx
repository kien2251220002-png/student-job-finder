import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../styles/colors';

export default function ProfileDetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.pnlHeader}>
          <View style={styles.headerTop} />
          <View style={styles.headerContent}>
            <View style={styles.avatarWrap}>
              <Text style={styles.avatarText}>NT</Text>
            </View>
            <Text style={styles.lblName}>Ngô Anh Tu</Text>
            <Text style={styles.lblLocation}>Đà Nẵng, Việt Nam</Text>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>261</Text>
                <Text style={styles.statLabel}>Follower</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>420</Text>
                <Text style={styles.statLabel}>Following</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.pnlSection}>
          <Text style={styles.lblSectionTitle}>Giới thiệu bản thân</Text>
          <Text style={styles.lblSectionText}>
            Là một người trẻ năng động, có tinh thần làm việc chủ động, cầu tiến và luôn sẵn sàng học hỏi.
          </Text>
        </View>

        <View style={styles.pnlSection}>
          <Text style={styles.lblSectionTitle}>Kinh nghiệm làm việc</Text>
          <View style={styles.detailCard}>
            <Text style={styles.detailLabel}>Manager</Text>
            <Text style={styles.detailText}>Card Pizzeria</Text>
            <Text style={styles.detailMeta}>Aug 2023 - Aug 2025 · 2 Years</Text>
          </View>
        </View>

        <View style={styles.pnlSection}>
          <Text style={styles.lblSectionTitle}>Giáo dục</Text>
          <View style={styles.detailCard}>
            <Text style={styles.detailLabel}>Information Technology</Text>
            <Text style={styles.detailText}>Da Nang Architecture University</Text>
            <Text style={styles.detailMeta}>Jan 2022 - June 2023 · 5 Years</Text>
          </View>
        </View>

        <View style={styles.pnlSection}>
          <Text style={styles.lblSectionTitle}>Kỹ năng</Text>
          <View style={styles.tagRow}>
            {['Leadership', 'Teamwork', 'Design', 'Frontend', 'Word'].map((tag) => (
              <View key={tag} style={styles.tagItem}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
            <View style={styles.tagItemSecondary}>
              <Text style={styles.tagTextSecondary}>+5 more</Text>
            </View>
          </View>
        </View>

        <View style={styles.pnlSection}>
          <Text style={styles.lblSectionTitle}>Ngôn ngữ</Text>
          <View style={styles.tagRow}>
            {['English', 'German', 'Spanish', 'Vietnamese', 'Italy'].map((tag) => (
              <View key={tag} style={styles.tagItem}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.pnlSection}>
          <Text style={styles.lblSectionTitle}>Thành tựu</Text>
          <View style={styles.detailCard}>
            <Text style={styles.detailLabel}>Wireless Symposium (IWS)</Text>
            <Text style={styles.detailText}>Young Scientist</Text>
            <Text style={styles.detailMeta}>2024</Text>
          </View>
        </View>

        <View style={styles.pnlSection}> 
          <Text style={styles.lblSectionTitle}>CV</Text>
          <View style={styles.cvCard}>
            <MaterialCommunityIcons name="file-pdf-box" size={24} color={COLORS.primary} />
            <View style={styles.cvTextWrap}>
              <Text style={styles.cvTitle}>NgôAnhTu_CV.pdf</Text>
              <Text style={styles.cvSubtitle}>PDF file</Text>
            </View>
            <TouchableOpacity style={styles.cvAction} activeOpacity={0.8}>
              <Ionicons name="download-outline" size={22} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
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
  scrollContent: {
    paddingBottom: 24,
  },
  pnlHeader: {
    marginBottom: 20,
  },
  headerTop: {
    height: 220,
    backgroundColor: '#7FC7F0',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  headerContent: {
    position: 'absolute',
    top: 20,
    left: 16,
    right: 16,
    alignItems: 'center',
  },
  avatarWrap: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 6,
    marginBottom: 14,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: '900',
    color: COLORS.primary,
  },
  lblName: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.white,
    marginBottom: 4,
  },
  lblLocation: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 14,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 16,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.white,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.85)',
  },
  pnlSection: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 18,
    marginHorizontal: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },
  lblSectionTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.darkText,
    marginBottom: 12,
  },
  lblSectionText: {
    fontSize: 13,
    color: COLORS.darkText,
    lineHeight: 20,
  },
  detailCard: {
    backgroundColor: '#F7F9FF',
    borderRadius: 18,
    padding: 16,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.darkText,
    marginBottom: 6,
  },
  detailText: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginBottom: 6,
  },
  detailMeta: {
    fontSize: 12,
    color: COLORS.gray,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tagItem: {
    backgroundColor: '#EDF9F7',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 10,
    marginBottom: 10,
  },
  tagItemSecondary: {
    backgroundColor: '#FFF4E6',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  tagText: {
    fontSize: 12,
    color: COLORS.darkText,
    fontWeight: '700',
  },
  tagTextSecondary: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '700',
  },
  cvCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F7F3FF',
    borderRadius: 18,
    padding: 16,
  },
  cvTextWrap: {
    flex: 1,
    marginLeft: 14,
  },
  cvTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.darkText,
    marginBottom: 4,
  },
  cvSubtitle: {
    fontSize: 12,
    color: COLORS.gray,
  },
  cvAction: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
