import React, { useMemo, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/RootNavigator';

type PostScreenProps = NativeStackScreenProps<RootStackParamList, 'Post'>;

type ViewMode = 'list' | 'create' | 'detail';

type PostItem = {
  id: string;
  author: string;
  avatar: string;
  timeAgo: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
};

type ReplyItem = {
  id: string;
  avatar: string;
  content: string;
};

const INITIAL_POSTS: PostItem[] = [
  {
    id: '1',
    author: 'Patrick Ngo',
    avatar: '🧑',
    timeAgo: '21 minutes ago',
    title: 'TÌM VIỆC PARTIME',
    content:
      'Chào mọi người, em muốn tìm 1 công việc partime ạ. Em là sinh viên năm cuối, em có thể làm buổi chiều và tối. Em xin cảm ơn.',
    likes: 12,
    comments: 3,
  },
  {
    id: '2',
    author: 'Hamster',
    avatar: '🐹',
    timeAgo: '45 minutes ago',
    title: 'TÌM VIỆC FULL TIME',
    content:
      'Xin chào. Em tìm công việc full time vì đang rảnh rang cũng như muốn có được 1 khoản chi tiêu cá nhân để lo cho gia đình, em là Tùng 55 Tuổi . Sinh viên 5 Đại học Bách khoa ...Xem Thêm',
    likes: 12,
    comments: 10,
  },
];

const INITIAL_REPLIES: ReplyItem[] = [
  {
    id: '1',
    avatar: '🧑‍🍳',
    content: 'Anh đang tuyển nhân viên quán cà phê, liên lạc anh để biết thêm thông tin chi tiết nhé.',
  },
  {
    id: '2',
    avatar: '🧑‍💻',
    content: 'Em có muốn làm quán kem không? Anh đang tuyển 2 vị trí (thu ngân, quản lý), liên lạc anh nếu muốn apply nhé',
  },
  {
    id: '3',
    avatar: '🍜',
    content: 'Nhà hàng bếp cuốn Đà Nẵng đang tuyển nhân viên, inb để biết thêm thông tin chi tiết',
  },
];

function PostCard({
  item,
  onOpenComments,
}: {
  item: PostItem;
  onOpenComments: (id: string) => void;
}) {
  return (
    <View style={styles.postCard}>
      <View style={styles.authorRow}>
        <View style={styles.authorAvatar}>
          <Text style={styles.authorAvatarText}>{item.avatar}</Text>
        </View>

        <View style={styles.authorMeta}>
          <Text style={styles.authorName}>{item.author}</Text>
          <View style={styles.timeRow}>
            <Ionicons name="time-outline" size={13} color="#A3A5BC" />
            <Text style={styles.timeText}>{item.timeAgo}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postContent}>{item.content}</Text>

      <View style={styles.postFooter}>
        <TouchableOpacity style={styles.reactionButton} activeOpacity={0.85}>
          <Ionicons name="heart" size={20} color="#F15A57" />
          <Text style={styles.reactionCount}>{item.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.reactionButton} activeOpacity={0.85} onPress={() => onOpenComments(item.id)}>
          <Ionicons name="chatbox-outline" size={18} color="#656987" />
          <Text style={styles.reactionCount}>{item.comments}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function PostScreen({ navigation }: PostScreenProps) {
  const [mode, setMode] = useState<ViewMode>('list');
  const [posts, setPosts] = useState<PostItem[]>(INITIAL_POSTS);
  const [selectedPostId, setSelectedPostId] = useState<string>('1');
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const selectedPost = useMemo(
    () => posts.find((item) => item.id === selectedPostId) ?? posts[0],
    [posts, selectedPostId]
  );

  const onBackPress = () => {
    if (mode === 'list') {
      navigation.goBack();
      return;
    }

    setMode('list');
  };

  const onSubmitPost = () => {
    if (!newTitle.trim() || !newDescription.trim()) {
      return;
    }

    const created: PostItem = {
      id: String(Date.now()),
      author: 'Tu Ngo',
      avatar: '🧑',
      timeAgo: 'just now',
      title: newTitle.trim().toUpperCase(),
      content: newDescription.trim(),
      likes: 0,
      comments: 0,
    };

    setPosts((prev) => [created, ...prev]);
    setNewTitle('');
    setNewDescription('');
    setMode('list');
  };

  const openDetail = (postId: string) => {
    setSelectedPostId(postId);
    setMode('detail');
  };

  const renderHeader = () => (
    <View style={styles.headerCard}>
      <TouchableOpacity style={styles.headerBackButton} onPress={onBackPress} activeOpacity={0.85}>
        <Ionicons name="chevron-back" size={18} color="#171A39" />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>Post</Text>

      {mode === 'create' ? (
        <TouchableOpacity style={styles.postTopAction} onPress={onSubmitPost} activeOpacity={0.85}>
          <Text style={styles.postTopActionText}>Post</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.headerActionPlaceholder} />
      )}
    </View>
  );

  const renderListMode = () => (
    <>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard item={item} onOpenComments={openDetail} />}
        contentContainerStyle={styles.postsListContent}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity style={styles.addButtonFloating} onPress={() => setMode('create')} activeOpacity={0.9}>
        <Ionicons name="add" size={36} color="#FFFFFF" />
      </TouchableOpacity>

      {renderBottomBar('community')}
    </>
  );

  const renderCreateMode = () => (
    <View style={styles.createWrap}>
      <Text style={styles.addPostTitle}>Add Post</Text>

      <View style={styles.profileRow}>
        <View style={styles.profileAvatar}>
          <Text style={styles.profileAvatarText}>👤</Text>
        </View>
        <View>
          <Text style={styles.profileName}>Tu Ngo</Text>
          <Text style={styles.profileLocation}>Dong Ha, VietNam</Text>
        </View>
      </View>

      <Text style={styles.inputLabel}>Post title</Text>
      <TextInput
        style={styles.postTitleInput}
        value={newTitle}
        onChangeText={setNewTitle}
        placeholder="Viết tiêu đề"
        placeholderTextColor="#B8BCCE"
      />

      <Text style={styles.inputLabel}>Description</Text>
      <TextInput
        style={styles.postDescriptionInput}
        multiline
        textAlignVertical="top"
        value={newDescription}
        onChangeText={setNewDescription}
        placeholder="Bạn muốn nói gì...."
        placeholderTextColor="#B8BCCE"
      />

      <View style={styles.createBottomTools}>
        <View style={styles.createMediaTools}>
          <TouchableOpacity style={styles.toolIcon} activeOpacity={0.8}>
            <Ionicons name="camera" size={19} color="#E78D2A" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolIcon} activeOpacity={0.8}>
            <Ionicons name="image" size={19} color="#E78D2A" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.hashtagText}>Add hashtag</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderDetailMode = () => (
    <View style={styles.detailWrap}>
      {selectedPost ? (
        <PostCard item={selectedPost} onOpenComments={openDetail} />
      ) : null}

      <ScrollView style={styles.commentPanel} contentContainerStyle={styles.commentPanelContent}>
        {INITIAL_REPLIES.map((reply) => (
          <View key={reply.id} style={styles.commentRow}>
            <View style={styles.commentAvatar}>
              <Text style={styles.commentAvatarText}>{reply.avatar}</Text>
            </View>
            <Text style={styles.commentText}>{reply.content}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.commentInputWrap}>
        <TextInput
          style={styles.commentInput}
          placeholder="Viết bình luận..."
          placeholderTextColor="#A5A8B8"
        />
      </View>

      <TouchableOpacity style={styles.addButtonFloating} onPress={() => setMode('create')} activeOpacity={0.9}>
        <Ionicons name="add" size={36} color="#FFFFFF" />
      </TouchableOpacity>

      {renderBottomBar('community')}
    </View>
  );

  const renderBottomBar = (activeTab: 'home' | 'saved' | 'community' | 'profile') => (
    <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.bottomItem} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home-outline" size={18} color="#171A39" />
        {activeTab === 'home' ? <View style={styles.activeIndicator} /> : null}
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottomItem} onPress={() => navigation.navigate('SavedJobs')}>
        <Ionicons name="bookmark-outline" size={18} color="#171A39" />
        {activeTab === 'saved' ? <View style={styles.activeIndicator} /> : null}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.floatingChat}
        activeOpacity={0.85}
        onPress={() => navigation.navigate('Message')}
      >
        <Ionicons name="chatbubble-outline" size={26} color="#161834" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottomItem}>
        <MaterialCommunityIcons
          name="account-group-outline"
          size={18}
          color={activeTab === 'community' ? '#D58A11' : '#171A39'}
        />
        {activeTab === 'community' ? <View style={styles.activeIndicator} /> : null}
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottomItem}>
        <Feather name="user" size={18} color="#171A39" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}

      {mode === 'list' ? renderListMode() : null}
      {mode === 'create' ? renderCreateMode() : null}
      {mode === 'detail' ? renderDetailMode() : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F7',
  },
  headerCard: {
    marginHorizontal: 8,
    marginTop: 8,
    minHeight: 76,
    backgroundColor: '#D4EEF9',
    borderRadius: 24,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerBackButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#EFF3F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 33,
    fontWeight: '700',
    color: '#161837',
  },
  postTopAction: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#222545',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8FAFC',
  },
  postTopActionText: {
    fontSize: 13,
    color: '#ED9B31',
    fontWeight: '700',
  },
  headerActionPlaceholder: {
    width: 40,
  },
  postsListContent: {
    paddingHorizontal: 24,
    paddingTop: 14,
    paddingBottom: 126,
    gap: 14,
  },
  postCard: {
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    shadowColor: '#ADB3C2',
    shadowOpacity: 0.2,
    shadowRadius: 9,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  authorAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#1B1D3B',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  authorAvatarText: {
    fontSize: 18,
  },
  authorMeta: {
    flex: 1,
  },
  authorName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2C2F54',
  },
  timeRow: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  timeText: {
    fontSize: 11,
    color: '#A4A8BB',
    fontWeight: '600',
  },
  postTitle: {
    marginTop: 14,
    marginHorizontal: 16,
    fontSize: 24,
    color: '#272A4C',
    fontWeight: '800',
  },
  postContent: {
    marginTop: 16,
    marginHorizontal: 16,
    marginBottom: 20,
    fontSize: 14,
    color: '#373A5A',
    lineHeight: 22,
    fontWeight: '600',
  },
  postFooter: {
    minHeight: 54,
    backgroundColor: '#E7E2F8',
    borderTopWidth: 1,
    borderTopColor: '#EBE7F6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 22,
  },
  reactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  reactionCount: {
    fontSize: 13,
    color: '#595D7D',
    fontWeight: '600',
  },
  addButtonFloating: {
    position: 'absolute',
    right: 22,
    bottom: 94,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#33A546',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 4,
    elevation: 6,
  },
  bottomBar: {
    position: 'absolute',
    left: 8,
    right: 8,
    bottom: 6,
    height: 66,
    borderRadius: 26,
    backgroundColor: '#D8F2FD',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.75)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#A8BFD0',
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  bottomItem: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingChat: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginTop: -36,
    backgroundColor: '#C9840F',
    borderWidth: 8,
    borderColor: '#EEF2F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -5,
    width: 12,
    height: 2,
    borderRadius: 1,
    backgroundColor: '#D58A11',
  },
  createWrap: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  addPostTitle: {
    fontSize: 31,
    fontWeight: '700',
    color: '#262A50',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 20,
    gap: 10,
  },
  profileAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#DFE3E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAvatarText: {
    fontSize: 20,
  },
  profileName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#232748',
  },
  profileLocation: {
    marginTop: 2,
    fontSize: 14,
    fontWeight: '600',
    color: '#5A6083',
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#262A50',
    marginBottom: 8,
  },
  postTitleInput: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#E2E7EF',
    minHeight: 50,
    paddingHorizontal: 16,
    color: '#252949',
    fontSize: 14,
    marginBottom: 20,
  },
  postDescriptionInput: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#E2E7EF',
    minHeight: 136,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: '#252949',
    fontSize: 14,
  },
  createBottomTools: {
    marginTop: 'auto',
    paddingBottom: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  createMediaTools: {
    flexDirection: 'row',
    gap: 12,
  },
  toolIcon: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hashtagText: {
    color: '#E78D2A',
    fontSize: 16,
    fontWeight: '600',
  },
  detailWrap: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 14,
    paddingBottom: 126,
  },
  commentPanel: {
    flex: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#CDCFD9',
    backgroundColor: '#FFFFFF',
  },
  commentPanelContent: {
    paddingBottom: 12,
  },
  commentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 52,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D8E2',
    paddingHorizontal: 8,
    gap: 8,
  },
  commentAvatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#16183A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentAvatarText: {
    fontSize: 17,
  },
  commentText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
    color: '#202447',
    fontWeight: '600',
  },
  commentInputWrap: {
    borderWidth: 1,
    borderColor: '#1A1C35',
    borderTopWidth: 0,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  commentInput: {
    backgroundColor: '#DEE3EA',
    borderRadius: 12,
    height: 38,
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#1B1E3C',
  },
});
