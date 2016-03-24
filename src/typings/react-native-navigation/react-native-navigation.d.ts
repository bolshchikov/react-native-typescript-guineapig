declare module "react-native-navigation" {

  interface IScreen {
    screen: string;
    title: string;
    navigatorStyle?: any;
    label?: string;
    icon?: any;
    selectedIcon?: any;
  }

  interface ISingleScreenApp {
    screen: IScreen
  }

  interface ITabBasedAppOptions {
    tabs: Array<IScreen>;
  }

  interface INavigation {
    registerComponent: (componentName: string, constructor: () => any, store: any, Provider: any) => any;
    startSingleScreenApp: (options: ISingleScreenApp) => any;
    startTabBasedApp: (options: ITabBasedAppOptions) => any;
  }

  var Navigation: INavigation;

  export {
  Navigation
  };
}
