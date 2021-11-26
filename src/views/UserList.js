import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem, Button, Icon } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default props => {

    const { state, dispach } = useContext(UsersContext)
    // console.warn(Object.keys(ctx))

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Nao'
            }
        ])
    }

    function getActions(user) {
        //usuário tá sendo passado como parâmetro
        return (
            <> 
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    // onPress={() => props.navigation.navigate('UserForm', user)}
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                leftAvatar={{source: {uri: user.avatarUrl}}}
                key={user.id}
                title={user.name}
                subtitle={user.email}
                bottomDivider
                rightElement={getActions(user)}
                onPress={() => props.navigation.navigate('UserForm', user)}
            />
        )
    }
    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}//definir uma chave pra cada um dos elementos
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}

//para ajudar no processo de debug posso usar o console.warn
// export default props => {
//     console.warn(Object.keys(props))
//     return (
//         <Text>UserList</Text>
//     )
// }

//uso o Context API quando tem muitos componentes