import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Catalogo from './src/screens/Catalogo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#2F2F3A',
              textAlign: 'cente',
            },
            headerShadowVisible: false,
            headerTitleAlign: 'center'
          }} />
          <Stack.Screen name="Catalogo" component={Catalogo} options={{
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#2F2F3A',
              textAlign: 'cente',
            },
            headerShadowVisible: false,
            headerTitleAlign: 'center'
          }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};
