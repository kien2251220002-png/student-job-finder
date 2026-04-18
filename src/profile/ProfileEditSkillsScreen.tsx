import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/RootNavigator';
import { COLORS } from '../styles/colors';

type ProfileEditSkillsScreenProps = NativeStackScreenProps<RootStackParamList, 'ProfileEditSkills'>;

const suggestionList = [
  'Leadership',
  'Teamwork',
  'Design',
  'Frontend',
  'Word',
  'Communication',
  'Responsibility',
  'Problem solving',
  'UX/UI Design',
  'Graphic Design',
  'Product Design',
  'Analytical thinking',
];

export default function ProfileEditSkillsScreen({ navigation, route }: ProfileEditSkillsScreenProps) {
  const [searchText, setSearchText] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>(route.params?.skills ?? []);

  const filteredSuggestions = useMemo(() => {
    const lower = searchText.trim().toLowerCase();
    return suggestionList.filter(
      (skill) =>
        skill.toLowerCase().includes(lower) && !selectedSkills.includes(skill)
    );
  }, [searchText, selectedSkills]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((item) => item !== skill) : [...prev, skill]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.8} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color={COLORS.darkText} />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Thêm kỹ năng</Text>
        <View style={styles.iconButtonPlaceholder} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.searchCard}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search skills"
            placeholderTextColor={COLORS.gray}
            value={searchText}
            onChangeText={setSearchText}
          />
          {searchText.length > 0 && (
            <TouchableOpacity style={styles.clearButton} activeOpacity={0.8} onPress={() => setSearchText('')}>
              <Ionicons name="close-circle" size={20} color={COLORS.gray} />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.tagRow}> 
          {selectedSkills.map((skill) => (
            <View key={skill} style={styles.tagSelected}>
              <Text style={styles.tagTextSelected}>{skill}</Text>
              <TouchableOpacity onPress={() => toggleSkill(skill)} style={styles.tagClose} activeOpacity={0.8}>
                <Ionicons name="close" size={14} color={COLORS.white} />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <Text style={styles.sectionLabel}>Gợi ý kỹ năng</Text>
        {filteredSuggestions.map((skill) => (
          <TouchableOpacity
            key={skill}
            style={styles.suggestionItem}
            activeOpacity={0.8}
            onPress={() => toggleSkill(skill)}
          >
            <Text style={styles.suggestionText}>{skill}</Text>
          </TouchableOpacity>
        ))}

        {filteredSuggestions.length === 0 && (
          <Text style={styles.emptyText}>Không có kỹ năng phù hợp</Text>
        )}
      </ScrollView>

      <View style={styles.footerRow}>
        <TouchableOpacity
          style={[styles.btnCancel, styles.footerButton]}
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.btnCancelText}>HỦY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnSave, styles.footerButton]}
          activeOpacity={0.8}
          onPress={() => {
            route.params?.onSave?.(selectedSkills);
            navigation.goBack();
          }}
        >
          <Text style={styles.btnSaveText}>THÊM</Text>
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
  searchCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    marginBottom: 16,
    height: 52,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: COLORS.darkText,
  },
  clearButton: {
    marginLeft: 8,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  tagSelected: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 18,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 10,
    marginBottom: 10,
  },
  tagTextSelected: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '700',
    marginRight: 8,
  },
  tagClose: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.darkText,
    marginBottom: 12,
  },
  suggestionItem: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 4,
  },
  suggestionText: {
    fontSize: 14,
    color: COLORS.darkText,
  },
  emptyText: {
    fontSize: 13,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: 12,
  },
  footerRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  footerButton: {
    flex: 1,
  },
  btnCancel: {
    height: 52,
    borderRadius: 16,
    backgroundColor: '#C07A08',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  btnCancelText: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.white,
  },
  btnSave: {
    flex: 1,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#239B33',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSaveText: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.white,
  },
});
