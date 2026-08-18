import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function ResuiltStudent() {
  return (
    <View style={styles.infoStudent}>
      <Image
        source={require('../../assets/avt.png')}
        style={styles.avatarImage}
        resizeMode="cover"
      />

      <View style={styles.infoContainer}>
        <Text style={styles.studentName}>Nguyễn Phương Nhật Hào</Text>
        <Text style={styles.studentId}>Mã SV: 23721351</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoStudent: {
    flexDirection: 'row',    
    alignItems: 'center',     
    paddingVertical: 40,     
    paddingHorizontal: 20,    
    backgroundColor: '#fff',  
  },
  avatarImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  infoContainer: {
    marginLeft: 20,          
    flex: 1,
  },
  studentName: {
    fontSize: 18,             
    fontWeight: '700',        
    color: '#1C2434',        
    marginBottom: 7,          
  },
  studentId: {
    fontSize: 14,             
    color: '#5E6573',          
  },
});
