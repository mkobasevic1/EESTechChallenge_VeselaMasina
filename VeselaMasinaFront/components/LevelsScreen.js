import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList,
  Button,
} from "react-native";

function MyButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export default function LevelScreen({ navigation }) {
  const buttons = [
    {
      text: "Level 1",
      accessibilityLabel: "1",
      onPress: () => navigation.navigate("Play", { height: 2, width: 2 }),
    },
    {
      text: "Level 2",
      onPress: () => navigation.navigate("Play", { height: 2, width: 3 }),
    },
    {
      text: "Level 3",
      onPress: () => navigation.navigate("Play", { height: 4, width: 3 }),
    },
    {
      text: "Level 4",
      onPress: () => navigation.navigate("Play", { height: 4, width: 4 }),
    },
    {
      text: "Level 5",
      onPress: () => navigation.navigate("Play", { height: 4, width: 4 }),
    },
    {
      text: "Level 6",
      onPress: () => navigation.navigate("Play", { height: 4, width: 4 }),
    },
    {
      text: "Level 7",
      onPress: () => navigation.navigate("Play", { height: 4, width: 4 }),
    },
    {
      text: "Level 8",
      onPress: () => navigation.navigate("Play", { height: 4, width: 4 }),
    },
    {
      text: "Level 9",
      onPress: () => navigation.navigate("Play", { height: 4, width: 4 }),
    },
    {
      text: "Level 10",
      onPress: () => navigation.navigate("Play", { height: 4, width: 4 }),
    },
    {
      text: "Level 11",
      onPress: () => navigation.navigate("Play", { height: 4, width: 4 }),
    },
    {
      text: "Level 12",
      onPress: () => navigation.navigate("Play", { height: 4, width: 4 }),
    },
    {
      text: "Level 13",
      onPress: () => navigation.navigate("Play", { height: 4, width: 4 }),
    },
    {
      text: "Level 14",
      onPress: () => navigation.navigate("Play", { height: 4, width: 4 }),
    },
    {
      text: "Level 15",
      onPress: () => navigation.navigate("Play", { height: 4, width: 4 }),
    },
    {
      text: "Level 16",
      onPress: () => navigation.navigate("Play", { height: 4, width: 4 }),
    },
    {
      text: "Level 17",
      onPress: () => navigation.navigate("Play", { height: 4, width: 4 }),
    },
  ];

  return (
    //      / <Text style={styles. buttonTextDISS}>{button.text}</Text>/ (u liniji 62 kada je level otvoren)
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../public/4000.jpg")}
        style={styles.imageBg}
        imageStyle={{ opacity: 0.2 }}
      >
        <ScrollView style={styles.scrl}>
          {buttons.map((button, index) => (
            <TouchableOpacity
              key={index}
              text={button.text}
              style={styles.button}
              onPress={button.onPress}
            >
              <Text style={styles.buttonText}>{button.text}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
} /*<MyButton 
        title="Continue level"
        onPress={() => navigation.navigate("Play")}
      />
      <MyButton
        title="Change level"
        onPress={() => navigation.navigate("Level")}
      />
*/
const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    height: 90,
    width: 300,
    marginBottom: 20,
    alignSelf: "center",
    backgroundColor: "#c75f00",
    mixBlendMode: "normal",
    borderWidth: 5,
    borderColor: "#6b2b05",
    borderRadius: 20,
  },
  buttonDISS: {
    padding: 0,
    borderRadius: 25,
    justifyContent: "center",
    position: "relative",
    height: 90,
    width: 300,
    marginBottom: 20,
    alignSelf: "center",
    backgroundColor: "#c75f00",
    mixBlendMode: "normal",
    borderWidth: 5,
    borderColor: "#6b2b05",
    borderRadius: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "medium",
  },
  buttonTextDISS: {
    textAlign: "center",
    color: "#6B7672",
    fontSize: 27,
    fontWeight: "medium",
    zIndex: 0,
    marginTop: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 30,
    marginTop: 10,
    alignSelf: "center",
    opacity: 1,
  },
  lock: {
    width: 50,
    height: 60,
    marginBottom: 5,
    marginTop: "3%",
    alignSelf: "center",
    opacity: 0.6,
    zIndex: 1,
  },
  imageBg: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: "30%",
  },
  scrl: {
    height: 200,
  },
});
