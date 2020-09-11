import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Header from './components/Header';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: 1},
    {text: 'create an app', key: 2},
    {text: 'play on the switch', key: 3},
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to do form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => <Text>{item.text}</Text>}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    flex: 1,
  },
  list: {
    marginTop: 20,
  },
});
