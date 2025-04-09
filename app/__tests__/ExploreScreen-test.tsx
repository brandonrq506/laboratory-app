import { render, screen } from "@testing-library/react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import TabTwoScreen from "../(tabs)/explore";

const Tab = createBottomTabNavigator();

function DummyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explore" component={TabTwoScreen} />
    </Tab.Navigator>
  );
}

describe("<TabTwoScreen />", () => {
  it("renders head message message", () => {
    render(
      <NavigationContainer>
        <DummyTabs />
      </NavigationContainer>
    );

    expect(screen.getByText("Explore Page")).toBeTruthy();
  });

  it("does not expand sections by default", async () => {
    render(
      <NavigationContainer>
        <DummyTabs />
      </NavigationContainer>
    );

    expect(screen.queryByText(/This template includes/i)).toBeFalsy();
  });
});
