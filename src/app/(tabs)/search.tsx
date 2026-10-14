import { router } from "expo-router";
import { Button } from "expo-router/build/react-navigation";
import { Text, View,Pressable } from "react-native";
import { Property, properties } from "@/componenets/data";
 
  const Search = ()=> {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-900">
        Welcome to Nativewind!
      </Text>
      {
        properties.map((property)=>{
          // const pushId =(property.id)

          return(

      <Pressable className="mt-4 text-black bg-green-100"
       onPress={()=> router.push(`../property/${property.id}`)}
      
      >
        <Text > propertyid {property.id} </Text>

      </Pressable>
          )
        })
      }

    </View>
  );
}

export default Search