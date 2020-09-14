import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { firebase } from "../firebase/config";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFooterLinkPress = () => {
    navigation.navigate("Signup");
  };

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
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
            navigation.navigate("Home", { user: user});
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ backgroundColor: "white", flex: 3 }}>
        <View>
          <Image
            source={require("../../assets/logo3.png")}
            style={{ width: 400, height: 300, alignSelf: "center" }}
          ></Image>
          <Text
            style={{
              fontSize: 35,
              color: "#2f4f4f",
              alignSelf: "center",
              paddingBottom: 30,
            }}
          >
            {" "}
            Hello, welcome back{" "}
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "#8fbc8f", flex: 4 }}>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
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
        <Text></Text>

        <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
          <Text style={styles.buttonTitle}>Log in</Text>
        </TouchableOpacity>
        <Text></Text>

        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account?{" "}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    color: "green",
    backgroundColor: "green",
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
  },
  footerText: {
    fontSize: 16,
    color: "#2e2e2d",
    alignSelf: "center",
    borderRadius: 14,
  },
  footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 18,
  },
});
