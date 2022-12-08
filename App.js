import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { HookUseContext } from "./src/hooks/HookUseContext";
import useLoadFonts from "./src/hooks/useLoadFonts";
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-gesture-handler';

import HomeScreen from "./src/screens/Home";
import InvestmentOptionsScreen from "./src/screens/InvestmentOptionsScreen";
import AccountInfoScrenn from "./src/screens/AccountInfoScreen";
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
          <Stack.Screen name="Initial" component={Tabs} />
          <Stack.Screen name="AccountInformation" component={AccountInfoScrenn} initialParams={{user}} />
        </Stack.Navigator>
      </NavigationContainer>
    </HookUseContext>
  );
}

function Tabs() {

  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        headerShown: false,
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
        name="InvestmentOptions" 
        component={InvestmentOptionsScreen} 
        initialParams={{user}}
      />
      <Tab.Screen 
        name="Store" 
        component={HomeScreen} 
        initialParams={{user}}
      />
      <Tab.Screen 
        name="Footbal" 
        component={HomeScreen} 
        initialParams={{user}}
      />
    </Tab.Navigator>
  );
}
