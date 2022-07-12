import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4"> {description}</Text>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* restaurant card */}
        <RestaurantCard
            id="123"
            title="Do Ponto"
            description="best burgers in town"
            imgUrl={require("../../assets/img/burger.jpg")}
            rating={4.5}
            genre="Angolan Food"
            address="123 Main St NY 10001"
            short_Description="Best burgers in town"
            dishes="Burgers, Pizza, Pasta"
            long={0}
            lat={0}
        />

<RestaurantCard
            id="123"
            title="Do Ponto"
            description="best burgers in town"
            imgUrl={require("../../assets/img/burger2.jpg")}
            rating={4.5}
            genre="Angolan Food"
            address="123 Main St NY 10001"
            short_Description="Best burgers in town"
            dishes="Burgers, Pizza, Pasta"
            long={0}
            lat={0}
        />

<RestaurantCard
            id="123"
            title="Do Ponto"
            description="best burgers in town"
            imgUrl={require("../../assets/img/burger3.jpg")}
            rating={4.5}
            genre="Angolan Food"
            address="123 Main St NY 10001"
            short_Description="Best burgers in town"
            dishes="Burgers, Pizza, Pasta"
            long={0}
            lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
