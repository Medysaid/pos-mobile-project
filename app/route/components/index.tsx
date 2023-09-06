import { Platform, Text } from 'react-native';
import AppBars from '../../../components/AppBars';
import { Appbar } from 'react-native-paper';
import { router } from 'expo-router';
import AppBarsSaleCost from '../../../components/AppBarSaleCost';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export default function () {
  return (
    <>
      <AppBarsSaleCost title="POS Cost" />


    </>
  );
}
