import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/RootNavigator';
import { useJobs } from '../features/job/services/JobContext';
import JobCard from '../features/job/components/JobCard';
import { COLORS } from '../styles/colors';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const {
    filteredJobs,
    categories,
    selectedCategory,
    searchText,
    setSearchText,
    setSelectedCategory,
  } = useJobs();

  const renderJobCard = ({ item }: { item: any }) => (
    <JobCard
      job={item}
      onPress={() => navigation.navigate('JobDetail', { job: item })}
      onApply={() => navigation.navigate('JobDetail', { job: item })}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.greeting}>Xin chào,</Text>
            <Text style={styles.userName}>Sinh viên SJOB</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={20} color={COLORS.darkText} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={18} color={COLORS.gray} />
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm công việc, công ty hoặc địa điểm"
            placeholderTextColor={COLORS.gray}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>


        <View style={{ paddingHorizontal: 16, marginTop: 10, marginBottom: 16 }}>
          <Image
            source={require("../picture/PIC1.png")}
            style={{
              width: "100%",
              height: 136,
              borderRadius: 24,
            }}
            resizeMode="cover"
          />
        </View>

        <View style={{ flexDirection: 'row', paddingHorizontal: 16, gap: 12, marginBottom: 16 }}>
          {/* Cột trái: Remote Job */}
          <View style={{
            flex: 1,
            backgroundColor: '#3E9643',
            borderRadius: 20,
            padding: 16,
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 160
          }}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1067/1067357.png' }}
              style={{ width: 40, height: 40, marginBottom: 10 }}
            />
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#0D0D26' }}>44.5k</Text>
            <Text style={{ fontSize: 14, color: '#0D0D26' }}>Remote Job</Text>
          </View>

          {/* Cột phải: Full Time & Part Time */}
          <View style={{ flex: 1, gap: 12 }}>
            {/* Full Time */}
            <View style={{
              flex: 1,
              backgroundColor: '#637D92',
              borderRadius: 20,
              padding: 16,
              justifyContent: 'center'
            }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#0D0D26' }}>66.8k</Text>
              <Text style={{ fontSize: 14, color: '#0D0D26' }}>Full Time</Text>
            </View>

            {/* Part Time */}
            <View style={{
              flex: 1,
              backgroundColor: '#C27D12',
              borderRadius: 20,
              padding: 16,
              justifyContent: 'center'
            }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#0D0D26' }}>38.9k</Text>
              <Text style={{ fontSize: 14, color: '#0D0D26' }}>Part Time</Text>
            </View>
          </View>
        </View>

        <View style={styles.categorySection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryPill,
                  selectedCategory === category && styles.categoryPillActive,
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === category && styles.categoryTextActive,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <Text style={styles.sectionTitle}>{filteredJobs.length} công việc phù hợp</Text>

        <FlatList
          data={filteredJobs}
          renderItem={renderJobCard}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>Không tìm thấy công việc phù hợp.</Text>
            </View>
          }
        />
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomItemActive}>
          <Ionicons name="home" size={20} color={COLORS.secondary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomItem}>
          <Ionicons name="bookmark-outline" size={20} color={COLORS.darkText} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.floatingButton}>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color={COLORS.darkText} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomItem}>
          <Ionicons name="people-outline" size={20} color={COLORS.darkText} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomItem}>
          <Ionicons name="person-outline" size={20} color={COLORS.darkText} />
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
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 120,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  greeting: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  userName: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.darkText,
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 48,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: COLORS.darkText,
    fontSize: 13,
  },
  categorySection: {
    marginBottom: 18,
  },
  categoryPill: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: COLORS.gray,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginRight: 10,
    backgroundColor: COLORS.white,
  },
  categoryPillActive: {
    borderColor: COLORS.secondary,
    backgroundColor: COLORS.secondary,
  },
  categoryText: {
    fontSize: 12,
    color: COLORS.darkText,
    fontWeight: '700',
  },
  categoryTextActive: {
    color: COLORS.white,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.darkText,
    marginBottom: 14,
  },
  listContent: {
    paddingBottom: 40,
  },
  emptyState: {
    marginTop: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    height: 62,
    borderRadius: 22,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 6,
  },
  bottomItem: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomItemActive: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: COLORS.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
});


