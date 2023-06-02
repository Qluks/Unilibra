import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Catalogo from './src/screens/Catalogo';
import Exemplos from './src/screens/Exemplos';
import Lista from './src/screens/Lista';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{
            headerTintColor: '#000000',
            headerStyle: {
              backgroundColor: '#FFFFFF',
              textAlign: 'center',
            },
            headerShadowVisible: false,
            headerTitleAlign: 'center'
          }} />
          <Stack.Screen name="Catalogo" component={Catalogo} options={{
            headerTintColor: '#000000',
            headerStyle: {
              backgroundColor: '#FFFFFF',
              textAlign: 'center',
            },
            headerShadowVisible: false,
            headerTitleAlign: 'center'
          }} />
          <Stack.Screen name="Lista" component={Lista} options={{
            headerTintColor: '#000000',
            headerStyle: {
              backgroundColor: '#FFFFFF',
              textAlign: 'center',
            },
            headerShadowVisible: false,
            headerTitleAlign: 'center'
          }} />
          <Stack.Screen name="Exemplos" component={Exemplos} options={{
            headerTintColor: '#000000',
            headerStyle: {
              backgroundColor: '#FFFFFF',
              textAlign: 'center',
            },
            headerShadowVisible: false,
            headerTitleAlign: 'center'
          }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};
