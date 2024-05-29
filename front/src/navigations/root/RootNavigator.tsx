import MainDrawerNavigatort from '../drawer/MainDrawerNavigator';
import AuthStackNavigator from '../stack/AuthStackNavigator';

function RootNavigator() {
  const isLoggedIn = false;

  return <>{isLoggedIn ? <MainDrawerNavigatort /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;
