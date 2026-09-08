import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { UseStateHook } from './src/UseStateHook';
import { UseEffectHook } from './src/UseEffectHook';
import { UserContext } from './src/UserContext';
import { ProfileScreen } from './src/ProfileScreen';
import LoginScreen from './src/LoginScreen';
import ProductScreen from './src/ProductScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* 1 */}
      {/* <UseStateHook /> */}

      {/* 2 */}
      {/* <UseEffectHook/> */}

      {/* 3 */}
      {/* <UserContext.Provider value={{ name: 'Nguyễn Phương Nhật Hào' }}>
          <ProfileScreen />
      </UserContext.Provider> */}

      {/* 4 */}
      {/* <LoginScreen/> */}

      {/* 5 */}
      <ProductScreen/>


    </View>
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
