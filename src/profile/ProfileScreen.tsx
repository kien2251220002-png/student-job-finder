import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackParamList, Experience, Education } from '../navigation/RootNavigator';
import { COLORS } from '../styles/colors';

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({ navigation }: ProfileScreenProps) {
  const [aboutText, setAboutText] = useState(
    'Là một người trẻ năng động, có tinh thần học hỏi, chăm chỉ và luôn sẵn sàng thử thách.'
  );

  const [skills, setSkills] = useState<string[]>([
    'Leadership',
    'Teamwork',
    'Design',
    'Frontend',
    'Word',
  ]);

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      position: 'Manager',
      company: 'Card Pizzeria',
      startDate: 'Aug 2023',
      endDate: 'Aug 2025',
      description: 'Mô tả công việc',
    },
  ]);

  const [educations, setEducations] = useState<Education[]>([
    {
      level: 'Information Technology',
      institution: 'Da Nang Architecture University',
      field: 'Information Technology',
      startDate: 'Jan 2022',
      endDate: 'June 2023',
      description: '',
    },
  ]);

  const handleAboutSave = (text: string) => {
    setAboutText(text);
  };

  const handleExperienceSave = (experience: Experience, index?: number) => {
    setExperiences((prev) => {
      if (index === undefined) {
        return [...prev, experience];
      }
      return prev.map((item, i) => (i === index ? experience : item));
    });
  };

  const handleExperienceDelete = (index: number) => {
    setExperiences((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEducationSave = (education: Education, index?: number) => {
    setEducations((prev) => {
      if (index === undefined) {
        return [...prev, education];
      }
      return prev.map((item, i) => (i === index ? education : item));
    });
  };

  const handleEducationDelete = (index: number) => {
    setEducations((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.pnlHeader}>
          <View style={styles.headerTop} />
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconCircle} activeOpacity={0.8}>
              <Ionicons name="share-social-outline" size={18} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.iconCircle, styles.iconCircleMargin]} activeOpacity={0.8}>
              <Ionicons name="settings-outline" size={18} color={COLORS.white} />
            </TouchableOpacity>
          </View>
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
            <TouchableOpacity style={styles.btnEditProfile} activeOpacity={0.8}>
              <Text style={styles.lblEditProfile}>Edit profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.pnlContent}>
          <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionTitleWrap}>
                <Text style={styles.sectionTitle}>Giới thiệu bản thân</Text>
              </View>
              <TouchableOpacity
                style={styles.editAction}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('ProfileEditAbout', {
                    aboutInitial: aboutText,
                    onSave: handleAboutSave,
                  })
                }
              >
                <Ionicons name="pencil-outline" size={18} color={COLORS.primary} />
              </TouchableOpacity>
            </View>
            <Text style={styles.sectionText}>{aboutText}</Text>
          </View>

          <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Kinh nghiệm làm việc</Text>
              <TouchableOpacity
                style={styles.addAction}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('ProfileEditExperience', {
                    mode: 'add',
                    onSave: handleExperienceSave,
                  })
                }
              >
                <Ionicons name="add" size={20} color={COLORS.primary} />
              </TouchableOpacity>
            </View>
            {experiences.length === 0 ? (
              <Text style={styles.emptyText}>Chưa có kinh nghiệm làm việc</Text>
            ) : (
              experiences.map((experience, index) => (
                <View key={index} style={styles.expRow}>
                  <View>
                    <Text style={styles.cardLabel}>{experience.position}</Text>
                    <Text style={styles.cardSubLabel}>{experience.company}</Text>
                    <Text style={styles.cardMeta}>
                      {experience.startDate} - {experience.endDate}
                    </Text>
                  </View>
                  <View style={styles.expActionRow}>
                    <TouchableOpacity
                      style={styles.smallAction}
                      activeOpacity={0.8}
                      onPress={() =>
                        navigation.navigate('ProfileEditExperience', {
                          mode: 'edit',
                          experience,
                          index,
                          onSave: handleExperienceSave,
                          onDelete: handleExperienceDelete,
                        })
                      }
                    >
                      <Ionicons name="pencil-outline" size={18} color={COLORS.primary} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.smallAction, styles.smallActionMargin]}
                      activeOpacity={0.8}
                      onPress={() =>
                        navigation.navigate('ProfileEditExperienceConfirm', {
                          mode: 'delete',
                          onConfirm: () => handleExperienceDelete(index),
                        })
                      }
                    >
                      <Ionicons name="trash-outline" size={18} color={COLORS.primary} />
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}
          </View>

          <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Giáo dục</Text>
              <TouchableOpacity
                style={styles.addAction}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('ProfileEditEducation', {
                    mode: 'add',
                    onSave: handleEducationSave,
                  })
                }
              >
                <Ionicons name="add" size={20} color={COLORS.primary} />
              </TouchableOpacity>
            </View>
            {educations.length === 0 ? (
              <Text style={styles.emptyText}>Chưa có học vấn</Text>
            ) : (
              educations.map((education, index) => (
                <View key={index} style={styles.expRow}>
                  <View>
                    <Text style={styles.cardLabel}>{education.level}</Text>
                    <Text style={styles.cardSubLabel}>{education.institution}</Text>
                    <Text style={styles.cardMeta}>
                      {education.startDate} - {education.endDate}
                    </Text>
                  </View>
                  <View style={styles.expActionRow}>
                    <TouchableOpacity
                      style={styles.smallAction}
                      activeOpacity={0.8}
                      onPress={() =>
                        navigation.navigate('ProfileEditEducation', {
                          mode: 'edit',
                          education,
                          index,
                          onSave: handleEducationSave,
                          onDelete: handleEducationDelete,
                        })
                      }
                    >
                      <Ionicons name="pencil-outline" size={18} color={COLORS.primary} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.smallAction, styles.smallActionMargin]}
                      activeOpacity={0.8}
                      onPress={() =>
                        navigation.navigate('ProfileEditEducationConfirm', {
                          mode: 'delete',
                          onConfirm: () => handleEducationDelete(index),
                        })
                      }
                    >
                      <Ionicons name="trash-outline" size={18} color={COLORS.primary} />
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}
          </View>

          <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Kỹ năng</Text>
              <TouchableOpacity
                style={styles.addAction}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('ProfileEditSkills', {
                    skills,
                    onSave: setSkills,
                  })
                }
              >
                <Ionicons name="pencil-outline" size={18} color={COLORS.primary} />
              </TouchableOpacity>
            </View>
            <View style={styles.tagRow}>
              {skills.map((label) => (
                <View key={label} style={styles.tagItem}>
                  <Text style={styles.tagText}>{label}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Ngôn ngữ</Text>
              <TouchableOpacity style={styles.addAction} activeOpacity={0.8}>
                <Ionicons name="pencil-outline" size={18} color={COLORS.primary} />
              </TouchableOpacity>
            </View>
            <View style={styles.tagRow}> 
              {['English', 'German', 'Spanish', 'Vietnamese', 'Italy'].map((label) => (
                <View key={label} style={styles.tagItemSecondary}>
                  <Text style={styles.tagTextSecondary}>{label}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Thành tựu</Text>
              <TouchableOpacity style={styles.addAction} activeOpacity={0.8}>
                <Ionicons name="pencil-outline" size={18} color={COLORS.primary} />
              </TouchableOpacity>
            </View>
            <Text style={styles.cardLabel}>Wireless Symposium (IWS)</Text>
            <Text style={styles.cardSubLabel}>Young Scientist</Text>
            <Text style={styles.cardMeta}>2024</Text>
          </View>

          <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>CV</Text>
              <TouchableOpacity style={styles.addAction} activeOpacity={0.8}>
                <Ionicons name="trash-outline" size={20} color={COLORS.primary} />
              </TouchableOpacity>
            </View>
            <View style={styles.cvCard}>
              <View style={styles.cvIconWrap}>
                <MaterialCommunityIcons name="file-pdf-box" size={22} color={COLORS.primary} />
              </View>
              <View style={styles.cvTextWrap}>
                <Text style={styles.cvTitle}>Jamet Kudasi - CV - UI/UX Designer</Text>
                <Text style={styles.cvSubtitle}>867 kb · 14 Feb 2025 at 11:30 am</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.pnlBottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="home-outline" size={22} color={COLORS.darkText} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.8}>
          <Ionicons name="chatbubble-outline" size={22} color={COLORS.darkText} />
        </TouchableOpacity>
        <View style={styles.navCenterButton}>
          <MaterialCommunityIcons name="plus" size={28} color={COLORS.white} />
        </View>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.8}>
          <Ionicons name="notifications-outline" size={22} color={COLORS.darkText} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.8}>
          <Ionicons name="person-outline" size={22} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: 110,
  },
  pnlHeader: {
    backgroundColor: 'transparent',
  },
  headerTop: {
    height: 240,
    backgroundColor: '#70C3F0',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  headerIcons: {
    position: 'absolute',
    right: 20,
    top: 18,
    flexDirection: 'row',
  },
  iconCircleMargin: {
    marginLeft: 10,
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.16)',
    alignItems: 'center',
    justifyContent: 'center',
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
    shadowOpacity: 0.1,
    shadowRadius: 12,
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
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 18,
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
  btnEditProfile: {
    backgroundColor: COLORS.white,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },
  lblEditProfile: {
    color: COLORS.darkText,
    fontWeight: '700',
  },
  pnlContent: {
    marginTop: -32,
    paddingHorizontal: 16,
  },
  sectionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitleWrap: {
    paddingRight: 10,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.darkText,
  },
  editAction: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#F6FBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addAction: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#F6FBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionText: {
    fontSize: 13,
    color: COLORS.darkText,
    lineHeight: 20,
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.darkText,
    marginBottom: 4,
  },
  cardSubLabel: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginBottom: 6,
  },
  cardMeta: {
    fontSize: 12,
    color: COLORS.gray,
  },
  expRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  expActionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  smallAction: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#F6FBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallActionMargin: {
    marginLeft: 8,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  emptyText: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 8,
  },
  tagItem: {
    backgroundColor: '#F2F8FF',
    borderRadius: 18,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 10,
    marginBottom: 10,
  },
  tagItemSecondary: {
    backgroundColor: '#FFF4E6',
    borderRadius: 18,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 10,
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
    backgroundColor: '#F7F3FF',
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  cvIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#E9F5FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cvTextWrap: {
    flex: 1,
    marginLeft: 14,
  },
  cvTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: COLORS.darkText,
    marginBottom: 4,
  },
  cvSubtitle: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  pnlBottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 28,
    paddingTop: 14,
    paddingBottom: 20,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 10,
  },
  navItem: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navCenterButton: {
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: '#FF9E3C',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -28,
    shadowColor: '#FF9E3C',
    shadowOpacity: 0.3,
    shadowRadius: 18,
    elevation: 10,
  },
});
