
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './Pages/MainPage';
import DetailsPage from './Pages/DetailsPage';
import { NavigationContainer } from '@react-navigation/native';
import CreatePage from './Pages/CreatePage';

const Stack = createNativeStackNavigator();

export default function App(props) {
  

  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Home" component={MainPage} />
      <Stack.Screen name="Details" component={DetailsPage} />
      <Stack.Screen name="Create" component={CreatePage} />
    </Stack.Navigator>
  </NavigationContainer>
)};
