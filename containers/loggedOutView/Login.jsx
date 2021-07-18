import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, StatusBar } from 'react-native';
import { colors } from '../../styles/colors';

const Login = ({ navigation }) => {

    return(
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={{fontSize: 30, paddingTop: 85, marginBottom:30, fontWeight: '600', color: `${colors.white}`}}>Log In</Text>
            {/* <Text style={{fontSize: 22, color: '#ff414e', marginBottom: 10}}>{this.props.screenProps.error ? 'username or password incorrect' : ''}</Text> */}
            <TextInput
                style={{fontSize: 20, padding: 12, width: '55%', backgroundColor: `${colors.white}`, borderRadius: 10, marginBottom: 30}}
                // onChangeText={(text)=> this.props.screenProps.handleUsername(text)} 
                placeholder="Username" 
            />
            <TextInput
                style={{fontSize: 20, padding: 12, width: '55%', backgroundColor: `${colors.white}`, borderRadius: 10, marginBottom: 7}}
                // onChangeText={(text)=> this.props.screenProps.handlePassword(text)} 
                placeholder="Password" 
                secureTextEntry={true}
            />
            <TouchableHighlight 
                style={styles.login} 
                // onPress={()=>this.props.screenProps.handleLoginSubmit()}
            >
                <Text style={{textAlign: "center", fontSize: 19, fontWeight:'700', color: `${colors.white}`}}>Login</Text>
            </TouchableHighlight>

            <TouchableHighlight 
                onPress={()=>navigation.navigate('CreateAccount')}
            >
                <Text style={{textAlign: "center", fontSize: 19, fontWeight:'700', color: `${colors.white}`}}>Create Account</Text>
            </TouchableHighlight>
        </View>
    )
    
}

const styles= StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: `${colors.black}`,
      alignItems: "center",
      justifyContent: 'flex-start',
      paddingTop: 24
    },
    title: {
      color: '#ff414e',
      fontWeight: '700',
      fontSize: 32,
      textAlign: "center",
      marginBottom: 20
    },
    results: {
      flex: 1,
    },
    popup: {
      padding: 50,
      backgroundColor: '#333',
      flex:1,
    },
    popTitle:{
      fontSize: 29,
      fontWeight: '600',
      color: '#ff414e',
    },
    closeBtn:{
      padding: 20,
      fontSize: 24,
      fontWeight: '600',
      color: `${colors.white}`,
      backgroundColor: '#ff414e'
    },
    backButton:{
      width: '100%',
      height: 45,
      backgroundColor: '#ff414e'
    },
    login:{
        padding: 13,
        margin: 30,
        backgroundColor: `${colors.green}`,
        borderRadius: 10,
    }

  })

export default Login