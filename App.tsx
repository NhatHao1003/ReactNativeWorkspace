import { useState } from 'react';

import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

import { Course, courses } from './src/data/course';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <CourseListScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function CourseListScreen() {

  const [searchText, setSearchText] = useState('');


  const keyword = searchText.trim().toLowerCase();

  const filteredCourses = courses.filter((course) => {
    if (!keyword) {
      return true;
    }

    return (
      course.title.toLowerCase().includes(keyword) ||
      course.instructor.toLowerCase().includes(keyword) ||
      course.category.toLowerCase().includes(keyword)
    );
  });

  const openCourse = (course: Course) => {
    Alert.alert(
      'Khóa học',
      `Bạn đã chọn: ${course.title}`,
    );
  };

  return (
    <FlatList
      data={filteredCourses}
      keyExtractor={(item) => item.id}

      contentContainerStyle={styles.listContent}

      // Khoảng cách giữa các khóa học
      ItemSeparatorComponent={() => (
        <View style={styles.separator} />
      )}

      // Header chứa tiêu đề + ô tìm kiếm
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.screenTitle}>
            Khóa học
          </Text>

          <Text style={styles.subtitle}>
            Khám phá các khóa học của bạn
          </Text>

          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Tìm kiếm khóa học..."
            placeholderTextColor="#A0A8B9"
            style={styles.input}
          />

          <Text style={styles.resultText}>
            {filteredCourses.length} khóa học
          </Text>
        </View>
      }

      // Hiển thị khi không có kết quả
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>
            Không tìm thấy khóa học
          </Text>

          <Text style={styles.emptyText}>
            Hãy thử tìm kiếm với từ khóa khác.
          </Text>
        </View>
      }

      // Hiển thị từng khóa học
      renderItem={({ item }) => (
        <CourseRow
          course={item}
          onPress={openCourse}
        />
      )}

      showsVerticalScrollIndicator={false}
    />
  );
}

interface CourseRowProps {
  course: Course;
  onPress: (course: Course) => void;
}

function CourseRow({
  course,
  onPress,
}: CourseRowProps) {
  return (
    <Pressable
      onPress={() => onPress(course)}
      style={({ pressed }) => [
        styles.courseCard,
        pressed && styles.courseCardPressed,
      ]}
    >
      <Text style={styles.courseTitle}>
        {course.title}
      </Text>

      <Text style={styles.instructor}>
        Giảng viên: {course.instructor}
      </Text>

      <View style={styles.courseFooter}>
        <Text style={styles.category}>
          {course.category}
        </Text>

        <Text style={styles.studentCount}>
          {course.students} sinh viên
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
  },

  listContent: {
    padding: 20,
    paddingBottom: 40,
  },

  // Header
  header: {
    marginBottom: 20,
  },

  screenTitle: {
    color: '#182035',
    fontSize: 32,
    fontWeight: '800',
  },

  subtitle: {
    color: '#697080',
    fontSize: 15,
    marginTop: 6,
    marginBottom: 20,
  },

  // TextInput
  input: {
    height: 52,
    backgroundColor: '#FFFFFF',
    color: '#182035',
    fontSize: 16,
    borderColor: '#DDE1E8',
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 16,
  },

  resultText: {
    color: '#4E5665',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 16,
  },

  // Course Card
  courseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E1E5EC',
  },

  courseCardPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },

  courseTitle: {
    color: '#182035',
    fontSize: 18,
    fontWeight: '700',
  },

  instructor: {
    color: '#686F7D',
    fontSize: 14,
    marginTop: 7,
  },

  courseFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },

  category: {
    color: '#3157A4',
    fontSize: 12,
    fontWeight: '700',
    backgroundColor: '#E8F0FF',
    borderRadius: 8,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },

  studentCount: {
    color: '#596171',
    fontSize: 13,
  },

  // Separator
  separator: {
    height: 12,
  },

  // Không có kết quả
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 250,
    paddingHorizontal: 24,
  },

  emptyTitle: {
    color: '#182035',
    fontSize: 19,
    fontWeight: '700',
  },

  emptyText: {
    color: '#747B88',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
});
