import React from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import { createStackNavigator } from 'react-navigation-stack'
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { Button, Icon } from 'react-native-elements'
import { UsersProvider } from './context/UsersContext'

const Stack = createStackNavigator()

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
                      options={({ navigation }) => { //{} estou usando o destruction para acessar o navigation
                        return {
                          title: "Lista de Usuários",
                          headerRight: () => (
                            <Button
                              onPress={() => navigation.navigate("UseForm")} //passo como parâmetro o nome da tela que quero navegar, UseForm
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