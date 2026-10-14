import { SafeAreaView } from "react-native-safe-area-context";
import { properties, Property } from "../../componenets/data";
import { router } from "expo-router";
import { Image } from "expo-image";
import { useState, useRef } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";

import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

const App = () => {
  const categories = [
    "All",
    "Apartment",
    "House",
    "Villa",
    "Hotel",
    "Rooms",
    "Prices",
    "Luxury",
  ];

  const [activeCategory, setActiveCategory] = useState<string>("All");

  const [heart, SetHeart] = useState<number | null>(null);

  const scrollRef = useRef<ScrollView>(null);

  const goToPosition = (position: number) => {
    scrollRef.current?.scrollTo({
      y: position,
      animated: true,
    });
  };

  return (
    <SafeAreaView className="flex-1 p-3  bg-orange-100">
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        {/* general view */}
        <View className="mt-20">
          {/* Logo name and notification view  */}
          <View
            className="flex-row  justify-between  
          items-center "
          >
            <Text className="font-bold text-3xl text-[#a726ff]">
              PureHeart Estate
            </Text>

            {/* notification and image  */}
            <View
              className=" flex-row justify-between 
              items-center me-5"
            >
              <Ionicons name="notifications" size={27} color="black" />
              <View>
                <Image
                  source={require("../../../assets/images/bens-image.jpg")}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    marginLeft: 20,
                  }}
                />
              </View>
            </View>
          </View>

          {/* view for search */}
          <View
            className=" flex-row mt-6 items-center rounded-full bg-white 
          px-4  shadow-sm"
          >
            <EvilIcons name="search" size={30} color="black" />

            <TextInput
              className="ml-2 py-3 mx-2 flex-1 text-base text-gray-700"
              placeholder="Search Address City Zip"
              placeholderTextColor="#AEAEAE"
            />
          </View>
          {/* Categories view   */}

          <View className="mt-9">
            <ScrollView
              horizontal
              scrollEnabled
              showsHorizontalScrollIndicator={false}
            >
              {categories.map((category, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setActiveCategory(category)}
                    className={`mr-3 rounded-full px-4 py-3  text-black ${
                      activeCategory === category ? "bg-[#a726ff]" : "bg-white"
                    }`}
                  >
                    <Text
                      className={`text-base font-medium text-black ${
                        activeCategory === category
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      {category}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          {/* view for Apartments and images  */}

          {properties.map((property, index) => (
            <Pressable
              onPress={() => {
                goToPosition(property.position);
                // Delay navigation for 5 seconds
                setTimeout(() => {
                  router.push(`../property/${property.id}`);
                }, 500);
              }}
            >
              <View
                className="p-1 mt-4 shadow-2xl
             shadow-gray-100 border 
             border-red-200 
             rounded-xl"
              >
                <Image
                  source={{ uri: property.image }}
                  style={{ width: "100%", height: 220, borderRadius: 15 }}
                  contentFit="cover"
                />

                {/* view for Apartmaent icon */}

                <View
                  className=" absolute 
                 top-3 left-3 bg-[#cfd1d2] rounded-xl px-2
                items-center align-middle"
                >
                  <Text className=" text-xl font-semibold">Apartment</Text>
                </View>
                {/* view for heart icon  */}

                <View className="absolute top-3 right-5">
                  <Pressable onPress={() => SetHeart(index)}>
                    <FontAwesome
                      name="heart"
                      size={28}
                      color={heart === index ? "red" : "white"}
                    />
                  </Pressable>
                </View>
                {/* for price qnd room type  */}

                <View className="flex-row justify-between mx-5 my-5">
                  <View className="flex-row  justify-evenly w-40">
                    <Text className=" text-lg">{property.baths}.Baths </Text>
                    <Text className=" text-lg">{property.beds}.Beds </Text>
                    <Text className=" text-lg">{property.sqft}.Sqft </Text>
                  </View>
                  <View>
                    <Text
                      className="font-semibold 
                      text-2xl "
                    >
                      {" "}
                      ${property.sqft}/month
                    </Text>
                  </View>
                </View>

                <View className="bg-white rounded-2xl">
                  <Text className="font-bold text-3xl">{property.title}</Text>
                </View>

                {/* for location  qnd ratig */}
                <View
                  className="flex-row justify-between w-[85%]
                       m-auto align-middle items-center"
                  key={property.id}
                >
                  <View className="flex-row my-5  ">
                    <EvilIcons name="location" size={20} color="black" />
                    <Text>{property.location}</Text>
                  </View>

                  <View className="flex-row justify-between my-5">
                    <Text>{property.rating}</Text>
                    <AntDesign
                      name="star"
                      size={20}
                      color="orange"
                      className="mx-2"
                    />
                  </View>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
