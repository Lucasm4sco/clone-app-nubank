import { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

import Header from "./src/components/Header";
import HomeScreen from "./src/screens/Home";
import TabBarIcons from "./src/components/TabBarIcons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="initial" component={Tabs} />
        <Stack.Screen name="Settings" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Tabs() {

  const navigation = useNavigation();
  const [ showValues, setShowValues ] = useState(true);

  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        header: () => {
          return <Header 
                    navigation={navigation} 
                    showValues={showValues}
                    setShowValues={setShowValues} 
                  />
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#9c3dd9',
        tabBarInactiveTintColor: '#93949d',
        tabBarIcon: ({ focused, color, size }) => <TabBarIcons 
            route={route.name}
            focused={focused}
            color={color}
            size={size}
            />
        })
      }
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
      />
      <Tab.Screen 
        name="MoreOptions" 
        component={HomeScreen} 
      />
      <Tab.Screen 
        name="Store" 
        component={HomeScreen} 
      />
      <Tab.Screen 
        name="Footbal" 
        component={HomeScreen} 
      />
    </Tab.Navigator>
  );
}

