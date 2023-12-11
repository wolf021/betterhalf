import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Searchbar,Checkbox } from 'react-native-paper';
import CheckBox from '../Components/CheckBox/CheckBox';
import ToggleButton from '../Components/ToggleButton/ToggleButton';

export default function LanguageScreen() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [checked, setChecked] = React.useState(false);

    const onChangeSearch = query => setSearchQuery(query);
  return (
    <SafeAreaView style={[tw`mx-4 `]} >
      <Text style={[tw`text-center my-6 mx-4  `]} >Looking For people who knows specific language? Select up to 3 languages and we'll try and cinnect you with people who knowall of them</Text>

      <Searchbar style={[tw`bg-white border border-gray-500`]}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    <ScrollView style={[tw`my-1  my-5   `,{height:"70%"}]} >
        <View style={[tw`flex-row items-center my-3  `, {columnGap:10}]} >
       <CheckBox/>
    <Text style={[tw`text-xl`]} >Afar</Text>
        </View>
        <View style={[tw`flex-row items-center my-3  `, {columnGap:10}]} >
       <CheckBox/>
    <Text style={[tw`text-xl`]} >Afrikana</Text>
        </View>
        <View style={[tw`flex-row items-center my-3  `, {columnGap:10}]} >
       <CheckBox/>
    <Text style={[tw`text-xl`]} >Albanian</Text>
        </View>
        <View style={[tw`flex-row items-center my-3  `, {columnGap:10}]} >
       <CheckBox/>
    <Text style={[tw`text-xl`]} >Amharic</Text>
        </View>
        <View style={[tw`flex-row items-center my-3  `, {columnGap:10}]} >
       <CheckBox/>
    <Text style={[tw`text-xl`]} >Arabic</Text>
        </View>
        <View style={[tw`flex-row items-center my-3  `, {columnGap:10}]} >
       <CheckBox/>
    <Text style={[tw`text-xl`]} >Armenian</Text>
        </View>
        <View style={[tw`flex-row items-center my-3  `, {columnGap:10}]} >
       <CheckBox/>
    <Text style={[tw`text-xl`]} >Assamese</Text>
        </View>
        <View style={[tw`flex-row items-center my-3  `, {columnGap:10}]} >
       <CheckBox/>
    <Text style={[tw`text-xl`]} >Assamese</Text>
        </View>
        <View style={[tw`flex-row items-center my-3  `, {columnGap:10}]} >
       <CheckBox/>
    <Text style={[tw`text-xl`]} >Assamese</Text>
        </View>
        <View style={[tw`flex-row items-center my-3  `, {columnGap:10}]} >
       <CheckBox/>
    <Text style={[tw`text-xl`]} >Assamese</Text>
        </View>
        <View style={[tw`flex-row items-center my-3  `, {columnGap:10}]} >
       <CheckBox/>
    <Text style={[tw`text-xl`]} >Assamese</Text>
        </View>
        <View style={[tw`flex-row items-center my-3  `, {columnGap:10}]} >
       <CheckBox/>
    <Text style={[tw`text-xl`]} >Assamese</Text>
        </View>
        <View style={[tw`flex-row items-center my-3  `, {columnGap:10}]} >
       <CheckBox/>
    <Text style={[tw`text-xl`]} >Assamese</Text>
        </View>
        <View style={[tw`flex-row items-center my-3  `, {columnGap:10}]} >
       <CheckBox/>
    <Text style={[tw`text-xl`]} >Assamese</Text>
        </View>
        <View style={[tw`flex-row items-center my-3  `, {columnGap:10}]} >
       <CheckBox/>
    <Text style={[tw`text-xl`]} >Assamese</Text>
        </View>
        <View style={[tw`flex-row items-center my-3  `, {columnGap:10}]} >
       <CheckBox/>
    <Text style={[tw`text-xl`]} >Assamese</Text>
        </View>
        <View style={[tw`flex-row items-center my-3  `, {columnGap:10}]} >
       <CheckBox/>
    <Text style={[tw`text-xl`]} >Assamese</Text>
        </View>
        <View style={[tw`flex-row items-center my-3  `, {columnGap:10}]} >
       <CheckBox/>
    <Text style={[tw`text-xl`]} >Assamese</Text>
        </View>
    </ScrollView>
  
  <View style={[tw`flex-row items-center justify-between`]} >
    <Text>Show Other People if i run out</Text>
    <ToggleButton/>
  </View>
   
    </SafeAreaView>
  )
}