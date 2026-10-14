import { properties } from "@/componenets/data";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// typescript typo off
type ItemProps = {
  description: String;
};

const PropertyValue = () => {
  const { id } = useLocalSearchParams();

  const overview = [
    "Overview",
    "Features",
    "Reviews",
    "Direction",
    "Description",
  ];

  const [state, setstate] = useState<string | any>("Overview");

  const property = properties.find((item) => item.id === id);

  const itemsFind = properties.filter((item) => item.id === id);

  const Item = ({ description }: ItemProps) => (
    <Text className="text-xl  text-pretty ">{description}</Text>
  );

  //  If no value
  if (!property) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="font-bold  text-red-950 text">
          Property not found {property}
        </Text>
      </View>
    );
  }

  // if value exists

  return (
    <SafeAreaView className="flex-1 bg-[#edf1f5] px-4 pb-4 pt-1 rounded-[28px]">
      <View className="absolute top-0 left-[30%] h-1.5 w-[49%] rounded-full bg-[#7a7f87]" />
      <View className="mt-1">
        {/* for location  qnd ratig */}
        <View
          className="flex-row justify-between w-[85%]
                       m-auto items-center pb-1"
        >
          <View className="flex-row items-center">
            <EvilIcons name="location" size={20} color="#1f2937" />
            <Text className="ml-1 text-base font-medium text-[#374151]">
              {property.location}
            </Text>
          </View>

          <View className="flex-row items-center">
            <Text className="text-base font-semibold text-[#374151]">
              {property.rating}
            </Text>
            <FontAwesome
              name="star"
              size={18}
              color="#f59e0b"
              className="ml-1"
            />
          </View>
        </View>
        {/* View for property title  */}
        <View className="rounded-2xl bg-white px-4 py-4 shadow-sm shadow-black/5">
          <Text className="text-[28px] font-bold text-[#111827]">
            {property.title}
          </Text>
        </View>
        {/* View for type */}
        <View className="flex-row justify-evenly w-[60%] pt-4">
          <Text className="text-base font-medium text-[#4b5563]">
            .{property.baths}.Baths{" "}
          </Text>
          <Text className="text-base font-medium text-[#4b5563]">
            .{property.beds}.Beds{" "}
          </Text>
          <Text className="text-base font-medium text-[#4b5563]">
            .{property.sqft}.Sqft{" "}
          </Text>
        </View>

        {/* View for Overview */}

        <ScrollView
          horizontal
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          className="mt-2"
        >
          {overview.map((overview, index) => {
            return (
              <View key={index}>
                {/* <Pressaable></Pressaable> */}
                <Pressable onPress={() => setstate(overview)}>
                  <ScrollView
                    horizontal
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                  >
                    <View className="flex-row w-full overflow-scroll bg-transparent py-6">
                      <Text
                        className={`mr-3 rounded-full px-4 py-3 text-base font-medium
                    ${
                      state === overview
                        ? "bg-[#a726ff] text-white"
                        : "bg-white text-[#374151]"
                    }`}
                      >
                        {overview}
                      </Text>
                    </View>
                  </ScrollView>
                </Pressable>

                {/* Property Details  */}
              </View>
            );
          })}
        </ScrollView>

        {/* View For Property Details  */}

        <View className="text-wrap text-justify">
          <Text className="mb-4 text-[26px] font-semibold text-[#111827]">
            Property Details
          </Text>

          <FlatList
            data={itemsFind}
            renderItem={({ item }) => <Item description={item.description} />}
            keyExtractor={(item) => String(item.id)}
          />
        </View>

        {/* for bottomlower botton */}

        <View className="bg-[#111827] w-[80%] border border-[#1f2937]
         mx-auto rounded-[28px] p-4 flex-row items-center justify-between 
         shadow-md shadow-black/20">
          <View className="items-start">
            <Text className="text-white text-xs font-medium 
            uppercase tracking-[1.5px] text-[#d1d5db]">
              Rent
            </Text>
            <Text className="mt-2 text-3xl font-semibold text-white">
              ${property.price.toLocaleString()}/mth
            </Text>
          </View>

          <Pressable className="ml-3 flex-row items-center rounded-full
           bg-[#a726ff] px-4 py-3">
            <Feather name="phone-call" size={18} color="white" />
            <Text className="ml-2 text-sm font-semibold text-white">
              Contact Agent
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PropertyValue;
