import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';
import ResuiltStudent from './src/components/ResultStudent';
import { SearchField } from './src/components/SearchField';
import { InforStudent } from './src/components/InforStudent';
import { Button } from './src/components/Button';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style = {styles.container}>
          <Header></Header>
          <ResuiltStudent></ResuiltStudent>
          <SearchField></SearchField>
          <InforStudent></InforStudent>
          <Button></Button>
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

});
