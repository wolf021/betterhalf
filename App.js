import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SettingScreen from './Screens/SettingScreen';
import SearchScreen from './Screens/SearchScreen';
import tw from 'tailwind-react-native-classnames';
import LanguageScreen from './Screens/LanguageScreen';
import AdvancedFiltersScreen from './Screens/AdvancedFiltersScreen';
import InterestedScreen from './Screens/InterestedScreen';
import BestMatches from './Screens/BestMatches';
import ChatScreen from './Screens/ChatScreen';
import RootNavigator from './Navigation/RootNavigator';



export default function App() {
  return (
    <View style={{flex:1}}>
     
      <StatusBar style="auto"  />
  <RootNavigator/>
    </View>
  );
}


