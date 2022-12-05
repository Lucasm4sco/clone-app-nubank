import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { HookUseContext } from "./src/hooks/HookUseContext";
import useLoadFonts from "./src/hooks/useLoadFonts";
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-gesture-handler';

import Header from "./src/components/Header";
import HomeScreen from "./src/screens/Home";
import TabBarIcons from "./src/components/TabBarIcons";
import user from './data/user';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

export default () => {
  return (
    <HookUseContext>
      <App />
    </HookUseContext>
  )
}

function App() {

  const { fontsLoaded, onLayoutRootView } = useLoadFonts();

  if (!fontsLoaded)
    return null;

  return (
    <HookUseContext>
      <NavigationContainer onReady={onLayoutRootView}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="initial" component={Tabs} />
          <Stack.Screen name="Settings" component={HomeScreen} initialParams={user} />
        </Stack.Navigator>
      </NavigationContainer>
    </HookUseContext>
  );
}

function Tabs() {

  const navigation = useNavigation();

  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        header: () => <Header navigation={navigation} />,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
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
        initialParams={{user}}
      />
      <Tab.Screen 
        name="MoreOptions" 
        component={HomeScreen} 
        initialParams={{user}}
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
