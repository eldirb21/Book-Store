import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Sidebar from './src/nav/sidebar';
import {createStackNavigator} from '@react-navigation/stack';
import SigininPage from './src/pages/auth/sigininPage';
import {stackAuthData} from './src/nav/nav-data';
const Stack = createStackNavigator();

export default function App() {
  const [isLogin, setisLogin] = React.useState(false);
  const StackAuth = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {stackAuthData.map((x, i) => {
          return <Stack.Screen key={i} name={x.name} component={x.component} />;
        })}
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      {isLogin ? (
        StackAuth()
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={'Sidebar'} component={Sidebar} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
