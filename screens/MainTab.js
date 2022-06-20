import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import CalenderScreen from "./CalenderScreen";
import FeedScreen from "./FeedsScreen";
import SearchScreen from "./SearchScreen";

const Tab = createBottomTabNavigator();

function MainTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#009688",
            }}
        >
            <Tab.Screen
                name="Feeds"
                component={FeedScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="view-stream" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Calendar"
                component={CalenderScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="event" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="search" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default MainTab;
