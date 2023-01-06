import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassMinusIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Home screen name',
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header section */}
      <View className="flex-row pb-3 items-center space-x-2 px-4">
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className="h-7 w-7 bg-gray-300 rounded-full p-4"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Delivery now</Text>
          <Text className="font-bold text-xl">
            Current location
            <ChevronDownIcon size={20} color="black" />
          </Text>
        </View>
        <UserIcon size={35} />
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon />
          <TextInput
            placeholder="Search restaurants or cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon />
      </View>

      {/* ScrollView */}
      <ScrollView className="bg-gray-100">
        {/* Categories Component */}
        <Categories />

        {/* Featured Row */}
        <FeaturedRow
          id="1"
          title="Featured"
          description="Order food now"
          featuredCategory="featured"
        />

        <FeaturedRow
          id="2"
          title="Offers near you"
          description="Why not support your local restaurants tonight"
          featuredCategory="featured"
        />
        <FeaturedRow
          id='3'
          title="Near you"
          description="Order food now"
          featuredCategory="featured"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
