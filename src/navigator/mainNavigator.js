import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen211969Navigator from '../features/BlankScreen211969/navigator';
import BlankScreen111968Navigator from '../features/BlankScreen111968/navigator';
import BlankScreen011967Navigator from '../features/BlankScreen011967/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen211969: { screen: BlankScreen211969Navigator },
BlankScreen111968: { screen: BlankScreen111968Navigator },
BlankScreen011967: { screen: BlankScreen011967Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
