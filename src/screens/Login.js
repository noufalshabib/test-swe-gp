import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { firebase } from "../firebase/config";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  Platform,
  Keyboard,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFooterLinkPress = () => {
    navigation.navigate("Signup");
  };

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email.trim(), password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert("User does not exist anymore.");
              return;
            }
            const user = firestoreDocument.data();
            navigation.navigate("Home", { user: user });
          })

          .catch((error) => {
            alert(error);
          });
      })

      .catch((error) => {
        if (email.length == 0 && password.length == 0) {
          alert("Error:Please enter your email and password");
        } else if (email.length == 0) {
          alert("Error:Please enter your email");
        } else if (password.length == 0) {
          alert("Error:Please enter your password");
        } else {
          alert("Login Faild: Your email and/or password do not match ");
        }
      });
  };

  return (
    <KeyboardAwareScrollView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ backgroundColor: "#8fbc8f", flex: 1 }}>
          <View style={{ backgroundColor: "white", flex: 2 }}>
            <View></View>
            <Image
              source={require("../../assets/l.png")}
              style={{ width: 350, height: 350, alignSelf: "center" }}
            ></Image>
          </View>
          <Text> </Text>
          <Text> </Text>
          <View style={{ backgroundColor: "#8fbc8f", flex: 4 }}>
            <Text
              style={{
                color: "white",
                alignItems: "center",
                fontFamily: "Verdana-BoldItalic",
                fontSize: 15,
              }}
            >
              {" "}
              WELCOME BACK TO ERTEHAL, CONTINUE TO LOGIN{" "}
            </Text>
            <View style={styles.inner}>
              <TextInput
                style={styles.input}
                placeholder="E-Mail"
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEmail(text)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />
              <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />

              <Text></Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() => onLoginPress()}
              >
                <Text style={styles.buttonTitle}>LOG IN</Text>
              </TouchableOpacity>
              <Text></Text>

              <View style={styles.footerView}>
                <Text style={styles.footerText}>
                  Don't have an account?{" "}
                  <Text onPress={onFooterLinkPress} style={styles.footerLink}>
                    SIGN UP{" "}
                  </Text>
                  
                </Text>
                

                <TouchableOpacity
                style={styles.footerLink}
                onPress={() => navigation.navigate("ForgotPassword")}
                 >
                <Text style={styles.footerLink}>Forgot password?</Text>
              </TouchableOpacity>

              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    color: "green",
    backgroundColor: "green",
  },
  con: {
    flex: 1,
  },

  input: {
    width: 350,
    height: 55,
    backgroundColor: "white",
    margin: 10,
    padding: 8,
    color: "black",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
    alignSelf: "center",
  },

  button: {
    backgroundColor: "#2f4f4f",
    width: 100,
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 18,
    alignSelf:'center',
  },
  footerText: {
    fontSize: 16,
    color: "#2e2e2d",
    alignSelf: "center",
    borderRadius: 14,
  },
  inner: {
    padding: 34,
    flex: 1,
    justifyContent: "space-around",
  },
  footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 18,
    alignSelf:'center',
    margin:20
  },
});
