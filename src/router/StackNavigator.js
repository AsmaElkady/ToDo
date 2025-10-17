import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import TodoDetails from "../pages/TodoDetails";
import { ROUTES } from "../constants/index";

const { Navigator, Screen } = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        // headerBackTitle: "Back",
        // headerBackTitleStyle: {
        //   fontSize: 16,
        // },
      }}
    >
      <Screen name={ROUTES.HOME} component={Home} />
      <Screen name={ROUTES.TODO_DETAILS} component={TodoDetails} />
    </Navigator>
  );
};

export default StackNavigator;
