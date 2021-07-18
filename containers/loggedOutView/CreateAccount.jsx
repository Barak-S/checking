import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { colors } from '../../styles/colors';
import TextInput from '../../components/Input';


const CreateAccount = ({ navigation}) => {

    return(
        
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 27, textAlign: 'center', paddingTop: 55, fontWeight: '600', color: `${colors.blue}`}}>Sign Up</Text>
          </View>
          <View style={{ flex: 4 }}>
            <TextInput
              label="First Name" 
            />
            <TextInput
              label="Last Name" 
            />
            <TextInput
              label="Email" 
            />
            <TextInput
              label="Password" 
              secureTextEntry={true}
            />
            <TextInput
              label="Confirm Password" 
              secureTextEntry={true}
            />
          </View>
          <View style={{ flex: 2 }}>
            <TouchableHighlight 
              style={styles.login} 
              // onPress={()=>this.props.screenProps.handleLoginSubmit()}
            >
              <Text style={{textAlign: "center", fontSize: 19, fontWeight:'700', color: `${colors.white}`}}>Create Account</Text>
            </TouchableHighlight>
          </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: `${colors.white}`,
      paddingLeft: 12.5,
      paddingRight: 12.5,
    },

    login:{
        padding: 13,
        margin: 30,
        backgroundColor: `${colors.blue}`,
        borderRadius: 10,
    }

  })

  export default CreateAccount