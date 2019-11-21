import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Platform
} from 'react-native';
import {Alert} from "react-native-web";


export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.welcomeContainer}>
        <Image
          source={require('../assets/images/brandon-alt2.png')}
          style={styles.doItImage}
        />
      </View>

      <View style={styles.aboutMeContainer}>
        <Text style={[styles.aboutMeText, styles.aboutMeName]}>Brandon Faulkner</Text>
        <Text style={styles.aboutMeText}>
          Application Software Developer
        </Text>
        <Text style={[styles.aboutMeText, {fontStyle: "italic"}]}>
          Centene Corporation
        </Text>
        <Text style={styles.aboutMeText}>
          Age: 23
        </Text>
      </View>

      <View style={styles.educationContainer}>
        <Text style={[styles.helpLinkText, {fontWeight: "bold"}]}>
          Education:
        </Text>
        <View style={{marginTop: 10}}>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.educationInfoLabel}>Degree:</Text>
            <Text style={styles.educationInfo}>BS in Computer Science</Text>
          </View>
        </View>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.educationInfoLabel}>Minor:</Text>
          <Text style={styles.educationInfo}>Mathematics</Text>
        </View>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.educationInfoLabel}>School:</Text>
          <Text style={styles.educationInfo}>
            <Text style={styles.schoolColor}>SIUE</Text>
            <Text> — 3.97 GPA</Text>
          </Text>
        </View>
      </View>

      <View style={styles.educationContainer}>
        <Text style={[styles.helpLinkText, {fontWeight: "bold"}]}>
          Primary Skills:
        </Text>
        <View style={{marginTop: 10, width: 300}}>
          <Text style={{fontSize: 20, textAlign: "center"}}>
            JavaScript, TypeScript, Golang, Angular, Ionic, Git, Python, Docker, Kubernetes
          </Text>
        </View>
      </View>

      <View style={styles.contactContainer}>
        <View style={styles.contactBox}>
          <TouchableOpacity onPress={() => handlePhoneClick("6183637354")}>
            <Text style={styles.contactLink}>(618)-363-7354</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleEmailClick("btfaulkner96@gmail.com")}>
            <Text style={styles.contactLink}>btfaulkner96@gmail.com</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );

  function handlePhoneClick(phoneNumber) {
    phoneNumber = Platform.OS === "android" ? `tel:${phoneNumber}` : `telprompt:${phoneNumber}`
    Linking.canOpenURL(phoneNumber).then((supported) => {
      if (supported) {
        return Linking.openURL(phoneNumber);
      } else {
        Alert.alert("Invalid phone number");
      }
    }).catch(err => console.log(err));
  }

  function handleEmailClick(emailAddress) {
    emailAddress = `mailto:${emailAddress}`;
    Linking.canOpenURL(emailAddress).then((supported) => {
      if (supported) {
        return Linking.openURL(emailAddress);
      } else {
        Alert.alert("Invalid email address");
      }
    }).catch(err => console.log(err));
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    paddingBottom: 10,
    height: "100%"
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  doItImage: {
    width: 280,
    height: 180,
    resizeMode: 'contain',
    marginTop: 15,
    marginLeft: -10,
  },
  aboutMeContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  aboutMeName: {
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 30
  },
  aboutMeText: {
    fontSize: 18,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  educationContainer: {
    marginTop: 35,
    alignItems: 'center',
  },
  contactContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: "flex-end",
  },
  contactBox: {
    backgroundColor: "#FAFAFA",
    padding: 10,
    width: "90%",
    borderRadius: 10,
    alignItems: "center",
    elevation: 1
  },
  contactLink: {
    fontSize: 18,
    lineHeight: 30,
    color: '#2e78b7',
  },
  educationSection: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 22,
    color: '#2e78b7',
  },
  educationInfoLabel: {
    minWidth: 80,
    fontSize: 20,
    alignSelf: "flex-start"
  },
  educationInfo: {
    minWidth: 220,
    fontSize: 20,
    alignSelf: "flex-start",
    color: "darkblue"
  },
  schoolColor: {
    color: "#cc0000",
    fontWeight: "bold"
  }
});
