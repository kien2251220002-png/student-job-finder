import React, { useMemo, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/RootNavigator';

type MessageScreenProps = NativeStackScreenProps<RootStackParamList, 'Message'>;

type Mode = 'inbox' | 'chat' | 'empty';

type Contact = {
  id: string;
  name: string;
  preview: string;
  time: string;
  avatar: string;
};

type ChatBubble = {
  id: string;
  side: 'left' | 'right';
  text: string;
  time: string;
  withCheck?: boolean;
  fileCard?: {
    name: string;
    size: string;
  };
};

const CONTACTS: Contact[] = [
  {
    id: '1',
    name: 'AI Beta',
    preview: 'Tôi có thể giúp gì cho bạn ?',
    time: 'Yesterday',
    avatar: '🤖',
  },
  {
    id: '2',
    name: 'Gill',
    preview: 'I love you bae, dont leave me',
    time: '30m ago',
    avatar: '👨',
  },
  {
    id: '3',
    name: 'Sơn Tùng M-TP',
    preview: 'a thấy nhạc em rất hay, a muốn...',
    time: '09:30 am',
    avatar: '🕴️',
  },
  {
    id: '4',
    name: 'Huỳnh Công Hiếu',
    preview: 'bro bro, im trippin. Drake too annoying...',
    time: '01:00 pm',
    avatar: '🎤',
  },
  {
    id: '5',
    name: 'Bray',
    preview: 'Nhạc em hay không anh...',
    time: '06:00 pm',
    avatar: '🧑',
  },
  {
    id: '6',
    name: 'Momo',
    preview: 'hey, do u free tonight?',
    time: 'Yesterday',
    avatar: '🧑‍🦱',
  },
  {
    id: '7',
    name: 'DRT',
    preview: 'Cmon bro, we need u now, the world...',
    time: '5m ago',
    avatar: '🎭',
  },
];

const CHAT_MESSAGES: ChatBubble[] = [
  {
    id: '1',
    side: 'right',
    text: 'Helo a zai, good morning',
    time: '09:30 am',
    withCheck: true,
  },
  {
    id: '2',
    side: 'left',
    text: 'Chào c, a cần gì?',
    time: '09:31 am',
  },
  {
    id: '3',
    side: 'right',
    text: 'Em có vài bản demo nhạc, không biết a có hứng thú không. Hay là e gửi a 1 bản a xem thử nhé',
    time: '09:33 am',
    withCheck: true,
  },
  {
    id: '4',
    side: 'left',
    text: 'Ừ được đấy, gửi cho a xem thử',
    time: '09:35 am',
  },
  {
    id: '5',
    side: 'right',
    text: '',
    time: '09:37 am',
    withCheck: true,
    fileCard: {
      name: 'Em cua ngay hom qua',
      size: '857 KB PDF',
    },
  },
];

export default function MessageScreen({ navigation }: MessageScreenProps) {
  const [mode, setMode] = useState<Mode>('inbox');
  const [selectedContactId, setSelectedContactId] = useState<string>('3');

  const selectedContact = useMemo(
    () => CONTACTS.find((contact) => contact.id === selectedContactId) ?? CONTACTS[0],
    [selectedContactId]
  );

  const onSelectContact = (id: string) => {
    setSelectedContactId(id);
    setMode('chat');
  };

  const renderBottomBar = () => (
    <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.bottomItem} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home-outline" size={18} color="#1A1C36" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottomItem}>
        <Ionicons name="chatbubble-outline" size={18} color="#1A1C36" />
        <View style={styles.activeIndicator} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottomItem} onPress={() => navigation.navigate('Post')}>
        <MaterialCommunityIcons name="account-group-outline" size={18} color="#1A1C36" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottomItem}>
        <Feather name="user" size={18} color="#1A1C36" />
      </TouchableOpacity>
    </View>
  );

  const renderInbox = () => (
    <>
      <View style={styles.inboxTopRow}>
        <Text style={styles.inboxTitle}>Messages</Text>
        <View style={styles.inboxActions}>
          <TouchableOpacity activeOpacity={0.8}>
            <Feather name="edit-3" size={16} color="#F29A34" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <MaterialCommunityIcons name="dots-vertical" size={18} color="#656987" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchWrap}>
        <Ionicons name="search" size={14} color="#B1B5C7" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search message"
          placeholderTextColor="#B1B5C7"
        />
      </View>

      <FlatList
        data={CONTACTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.inboxListContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.contactRow} activeOpacity={0.85} onPress={() => onSelectContact(item.id)}>
            <View style={styles.contactAvatar}>
              <Text style={styles.contactAvatarText}>{item.avatar}</Text>
            </View>

            <View style={styles.contactMeta}>
              <Text style={styles.contactName}>{item.name}</Text>
              <Text style={styles.contactPreview} numberOfLines={1}>
                {item.preview}
              </Text>
            </View>

            <Text style={styles.contactTime}>{item.time}</Text>
          </TouchableOpacity>
        )}
      />

      {renderBottomBar()}
    </>
  );

  const renderChat = () => (
    <>
      <View style={styles.chatHeader}>
        <TouchableOpacity onPress={() => setMode('inbox')} style={styles.chatHeaderIcon} activeOpacity={0.85}>
          <Ionicons name="arrow-back" size={18} color="#1C1F3D" />
        </TouchableOpacity>

        <View style={styles.chatUserWrap}>
          <View style={styles.chatUserAvatar}>
            <Text style={styles.contactAvatarText}>{selectedContact.avatar}</Text>
          </View>

          <View>
            <Text style={styles.chatUserName}>{selectedContact.name}</Text>
            <Text style={styles.chatOnline}>Online</Text>
          </View>
        </View>

        <View style={styles.chatRightActions}>
          <TouchableOpacity style={styles.chatHeaderIcon} activeOpacity={0.85}>
            <Ionicons name="call-outline" size={17} color="#F09B36" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatHeaderIcon} activeOpacity={0.85}>
            <Ionicons name="search" size={17} color="#F09B36" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.todayText}>Today</Text>

      <ScrollView style={styles.chatBody} contentContainerStyle={styles.chatContent} showsVerticalScrollIndicator={false}>
        {CHAT_MESSAGES.map((message) => (
          <View
            key={message.id}
            style={[
              styles.bubbleRow,
              message.side === 'right' ? styles.bubbleRowRight : styles.bubbleRowLeft,
            ]}
          >
            {message.side === 'left' ? (
              <View style={styles.miniAvatar}>
                <Text style={styles.miniAvatarText}>{selectedContact.avatar}</Text>
              </View>
            ) : null}

            <View
              style={[
                styles.bubble,
                message.side === 'right' ? styles.bubbleRight : styles.bubbleLeft,
                message.fileCard ? styles.fileBubble : null,
              ]}
            >
              {message.fileCard ? (
                <View style={styles.fileCardContent}>
                  <View style={styles.pdfIconWrap}>
                    <Text style={styles.pdfIconText}>PDF</Text>
                  </View>
                  <View>
                    <Text style={styles.fileName}>{message.fileCard.name}</Text>
                    <Text style={styles.fileMeta}>{message.fileCard.size}</Text>
                  </View>
                </View>
              ) : (
                <Text style={message.side === 'right' ? styles.bubbleTextRight : styles.bubbleTextLeft}>
                  {message.text}
                </Text>
              )}
            </View>

            {message.side === 'right' ? (
              <View style={styles.messageMetaRight}>
                <Text style={styles.messageTimeRight}>{message.time}</Text>
                {message.withCheck ? <Ionicons name="checkmark-done" size={13} color="#36AE48" /> : null}
              </View>
            ) : (
              <Text style={styles.messageTimeLeft}>{message.time}</Text>
            )}
          </View>
        ))}
      </ScrollView>

      <View style={styles.messageInputWrap}>
        <TouchableOpacity style={styles.clipButton} activeOpacity={0.8}>
          <Ionicons name="attach" size={18} color="#6E7390" />
        </TouchableOpacity>

        <TextInput
          style={styles.messageInput}
          placeholder="Write your message"
          placeholderTextColor="#B2B6C7"
        />

        <TouchableOpacity style={styles.sendButton} activeOpacity={0.85}>
          <Ionicons name="send" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {renderBottomBar()}
    </>
  );

  const renderEmpty = () => (
    <>
      <View style={styles.emptyWrap}>
        <Text style={styles.emptyTitle}>No Message</Text>
        <Text style={styles.emptyDescription}>Bạn không có tin nhắn nào.....</Text>

        <TouchableOpacity style={styles.emptyButton} activeOpacity={0.85} onPress={() => setMode('inbox')}>
          <Text style={styles.emptyButtonText}>CREATE A MESSAGE</Text>
        </TouchableOpacity>
      </View>
      {renderBottomBar()}
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      {mode === 'inbox' ? renderInbox() : null}
      {mode === 'chat' ? renderChat() : null}
      {mode === 'empty' ? renderEmpty() : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEFF4',
  },
  inboxTopRow: {
    marginTop: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inboxTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#191C38',
  },
  inboxActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  searchWrap: {
    marginHorizontal: 12,
    marginTop: 12,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#F5F7FA',
    borderWidth: 1,
    borderColor: '#EBEEF4',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    gap: 6,
  },
  searchInput: {
    flex: 1,
    color: '#1D203D',
    fontSize: 12,
  },
  inboxListContent: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 88,
    gap: 8,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  },
  contactAvatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#DCE3EC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },
  contactAvatarText: {
    fontSize: 16,
  },
  contactMeta: {
    flex: 1,
  },
  contactName: {
    fontSize: 13,
    fontWeight: '700',
    color: '#212448',
  },
  contactPreview: {
    marginTop: 1,
    fontSize: 10,
    color: '#9EA3B7',
  },
  contactTime: {
    fontSize: 10,
    color: '#B0B4C6',
    marginLeft: 8,
  },
  chatHeader: {
    marginTop: 8,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chatHeaderIcon: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatUserWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
    marginLeft: 4,
  },
  chatUserAvatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#DCE3EC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatUserName: {
    fontSize: 13,
    fontWeight: '700',
    color: '#202448',
  },
  chatOnline: {
    marginTop: 1,
    fontSize: 9,
    color: '#3BA14A',
  },
  chatRightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  todayText: {
    alignSelf: 'center',
    marginTop: 4,
    marginBottom: 6,
    fontSize: 9,
    color: '#B0B4C4',
  },
  chatBody: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#F8FAFD',
    borderWidth: 1,
    borderColor: '#ECEFF4',
  },
  chatContent: {
    paddingHorizontal: 8,
    paddingTop: 10,
    paddingBottom: 12,
    gap: 8,
  },
  bubbleRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  bubbleRowLeft: {
    justifyContent: 'flex-start',
  },
  bubbleRowRight: {
    justifyContent: 'flex-end',
  },
  miniAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#DCE3EC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginBottom: 12,
  },
  miniAvatarText: {
    fontSize: 10,
  },
  bubble: {
    maxWidth: '72%',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  bubbleLeft: {
    backgroundColor: '#EAE4DC',
  },
  bubbleRight: {
    backgroundColor: '#F0A44A',
  },
  bubbleTextLeft: {
    color: '#313450',
    fontSize: 11,
    lineHeight: 16,
  },
  bubbleTextRight: {
    color: '#FFFFFF',
    fontSize: 11,
    lineHeight: 16,
  },
  messageMetaRight: {
    marginLeft: 5,
    alignItems: 'flex-end',
    marginBottom: 1,
  },
  messageTimeRight: {
    fontSize: 8,
    color: '#A4A9BC',
    marginBottom: 1,
  },
  messageTimeLeft: {
    fontSize: 8,
    color: '#A4A9BC',
    marginLeft: 5,
    marginBottom: 1,
  },
  fileBubble: {
    paddingVertical: 6,
  },
  fileCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  pdfIconWrap: {
    width: 24,
    height: 28,
    borderRadius: 4,
    backgroundColor: '#E6492F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pdfIconText: {
    color: '#FFFFFF',
    fontSize: 7,
    fontWeight: '700',
  },
  fileName: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  fileMeta: {
    marginTop: 2,
    fontSize: 8,
    color: '#FFE6CC',
  },
  messageInputWrap: {
    marginHorizontal: 10,
    marginTop: 8,
    marginBottom: 78,
    minHeight: 40,
    borderRadius: 10,
    backgroundColor: '#F6F8FC',
    borderWidth: 1,
    borderColor: '#EBEDF3',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    gap: 4,
  },
  clipButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageInput: {
    flex: 1,
    color: '#1E2140',
    fontSize: 11,
  },
  sendButton: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#34A247',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#212549',
  },
  emptyDescription: {
    marginTop: 10,
    fontSize: 11,
    color: '#A3A7B9',
  },
  emptyButton: {
    marginTop: 100,
    borderRadius: 5,
    backgroundColor: '#329A3D',
    paddingHorizontal: 20,
    paddingVertical: 9,
  },
  emptyButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  bottomBar: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 8,
    height: 62,
    borderRadius: 22,
    backgroundColor: '#D6F0FA',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.8)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
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
});
