import SearchScreen from "../screens/SearchScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sort from "../components/search/Sort";
import Filter from "../components/search/Filter";

const Stacks = createNativeStackNavigator();

function SearchNav({route}) {
  return (
    <Stacks.Navigator screenOptions={{ headerShown: false }}>
      <Stacks.Screen clean={route?.params?.clean} name="Search" component={SearchScreen} />
      <Stacks.Screen name="Sort" component={Sort} />
      <Stacks.Screen name="Filter" component={Filter} />
    </Stacks.Navigator>
  );
}

export default SearchNav;
