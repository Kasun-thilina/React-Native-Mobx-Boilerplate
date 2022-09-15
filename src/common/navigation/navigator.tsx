import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useColorScheme} from 'react-native';
import {SplashScreen} from '../../screens/startup/splash';
import {navigationRef, useBackButtonHandler} from './navigation-utils';

export type NavigatorParamList = {
  splash: undefined;
  login: undefined;
  home: undefined;
};

const Stack = createStackNavigator<NavigatorParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="splash">
      <Stack.Screen name="splash" component={SplashScreen} />
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme();
  useBackButtonHandler(canExit);
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      {...props}>
      <AppStack />
    </NavigationContainer>
  );
};

AppNavigator.displayName = 'AppNavigator';

const exitRoutes = ['login', 'home'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
