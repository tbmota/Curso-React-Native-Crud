import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { Button, Icon } from 'react-native-elements'
import { UsersProvider } from './context/UsersContext'
import 'react-native-gesture-handler'; 

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

export default props => {
    return (
      <UsersProvider>
        <NavigationContainer>
            <Stack.Navigator
              initialRouteName="UserList"
              screenOptions={screenOptions}>
                <Stack.Screen 
                      name="UserList"
                      component={UserList}
                      options={({ navigation }) => { 
                        return {
                          title: "Lista de Usuários",
                          headerRight: () => (
                            <Button
                              onPress={() => navigation.navigate("UserForm")} 
                              type="clear"
                              icon={<Icon name="add" size={25} color="white" />} 
                            />
                          )
                        }
                      }}
                />
                <Stack.Screen 
                      name="UserForm"
                      component={UserForm}
                      options={{
                        title: "Formulário de Usuários"
                      }}
                />
          </Stack.Navigator>
        </NavigationContainer>
      </UsersProvider>
    )
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}

//precisa instalar 
// npm install react-native-gesture-handler
// react-native link react-native-gesture-handler
// import 'react-native-gesture-handler';

//{} estou usando o destruction para acessar o navigation
//passo como parâmetro o nome da tela que quero navegar, UseForm

//package.json
// "dependencies": {
// "@react-native-masked-view/masked-view": "^0.2.6",
// "@react-navigation/native-stack": "^6.2.5",
// "react-native-elements": "git+https://github.com/react-native-elements/react-native-elements.git",
// "react-navigation": "^4.4.4",
// "react-navigation-stack": "^2.10.4"
// },
//   "devDependencies": {
//     "@babel/core": "^7.16.0",
//     "@babel/runtime": "^7.16.3",
//     "@react-native-community/eslint-config": "^3.0.1",
//     "babel-jest": "^27.3.1",
//     "eslint": "^8.2.0",
//     "jest": "^27.3.1",
//     "metro-react-native-babel-preset": "^0.66.2",
//     "react-test-renderer": "17.0.2",
//     "rimraf": "^3.0.2"
//   },