import { Navigation } from 'react-native-navigation';

import LoginScreen from './login';
import HomeScreen from './home';
import FavoriteScreen from './favorite';

// register all screens of the app (including internal ones)
export function registerScreens(store: Redux.Store, Provider: any) {
  Navigation.registerComponent('rnts.LoginScreen', () => LoginScreen, store, Provider);
  Navigation.registerComponent('rnts.Home', () => HomeScreen, store, Provider);
  Navigation.registerComponent('rnts.Favorite', () => FavoriteScreen, store, Provider);
}
