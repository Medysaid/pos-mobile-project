import { NavigationContainer } from '@react-navigation/native';
import { Slot, Stack, Tabs } from 'expo-router';
import Icon from 'react-native-paper/src/components/Icon'





export default function () {
  return (
    <Tabs >


      <Tabs.Screen name="index" options={{
        title: "Home", tabBarBadge: 3, headerShown: false, tabBarIcon: () => {

          return <Icon source={'home'} size={15} />;
        },
      }} />
      <Tabs.Screen name="products" options={{
        title: "Products", headerShown: false, tabBarIcon: () => {

          return <Icon source={'sale'} size={15} />;
        },
      }} />
      <Tabs.Screen name="customer" options={{
        title: "Customer", headerShown: false, tabBarIcon: () => {

          return <Icon source={'puzzle'} size={15} />;
        },
      }} />
      <Tabs.Screen name="supplier" options={{
        title: "Supplier", headerShown: false, tabBarIcon: () => {

          return <Icon source={'qqchat'} size={15} />;
        },
      }} />
    </Tabs>


  );
}
