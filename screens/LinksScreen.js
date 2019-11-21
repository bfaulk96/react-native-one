import React from 'react';
import {
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  Linking,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Button,
  Image
} from 'react-native';
import Modal from "react-native-modal";
import {Ionicons} from "@expo/vector-icons";

export default class LinksScreen extends React.Component {
  state = {
    isModalVisible: false
  };

  shouldHireMe(ofCourse) {
    this.setState({ isModalVisible: ofCourse });
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <FlatList
          data={[
            {
              key: "Facebook",
              icon: "logo-facebook",
              color: "#3b5998",
              link: "fb://profile/bfaulk96",
              fallback: "https://www.facebook.com/bfaulk96"
            },
            {
              key: "LinkedIn",
              icon: "logo-linkedin",
              color: "#0e76a8",
              link: "linkedin://brandon-faulkner-10836276",
              fallback: "https://www.linkedin.com/in/brandon-faulkner-10836276/"
            },
            {
              key: "Twitter",
              icon: "logo-twitter",
              color: "#00aced",
              link: "twitter://user?screen_name=bfaulk96",
              fallback: "https://www.twitter.com/bfaulk96"
            },
            {
              key: "Twitch",
              icon: "logo-twitch",
              color: "#6441a5",
              link: "twitch://channel/bfaulk96",
              fallback: "https://www.twitch.tv/bfaulk96"
            },
            {
              key: "Github",
              icon: "logo-github",
              color: "#333",
              link: "https://github.com/bfaulk96",
              fallback: "https://www.github.com/bfaulk96"
            },
          ]}
          renderItem={({item}) => this.renderItem(item)}
        />
        <View style={styles.hireMeContainer}>
          <View style={styles.hireMeWrapper}>
            <TouchableHighlight
              style={styles.hireMe}
              underlayColor="#141414"
              onPress={() => this.shouldHireMe(true)}
            >
              <Text style={styles.hireMeText}>INTERESTED IN HIRING ME?</Text>
            </TouchableHighlight>
          </View>
        </View>
        <Modal isVisible={this.state.isModalVisible} onBackdropPress={() => this.shouldHireMe(false)}>
          <View style={styles.modal}>
            <Text style={styles.modalTitleText}>Of course!</Text>
            <View style={styles.imageWrapper}>
              <Image
                source={require("../assets/images/just-do-it.gif")}
                style={styles.doItImage}
              />
            </View>
            <View style={{width: "80%", marginTop: 15}}>
              <Button title="Alright, fine" onPress={() => this.shouldHireMe(false)} />
            </View>
          </View>
        </Modal>
      </ScrollView>
    );
  }

  renderItem(item) {
    return (
      <TouchableOpacity style={styles.itemWrapper} onPress={() => this.navigateToPage(item.link, item.fallback)}>
        <Ionicons
          name={item.icon}
          size={35}
          style={{
            marginBottom: -10,
            marginRight: 25,
            color: item.color,
          }}
        />
        <Text style={styles.item}>{item.key}</Text>
      </TouchableOpacity>
    );
  }

  navigateToPage(link, fallback) {
    Linking.canOpenURL(link).then((supported) => {
      if (supported) {
        return Linking.openURL(link);
      } else {
        return Linking.openURL(fallback);
      }
    }).catch(err => console.log(err));
  }
}

LinksScreen.navigationOptions = {
  title: 'Social Media',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingBottom: 10,
    height: "100%"
  },
  itemWrapper: {
    marginBottom: 15,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "row"
  },
  item: {
    fontSize: 24,
  },
  hireMeContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: "flex-end",
  },
  hireMeWrapper: {
    marginBottom: 20
  },
  hireMe: {
    backgroundColor: "#363636",
    height: 80,
    padding: 10,
    justifyContent: "center",
    minWidth: "80%",
    borderRadius: 10,
    alignItems: "center",
    elevation: 1
  },
  hireMeText: {
    color: "white",
    fontSize: 20
  },
  modal: {
    backgroundColor: "white",
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  modalTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "darkblue",
  },
  imageWrapper: {
    borderRadius: 10,
  },
  doItImage: {
    borderRadius: 10,
  }
});
