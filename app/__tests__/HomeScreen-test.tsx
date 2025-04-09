import { render, screen } from "@testing-library/react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "@/app/(tabs)";

const Tab = createBottomTabNavigator();

function DummyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}

describe("<HomeScreen />", () => {
  it("renders welcome message", () => {
    render(
      <NavigationContainer>
        <DummyTabs />
      </NavigationContainer>
    );

    expect(screen.getByText("Welcome!")).toBeTruthy();
  });
});
