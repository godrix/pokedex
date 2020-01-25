import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/Main';
import Detail from './pages/Detail';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        headerShown: false,
      },
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
        headerShown: false,
      },
    },
  }),
);

export default Routes;
