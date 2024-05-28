/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function LoginScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <Image
        alt="Not find"
        source={require('../../assets/images/login.jpg')}
        style={styles.loginLogo}
      />
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: '100%',
          paddingHorizontal: 20,
          marginBottom: 20,
        }}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subTitle}>Sign in to your account</Text>
      </View>
      <View style={{marginTop: 10, paddingHorizontal: 20, width: '100%'}}>
        <TextInput
          style={{
            height: 40,
            width: '100%',
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            color: '#0d253f',
          }}
          placeholder="Email"
        />
        <TextInput
          style={{
            height: 40,
            width: '100%',
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            color: '#0d253f',
            marginTop: 15,
          }}
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          paddingHorizontal: 20,
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={function () {
            navigation.navigate('App');
          }}>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  loginLogo: {
    width: '100%',
    maxHeight: 325,
    resizeMode: 'cover',
    marginTop: 50,
  },
  title: {
    marginTop: 50,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#0d253f',
  },
  subTitle: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#0d253f',
  },
  submitButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#01b4e4',
    borderRadius: 5,
    width: 100,
  },
});

export default LoginScreen;
