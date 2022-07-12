import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon,LocationMarkerIcon } from "react-native-heroicons/solid";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_Description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity 
    activeOpacity={0.8}
    className="bg-white mr-3 shadow  ">
      <Image source={imgUrl} className="w-full h-64 object-cover rounded-sm" />
      <Text className="font-bold mt-2 ml-2 mb-1">{title}</Text>
      <View className="flex-row  items-center ml-2">
        <StarIcon size={20} color="green" opacity={.5} />
        <Text className="m-1 text-xs text-gray-500">{rating}.</Text>
        <Text className=" text-xs text-gray-500">{genre}</Text>
      </View>

      <View className="flex-row items-center ml-2">
        <LocationMarkerIcon size={20} color="gray" />
        <Text className="m-1 text-xs text-gray-500">Nearby. {address}</Text>

      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
