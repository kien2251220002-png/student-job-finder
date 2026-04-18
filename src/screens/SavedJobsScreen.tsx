import React, { useMemo, useState } from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Pressable,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/RootNavigator';

type SavedJobsScreenProps = NativeStackScreenProps<RootStackParamList, 'SavedJobs'>;

type SavedJob = {
  id: string;
  logo: string;
  title: string;
  company: string;
  salary: string;
  salaryUnit: string;
  tags: [string, string];
  postedAgo: string;
};

const INITIAL_JOBS: SavedJob[] = [
  {
    id: '1',
    logo: '',
    title: 'Product Designer',
    company: 'Google inc. HCMC, VietNam',
    salary: '25TR VNĐ',
    salaryUnit: 'Month',
    tags: ['Senior designer', 'Full time'],
    postedAgo: '25 minute ago',
  },
  {
    id: '2',
    logo: '🍕',
    title: 'Pizza Staff',
    company: 'Cardi Pizzeria Da Nang, VietNam',
    salary: '20k VNĐ',
    salaryUnit: 'Hour',
    tags: ['20+', 'Part time'],
    postedAgo: '43 minute ago',
  },
  {
    id: '3',
    logo: '🏨',
    title: 'Receptionist',
    company: 'The Herriott Hotel & SuiteDa Nang, VietNam',
    salary: '13TR VNĐ',
    salaryUnit: 'Month',
    tags: ['Good English', 'Full time'],
    postedAgo: '3 hours ago',
  },
];

export default function SavedJobsScreen({ navigation }: SavedJobsScreenProps) {
  const [savedJobs, setSavedJobs] = useState<SavedJob[]>(INITIAL_JOBS);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  const selectedJob = useMemo(
    () => savedJobs.find((job) => job.id === selectedJobId) ?? null,
    [savedJobs, selectedJobId]
  );

  const closeActionSheet = () => setSelectedJobId(null);

  const removeSelectedJob = () => {
    if (!selectedJobId) {
      return;
    }

    setSavedJobs((jobs) => jobs.filter((job) => job.id !== selectedJobId));
    setSelectedJobId(null);
  };

  const clearAllJobs = () => {
    setSavedJobs([]);
    setSelectedJobId(null);
  };

  const renderJobCard = ({ item }: { item: SavedJob }) => (
    <View style={styles.jobCard}>
      <View style={styles.jobTopRow}>
        <View style={styles.logoBubble}>
          <Text style={styles.logoText}>{item.logo}</Text>
        </View>

        <View style={styles.jobInfo}>
          <Text style={styles.jobTitle}>{item.title}</Text>
          <Text style={styles.jobCompany}>{item.company}</Text>
        </View>

        <TouchableOpacity
          onPress={() => setSelectedJobId(item.id)}
          style={styles.moreButton}
          activeOpacity={0.8}
        >
          <MaterialCommunityIcons name="dots-vertical" size={18} color="#4B4F76" />
        </TouchableOpacity>
      </View>

      <Text style={styles.salaryText}>
        {item.salary}
        <Text style={styles.salaryUnit}>/{item.salaryUnit}</Text>
      </Text>

      <View style={styles.metaRow}>
        <View style={styles.tagWrap}>
          <Text style={styles.tagText}>{item.tags[0]}</Text>
        </View>
        <View style={styles.tagWrap}>
          <Text style={styles.tagText}>{item.tags[1]}</Text>
        </View>
        <Text style={styles.postedAgo}>{item.postedAgo}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerCard}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton} activeOpacity={0.85}>
          <Ionicons name="chevron-back" size={18} color="#1B1D3A" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Công việc đã lưu</Text>

        <TouchableOpacity onPress={clearAllJobs} activeOpacity={0.8}>
          <Text style={styles.deleteAllText}>Delete all</Text>
        </TouchableOpacity>
      </View>

      {savedJobs.length === 0 ? (
        <View style={styles.emptyWrap}>
          <Text style={styles.emptyTitle}>No Savings</Text>
          <Text style={styles.emptyDescription}>
            Bạn không có công việc đã lưu nào,{"\n"}
            hãy tìm kiếm công việc và lưu.
          </Text>

          <TouchableOpacity
            style={styles.findButton}
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.85}
          >
            <Text style={styles.findButtonText}>TÌM VIỆC LÀM</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={savedJobs}
          renderItem={renderJobCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={18} color="#1A1C36" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomItem}>
          <Ionicons name="bookmark-outline" size={18} color="#D58A11" />
          <View style={styles.activeIndicator} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.floatingChat} onPress={() => navigation.navigate('Message')}>
          <Ionicons name="chatbubble-outline" size={26} color="#171A36" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomItem} onPress={() => navigation.navigate('Post')}>
          <MaterialCommunityIcons name="account-group-outline" size={18} color="#1A1C36" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomItem}>
          <Ionicons name="person-outline" size={18} color="#1A1C36" />
        </TouchableOpacity>
      </View>

      <Modal transparent visible={Boolean(selectedJob)} animationType="slide" onRequestClose={closeActionSheet}>
        <Pressable style={styles.modalOverlay} onPress={closeActionSheet}>
          <Pressable style={styles.actionSheet}>
            <View style={styles.handle} />

            <TouchableOpacity style={styles.sheetRow} activeOpacity={0.8}>
              <Ionicons name="paper-plane-outline" size={19} color="#4B4F76" />
              <Text style={styles.sheetText}>Send message</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.sheetRow} activeOpacity={0.8}>
              <Ionicons name="arrow-redo-outline" size={19} color="#4B4F76" />
              <Text style={styles.sheetText}>Shared</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.sheetRow} activeOpacity={0.8} onPress={removeSelectedJob}>
              <Ionicons name="trash-outline" size={19} color="#5E5F77" />
              <Text style={styles.sheetText}>Delete</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.applyButton} activeOpacity={0.85}>
              <Ionicons name="checkmark-circle-outline" size={17} color="#FFFFFF" />
              <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3F8',
  },
  headerCard: {
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 26,
    backgroundColor: '#D5F0FB',
    minHeight: 92,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ECF0F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 31,
    color: '#101329',
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  deleteAllText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#F49B34',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 126,
    gap: 8,
  },
  jobCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    shadowColor: '#BFC8D6',
    shadowOpacity: 0.18,
    shadowRadius: 9,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  jobTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoBubble: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#E8E7FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  logoText: {
    fontSize: 16,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222548',
  },
  jobCompany: {
    marginTop: 2,
    fontSize: 11,
    fontWeight: '600',
    color: '#555B7F',
  },
  moreButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  salaryText: {
    marginTop: 14,
    fontSize: 18,
    fontWeight: '700',
    color: '#222548',
  },
  salaryUnit: {
    fontSize: 13,
    color: '#999DB5',
    fontWeight: '600',
  },
  metaRow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tagWrap: {
    backgroundColor: '#F3F4F8',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  tagText: {
    fontSize: 10,
    color: '#4E5376',
    fontWeight: '600',
  },
  postedAgo: {
    marginLeft: 'auto',
    color: '#AFB3C6',
    fontSize: 10,
    fontWeight: '600',
  },
  emptyWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingBottom: 110,
  },
  emptyTitle: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1A1E40',
  },
  emptyDescription: {
    marginTop: 14,
    textAlign: 'center',
    color: '#4D5272',
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '600',
  },
  findButton: {
    marginTop: 94,
    backgroundColor: '#2E9737',
    borderRadius: 8,
    paddingHorizontal: 44,
    paddingVertical: 14,
  },
  findButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  bottomBar: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 10,
    height: 66,
    borderRadius: 26,
    backgroundColor: '#D9F3FB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.65)',
    shadowColor: '#A7BDD0',
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  bottomItem: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -6,
    width: 12,
    height: 2,
    borderRadius: 1,
    backgroundColor: '#D58A11',
  },
  floatingChat: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#C98512',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -36,
    borderWidth: 8,
    borderColor: '#EEF3F8',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(20, 22, 39, 0.18)',
  },
  actionSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 26,
    paddingTop: 10,
    paddingBottom: 20,
  },
  handle: {
    width: 46,
    height: 5,
    borderRadius: 4,
    alignSelf: 'center',
    backgroundColor: '#71758D',
    marginBottom: 14,
  },
  sheetRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  sheetText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2E3255',
  },
  applyButton: {
    marginTop: 8,
    borderRadius: 5,
    backgroundColor: '#32973A',
    paddingVertical: 11,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  applyText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
