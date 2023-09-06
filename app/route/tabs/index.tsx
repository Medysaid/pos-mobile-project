// import React from 'react';
import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons';
import COLORS from '../../../constants/Colors';
import plants from '../../../constants/plants';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from '../../../components/Button';
import { Appbar, Card, FAB, SegmentedButtons } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';
import AppBars from '../../../components/AppBars';
import Icon from 'react-native-paper/src/components/Icon';
const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;
const width = Dimensions.get('window').width / 2 - 30;
const screenWidth = Dimensions.get("window").width;
export default function () {
  const users = [
    { id: '1', name: 'products 1', total: 10000 },
    { id: '2', name: 'products 2', total: 20000 },
    { id: '3', name: 'products 3', total: 30000 },
    // Add more user data here
  ];
  const renderItem = ({ item }: any) => (
    <View style={style.userItem}>
      <Icon source="pound-box" size={23} color="black" />
      <Text style={style.userName}>{item.name}</Text>
      <Text style={style.userName}>{item.total}</Text>
    </View>
  );

  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];

  const [value, setValue] = React.useState('');
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Sales"] // optional
  };
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(14, 17, 22, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  const Card1 = ({ plant }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => { }}>

        <View style={style.card}>
          <View style={{ alignItems: 'flex-end' }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',

              }}>

            </View>
          </View>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={plant.img}
              style={{ flex: 1, resizeMode: 'contain' }}
            />
          </View>

          <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10 }}>
            {plant.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
              TZS {plant.price}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.green,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{ fontSize: 22, color: COLORS.white, fontWeight: 'bold' }}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <AppBars title="POS Home" />
      <SafeAreaView
        style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}>

        <View style={style.header}>
          <SegmentedButtons
            value={value}
            onValueChange={setValue}
            buttons={[
              {
                value: 'sale',
                label: 'Sales',
              },
              {
                value: 'Purchase',
                label: 'Purchase',
              },
              { value: 'Cost', label: 'Cost' },
            ]}
          />
        </View>
        <Card>
          <Card.Content>
            <Text >Total Sales</Text>
            <Text >TZS 1000</Text>
          </Card.Content>
        </Card>
        <LineChart
          style={{ marginTop: '5%' }}
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />
        <FlatList
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 40,
          }}
          numColumns={2}
          data={plants}
          renderItem={({ item }) => {
            return <Card1 plant={item} />;
          }}
        />

        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

        {/* <FAB
        mode="flat"
        size="medium"
        icon="plus"
        onPress={() => { }}
        style={[
          style.fab,
          { bottom: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },
        ]}
      /> */}
      </SafeAreaView>
    </>

  );



}
const style = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  userName: {
    marginLeft: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: { fontSize: 16, color: 'grey', fontWeight: 'bold' },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 200,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '5%'
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    right: 16,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
});