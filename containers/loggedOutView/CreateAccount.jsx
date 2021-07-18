import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import { colors } from '../../styles/colors';

const CreateAccount = ({ navigation}) => {

    return(
        
        <View style={styles.container}>
            <Text style={{fontSize: 30, paddingTop: 85, marginBottom:30, fontWeight: '600', color: `${colors.white}`}}>Create Account</Text>
            {/* <Text style={{fontSize: 22, color: '#ff414e', marginBottom: 10}}>{this.props.screenProps.error !== ''? 'username already exists':null}</Text> */}
            <TextInput
                style={{fontSize: 20, padding: 12, width: '55%', backgroundColor: `${colors.white}`, borderRadius: 10, marginBottom: 35}}
                // onChangeText={(text)=> this.props.screenProps.handleUsername(text)} placeholder="Username" autoCapitalize = 'none'
            />
            <TextInput
                style={{fontSize: 20, padding: 12, width: '55%', backgroundColor: `${colors.white}`, borderRadius: 10, marginBottom: 20}}
                // onChangeText={(text)=> this.props.screenProps.handlePassword(text)} placeholder="Password" secureTextEntry={true}
            />
            <TextInput
                style={{fontSize: 20, padding: 12, width: '55%', backgroundColor: `${colors.white}`, borderRadius: 10, marginBottom: 12}}
                // onChangeText={(text)=> this.props.screenProps.handlePassword(text)} placeholder="Confirm Password" secureTextEntry={true}
            />
            <TouchableHighlight 
                style={styles.login} 
                // onPress={()=>this.props.screenProps.handleCreateAccountSubmit()}
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
    searchBox:{
      fontSize: 21,
      padding: 20,
      width: '92%',
      backgroundColor: `${colors.white}`,
      borderRadius: 15,
    },
    results: {
      flex: 1,
    },
    popup: {
      padding: 50,
      backgroundColor: '#333',
      flex:1,
    },
    login:{
        padding: 13,
        margin: 30,
        backgroundColor: `${colors.green}`,
        borderRadius: 10,
    }

  })

  export default CreateAccount