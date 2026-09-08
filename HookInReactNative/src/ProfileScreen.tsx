import { useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { UserContext } from "./UserContext";

export function ProfileScreen(){
    const user = useContext(UserContext)
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Xin chào, {user?.name}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });