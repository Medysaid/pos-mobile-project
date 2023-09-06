import { Link } from 'expo-router';
// import { Text } from 'react-native';
import AppBars from '../../../components/AppBars';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
// import { View, Text, StyleSheet, Picker } from 'react-native';
import { Divider, List, Searchbar } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import { SelectList } from 'react-native-dropdown-select-list';
export default function () {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  const [selected, setSelected] = React.useState("");

  const data = [
    // { key: '1', value: 'Mobiles', disabled: true },
    { key: '2', value: 'Appliances' },
    { key: '3', value: 'Cameras' },
    // { key: '4', value: 'Computers', disabled: true },
    { key: '5', value: 'Vegetables' },
    { key: '6', value: 'Diary Products' },
    { key: '7', value: 'Drinks' },
  ]
  const ListData = ({ plant }: any) => {
    return (<List.Item style={{ marginBottom: 10, marginTop: 5 }}
      title="First Item"
      description="Item description"
      left={props => <List.Icon {...props} icon="folder" />}
      right={props => <List.Icon {...props} icon="chevron-right" />}
    />)
  }
  return (
    <>
      <AppBars title="POS Supplier" />
      <View style={styles.view}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />

      </View>
      <Divider />
      <View style={{ margin: 10 }}>
        <SelectList
          setSelected={(val: React.SetStateAction<string>) => setSelected(val)}
          data={data}
          save="value"
        />
      </View>
      <Divider />
      <FlatList
        data={data}
        renderItem={ListData}
        keyExtractor={(item) => item.key}
      />
    </>

  );

}
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  }, view: {
    margin: 10,
  },
  container: {
    flex: 1,
  },
  searchInput: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  userName: {
    marginLeft: 10,
  },
});


