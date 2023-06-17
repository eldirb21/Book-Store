import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {stackData} from './nav-data';

const Stack = createStackNavigator();

function StackTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {stackData.map((x, i) => {
        return <Stack.Screen key={i} name={x.name} component={x.component} />;
      })}
    </Stack.Navigator>
  );
}

export default StackTab;
