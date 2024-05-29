import {createDrawerNavigator} from '@react-navigation/drawer';
import MapHomeScreen from '../../screens/map/MapHomeScreen';
import FeedHomeScreen from '../../screens/feed/FeedHomeScreen';
import CalendarHome from '../../screens/calendar/CalendarHome';

const Drawer = createDrawerNavigator();

function MainDrawerNavigatort() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
      <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
      <Drawer.Screen name="CalendarHome" component={CalendarHome} />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigatort;
