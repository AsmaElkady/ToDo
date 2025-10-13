import { Platform, TouchableOpacity, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CompletedTodos from "../pages/CompletedTodos";
import StackNavigator from "./StackNavigator";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../constants";

const { Navigator, Screen } = createBottomTabNavigator();
export const ROUTES = {
  STACK: "Stack",
  HOME: "Home",
  TODO_DETAILS: "TodoDetails",
  COMPLETED_TASKS: "CompletedTodos",
};

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: Platform.OS == "ios" ? true : false,
          headerStyle: styles.headerStyle,
          headerTintColor: colors.white,
          tabBarStyle: styles.tabContainer,
          tabBarButton: (props) => (
            <TouchableOpacity {...props} style={styles.tabBarButton} />
          ),
          tabBarLabel: ({ children, focused }) => (
            <Text
              style={{ color: focused ? colors.primary : colors.secondary }}
            >
              {children}
            </Text>
          ),
        }}
      >
        <Screen
          name={ROUTES.STACK}
          component={StackNavigator}
          options={{
            headerTitle: "Todo App",
            tabBarIcon: ({ focused }) => (
              <Feather
                name="home"
                size={20}
                color={focused ? colors.primary : colors.secondary}
              />
            ),
          }}
        />
        <Screen
          name={ROUTES.COMPLETED_TASKS}
          component={CompletedTodos}
          options={{
            title: "Completed",
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="check"
                size={20}
                color={focused ? colors.primary : colors.secondary}
              />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.primary,
  },
  tabContainer: {
    position: "absolute",
    width: "90%",
    bottom: 30,
    borderRadius: 30,
    marginHorizontal: "5%",
    height: 60,
  },
  tabBarButton: {
    height: 50,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
