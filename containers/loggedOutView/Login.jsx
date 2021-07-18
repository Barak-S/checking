import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, StatusBar } from 'react-native';
import { colors } from '../../styles/colors';
import TextInput from '../../components/Input';


const Login = ({ navigation }) => {

    return(
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 27, textAlign: 'center', paddingTop: 55, fontWeight: '600', color: `${colors.blue}`}}>Log In</Text>
          </View>
          <View style={{ flex: 1.25 }}>
            <TextInput label="Email" />
            <TextInput
              label="Password" 
              secureTextEntry={true}
            />
          </View>
          <View style={{ flex: 3 }}>
            <TouchableHighlight 
              style={styles.login} 
              // onPress={()=>this.props.screenProps.handleLoginSubmit()}
            >
              <Text style={{textAlign: "center", fontSize: 19, fontWeight:'700', color: `${colors.white}`}}>Login</Text>
            </TouchableHighlight>
            <TouchableHighlight 
                onPress={()=>navigation.navigate('CreateAccount')}
            >
              <Text style={{textAlign: "center", fontSize: 19, fontWeight:'700', color: `${colors.blue}`, backgroundColor: `${colors.white}`}}>Create Account</Text>
            </TouchableHighlight>
          </View>
        </View>
    )
    
}

const styles= StyleSheet.create({
    container:{
      flex: 1,
      flexDirection: "column",
      backgroundColor: `${colors.white}`,
      paddingLeft: 12.5,
      paddingRight: 12.5,
    },
    authWrapper:{
      flex: 2,
    },
    login:{
      padding: 13,
      margin: 30,
      backgroundColor: `${colors.blue}`,
      borderRadius: 10,
    }

  })

export default Login