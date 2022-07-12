import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white ">
      <View className="flex-row pb-3 pt-5 items-center mx-4 space-x-2">
        <Image
          source={require("../../assets/img/logo.jpg")}
          className="h-10 w-10 bg-gray-300 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={30} color="#00CCBB" />
      </View>
      {/* Search Bar */}

      <View className="flex-row p-3 items-center mb-2   mx-4 space-x-2  bg-gray-200 rounded-md ">
        <View className="flex-row  flex-1">
          <SearchIcon size={20} color="gray" className="mr-52" />
          <TextInput placeholder="restaurant and cuissine" />
        </View>
        <AdjustmentsIcon size={30} color="#00CCBB" />
      </View>
      {/* Body */}
      <ScrollView className="bg-gray-100">
        {/* categories */}
        <Categories />

        {/* futured rows */}
        <FeaturedRow
        id="123"
        
          title="featured"
          description="paid palcnd"
          featurdCategorys="featured"
        />
               <FeaturedRow
               id="1253"
          title="featured"
          description="paid palcnd"
        />
               <FeaturedRow
               id="1233"
          title="featured"
          description="paid palcnd"
        />
               <FeaturedRow
               id="123"
          title="featured"
          description="paid palcnd"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
