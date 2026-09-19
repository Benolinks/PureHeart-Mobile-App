import { NativeTabs } from "expo-router/unstable-native-tabs";
import { View } from "react-native";


export default function TabLayout() {
  return (
    <View className="flex-1 bg-[#050816]">
      <NativeTabs
       labelVisibilityMode="labeled"
        tintColor="blue"
        backgroundColor="#C0C0C0"
        
      >
        {/* HOME */}
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Icon
            sf={{
              default: "house",
              selected: "house.fill",
            }}
            md={{
              default: "home",
              selected: "home_filled",
            }}
          />
          <NativeTabs.Trigger.Label
          
                            selectedStyle={{
                        fontSize: 12,
                        fontWeight: "700",
                    
                            }}>
            Home
          </NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>

        {/* MESSAGES */}
        <NativeTabs.Trigger name="message">
          
            <NativeTabs.Trigger.Label
            
>
  Home
</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon
            sf={{
              default: "message",
              selected: "message.fill",
            }}
            md={{
              default: "chat",
              selected: "chat",
            }}
          />
          <NativeTabs.Trigger.Label
           selectedStyle={{
                        fontSize: 12,
                        fontWeight: "700",
                       
                    
                            }}>
            Messages
          
          </NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>

        {/* SEARCH */}
        <NativeTabs.Trigger name="search">
          <NativeTabs.Trigger.Icon
            sf={{
              default: "magnifyingglass",
              selected: "magnifyingglass.circle.fill",
            }}
            md={{
              default: "search",
              selected: "search",
            }}
          />
          <NativeTabs.Trigger.Label
           selectedStyle={{
                        fontSize: 12,
                        fontWeight: "700",
                    
                            }}>
            Search
          </NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>

        {/* PROFILE */}
        <NativeTabs.Trigger name="profile">
          <NativeTabs.Trigger.Icon
            sf={{
              default: "person",
              selected: "person.fill",
            }}
            md={{
              default: "person",
              selected: "person",
            }}
          />
          <NativeTabs.Trigger.Label
           selectedStyle={{
                        fontSize: 12,
                        fontWeight: "700",
                    
                            }}>
            Profile
          </NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    </View>
  );
}