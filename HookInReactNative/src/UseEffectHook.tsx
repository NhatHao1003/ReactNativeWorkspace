import { useEffect, useState } from "react";
import { Switch, Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";

export function UseEffectHook(){
    const [isConnected, setIsConnected] = useState(true);
    const [message, setMessage] = useState('Chưa kết nối');
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        if (isConnected) {
          setMessage('Thiết bị đã kết nối');
          setTime(new Date())
        } else {
          setMessage('Thiết bị đã ngắt kết nối');
        }
      }, [isConnected]);
      


    return(
        
       <SafeAreaView  style={styles.container}>
             <View>
                <Switch value={isConnected} onValueChange={setIsConnected} />
                <Text>{message}</Text>
                <Text>Thời gian thiết bị được kết nối gần nhất : {time.toLocaleTimeString('vi-VN')}</Text>
            </View>
       </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });