import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';



export function UseStateHook(){
    const [fullName, setFullName] = useState('');
    

  return (
    <View style={styles.container}>
      <TextInput style={styles.line}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Nhập họ tên"
            />
        <Text style={{color : 'green'}}>
        {fullName ? `Xin chào, ${fullName}!` : 'Vui lòng nhập họ tên'}
        </Text>


    </View>
  );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: 12,
      justifyContent: 'center',
      padding: 24,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
    },
    line :{
        borderWidth : 1,
        borderColor : 'black'
    }
  });
  