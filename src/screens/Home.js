import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import SearchBar from "../components/SearchBar";
import * as firebase from "firebase";

import { useTheme } from "@react-navigation/native";

import Swiper from "react-native-swiper";

const Home = ({ navigation }) => {
  const theme = useTheme();
  const [city, setCity] = useState("riyadh");
  const [term, setTerm] = useState("");

  if (firebase.auth().currentUser.email == "ertehaladmin@gmail.com") {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.sliderContainer}>
          <Swiper
            autoplay
            horizontal={false}
            height={200}
            activeDotColor="#FF6347"
          >
            <View style={styles.slide}>
              <Image
                source={require("../../assets/t1.jpg")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require("../../assets/t2.jpg")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>

            <View style={styles.slide}>
              <Image
                source={require("../../assets/t3.jpg")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require("../../assets/t5.jpg")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require("../../assets/t6.jpg")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>
        <View>
          <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() =>
              navigation.navigate("ResultsScreen", { name: term })
            }
          />
        </View>

        <View style={styles.categoryContainer}>
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() =>
              navigation.navigate("ShowByCity", { city: "alqassim" })
            }
            // onPress={() =>
            // navigation.navigate("CardListScreen", { title: "Restaurant" })
            //}
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/qassimicon.png")}
                fadeDuration={0}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>AlQassim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() =>
              navigation.navigate("ShowByCity", { city: "jeddah" })
            }
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/jedicon.png")}
                fadeDuration={0}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>Jeddah</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() =>
              navigation.navigate("ShowByCity", { city: "riyadh" })
            }
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/riyadhicon.png")}
                fadeDuration={0}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>Riyadh</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.categoryContainer, { marginTop: 10 }]}>
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() => navigation.navigate("ShowByCity", { city: "mecca" })}
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/Mecca.png")}
                fadeDuration={0}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>Mecca</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() =>
              navigation.navigate("ShowByCity", { city: "alkobar" })
            }
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/khobaricon.png")}
                fadeDuration={0}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>AlKhobar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() => navigation.navigate("ShowByCity", { city: "abha" })}
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/abhaicon.png")}
                fadeDuration={0}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>Abha</Text>
          </TouchableOpacity>
        </View>
        <Text></Text>
        <Text></Text>

        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
            fontWeight: "bold",
            color: "grey",
            fontFamily: "Futura-Medium",
          }}
        >
          Manage The Destintions Requests
        </Text>
        <Text></Text>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("ManageRequests")}
            style={{
              padding: 7,
              paddingVertical: 12,
              backgroundColor: "#8fbc8f",
              paddingHorizontal: 70,
              alignSelf: "center",
              borderRadius: 40,
              marginTop: 2,
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Futura-Medium",
                fontWeight: "bold",
              }}
            >
              MANAGE REQUESTS
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
            fontWeight: "bold",
            color: "grey",
            fontFamily: "Futura-Medium",
          }}
        >
          Manage The Users Accounts
        </Text>
        <Text></Text>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("ManageAccounts")}
            style={{
              padding: 7,
              paddingVertical: 12,
              backgroundColor: "#8fbc8f",
              paddingHorizontal: 70,
              alignSelf: "center",
              borderRadius: 40,
              marginTop: 2,
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Futura-Medium",
                fontWeight: "bold",
              }}
            >
              MANAGE ACCOUNTS
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  } else {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.sliderContainer}>
          <Swiper
            autoplay
            horizontal={false}
            height={200}
            activeDotColor="#FF6347"
          >
            <View style={styles.slide}>
              <Image
                source={require("../../assets/t1.jpg")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require("../../assets/t2.jpg")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>

            <View style={styles.slide}>
              <Image
                source={require("../../assets/t3.jpg")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require("../../assets/t5.jpg")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require("../../assets/t6.jpg")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>

        <View>
          <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() =>
              navigation.navigate("ResultsScreen", { name: term })
            }
          />
        </View>

        <View style={styles.categoryContainer}>
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() =>
              navigation.navigate("ShowByCity", { city: "alqassim" })
            }
            // onPress={() =>
            // navigation.navigate("CardListScreen", { title: "Restaurant" })
            //}
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/qassimicon.png")}
                fadeDuration={0}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>AlQassim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() =>
              navigation.navigate("ShowByCity", { city: "jeddah" })
            }
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/jedicon.png")}
                fadeDuration={0}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>Jeddah</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() =>
              navigation.navigate("ShowByCity", { city: "riyadh" })
            }
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/riyadhicon.png")}
                fadeDuration={0}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>Riyadh</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.categoryContainer, { marginTop: 10 }]}>
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() => navigation.navigate("ShowByCity", { city: "mecca" })}
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/Mecca.png")}
                fadeDuration={0}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>Mecca</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() =>
              navigation.navigate("ShowByCity", { city: "alkobar" })
            }
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/khobaricon.png")}
                fadeDuration={0}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>AlKhobar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() => navigation.navigate("ShowByCity", { city: "abha" })}
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/abhaicon.png")}
                fadeDuration={0}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>Abha</Text>
          </TouchableOpacity>
        </View>
        <Text></Text>
        <Text></Text>

        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
            fontWeight: "bold",
            color: "grey",
            fontFamily: "Futura-Medium",
          }}
        >
          Add a Destintion To Ertehal
        </Text>
        <Text></Text>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddDestenation")}
            style={{
              padding: 7,
              paddingVertical: 12,
              backgroundColor: "#8fbc8f",
              paddingHorizontal: 70,
              alignSelf: "center",
              borderRadius: 40,
              marginTop: 2,
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Futura-Medium",
                fontWeight: "bold",
              }}
            >
              ADD NOW
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: "90%",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
    alignSelf: "center",
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 70,
    height: 70,
    backgroundColor: "#8fbc8f" /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: "center",
    marginTop: 5,
    color: "grey",
    fontFamily: "Futura-Medium",
  },
  cardsWrapper: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
  },
  btn: {
    backgroundColor: "#8fbc8f",
    padding: 10,
    borderRadius: 60,
    margin: 80,
  },
  btnTxt: {
    fontFamily: "Futura-Medium",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
