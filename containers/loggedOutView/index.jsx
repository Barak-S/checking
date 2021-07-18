import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login'
import { colors } from '../../styles/colors';
import CreateAccount from './CreateAccount'


const LoggedOutContainer = createStackNavigator({
    Login: { screen: Login, navigationOptions: () => ({
        title: `Voyager`,
        headerStyle: {
            backgroundColor: `${colors.purple}`,
          },
        headerTitleStyle: { color: `${colors.white}`, fontSize: 21 },
        
    }), },
    CreateAccount:{screen: CreateAccount, navigationOptions: () => ({
        title: `Voyager`,
        headerStyle: {
            backgroundColor: `${colors.purple}`,
          },
        headerTitleStyle: { color: `${colors.white}`, fontSize: 21 },
        headerBackTitleStyle: { color: `${colors.white}`, fontSize: 19 },
        headerTintColor: `${colors.white}`
    }),}
})


const HandleLogin = createAppContainer(LoggedOutContainer)


export default HandleLogin