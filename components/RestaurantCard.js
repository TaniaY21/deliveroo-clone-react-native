import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline';

const RestaurantCard = ({
    id, imgUrl, rating, title, dishes, long, lat, genre, address
}) => {
  return (
    <TouchableOpacity className="bg-white mr-2 shadow">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg t-2">{title}</Text>
        <View className="flex-row items-center">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs">
            {rating} . {genre}
          </Text>
        </View>

        <View className="flex-row items-center">
          <MapPinIcon color="gray" opacity={0.5} size={22} />
          <Text className="text-xs">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default RestaurantCard