import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Job } from '../types';
import { COLORS } from '../../../styles/colors';

type JobCardProps = {
  job: Job;
  onPress: () => void;
  onApply: () => void;
};

export default function JobCard({ job, onPress, onApply }: JobCardProps) {

  // ✅ đặt logic ở đây (ngoài return)
  let logoSource;

  switch (job.id) {
    case "1":
      logoSource = require("../../../picture/PIC1.png");
      break;
    case "2":
      logoSource = require("../../../picture/PIC1.png");
      break;
    default:
      logoSource = require("../../../picture/PIC1.png");
  }

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.88} onPress={onPress}>

      <View style={styles.headerRow}>

        <View style={styles.logoContainer}>
          <Image
            source={logoSource}
            style={styles.logoImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.infoColumn}>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <Text style={styles.companyText}>{job.company}</Text>
          <Text style={styles.locationText}>{job.location}</Text>
        </View>

      </View>

      <View style={styles.metaRow}>
        <Text style={styles.salaryText}>{job.salary}</Text>
        <View style={styles.tagBadge}>
          <Text style={styles.tagText}>{job.jobType}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.applyButton} onPress={onApply}>
        <Text style={styles.applyText}>Đăng ký ngay</Text>
      </TouchableOpacity>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // ... các styles cũ giữ nguyên ...
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  // Style mới cho Container chứa ảnh
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: 12, // Bo góc nhẹ cho hiện đại
    backgroundColor: COLORS.lightGray,
    marginRight: 12,
    overflow: 'hidden', // Để ảnh không tràn khỏi bo góc
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  // Style cho ảnh
  logoImage: {
    width: '100%',
    height: '100%',
  },
  infoColumn: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.darkText,
    marginBottom: 4,
  },
  companyText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 2,
  },
  locationText: {
    fontSize: 11,
    color: COLORS.gray,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  salaryText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.primary,
  },
  tagBadge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: COLORS.lightGray,
    borderRadius: 999,
  },
  tagText: {
    fontSize: 10,
    color: COLORS.darkText,
    fontWeight: '700',
  },
  applyButton: {
    height: 38,
    borderRadius: 10,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '700',
  },
});