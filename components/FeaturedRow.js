import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({title, description, featuredCategory, id}) => {
  return (
    <View className="px-4">
      <View className="flex-row flex-1 mt-4">
        <Text className="font-bold text-lg flex-1">{title}</Text>
        <ArrowRightIcon />
      </View>
      <Text className="font-light text-sm flex-1">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 0,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {/* Restaurant Card */}
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          genre="Japanese"
          dishes={[]}
          rating={4.5}
          description="Short description"
          long={20}
          lat={0}
          address="address"
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          genre="Japanese"
          dishes={[]}
          rating={4.5}
          description="Short description"
          long={20}
          lat={0}
          address="address"
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          genre="Japanese"
          dishes={[]}
          rating={4.5}
          description="Short description"
          long={20}
          lat={0}
          address="address"
        />
      </ScrollView>
    </View>
  );
}

export default FeaturedRow