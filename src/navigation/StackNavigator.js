import {createStackNavigator} from '@react-navigation/stack';
import {CardStyleInterpolators} from '@react-navigation/stack';
import Demo from '../Demo';
import Test from '../Test';
import Details from '../Details';
import Edit from '../Edit';
import Home from '../Home';
import LocationTrack from '../LocationTrack';
import ExactLocation from '../ExactLoaction';
import AnimatedScroll from '../screens/AnimatedScroll';


const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        keyboardHidesTabBar: true,
      }}>
    <Stack.Screen name='animatedScrollview' component={AnimatedScroll} />
      <Stack.Screen name='exactlocation' component={ExactLocation}/>
      <Stack.Screen name="locationtrack" component={LocationTrack}/>
      <Stack.Screen name="test" component={Test} />
      <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="Demo" component={Demo} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Edit" component={Edit} />
    </Stack.Navigator>
  );
}
