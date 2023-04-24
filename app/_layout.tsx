import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Animated, Easing } from 'react-native';


export default function Layout() {
    function TabBarIcon(props: {
        name: React.ComponentProps<typeof FontAwesome>["name"];
        color: string;
      }) {
        return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
      }
      const focusedColor="green"
  return (
    <Tabs >
     <Tabs.Screen
        name="index"
        options={{
          title: "Overview",
      tabBarActiveTintColor: "#25be30",
      tabBarInactiveTintColor: "black",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color}/>,
        }}
      />
        <Tabs.Screen
        name="details"
       
        options={{
            tabBarActiveTintColor: "#25be30",
            tabBarInactiveTintColor: "black",
          title: "Details",
          tabBarIcon: ({ color }) => <TabBarIcon name="briefcase" color={color} />,
        }}
      />
     <Tabs.Screen
        name="info"
        options={{
            tabBarActiveTintColor: "#25be30",
            tabBarInactiveTintColor: "black",
          title: "Final Page",
          tabBarIcon: ({ color }) => <TabBarIcon name="info" color={color} />,
        }}
      />
        <Tabs.Screen
        name= "product"
        options={{
            tabBarActiveTintColor: "#25be30",
            tabBarInactiveTintColor: "black",
      headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="tag" color={color} />,
        }}
      />
    </Tabs>
  )
}