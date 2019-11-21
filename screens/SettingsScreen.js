import React from 'react';
import {Image, SectionList, StyleSheet, Text, View} from "react-native";
import Constants from "expo-constants";

export default class SettingsScreen extends React.Component {
  render() {
    const { manifest = {} } = Constants;
    const sections = [
      {
        data: [
          { value: "Application Software Engineer", date: "8/19 - Present" },
          { value: "Application Software Developer", date: "6/18 - 8/19" },
          { value: "Software Development Intern", date: "6/16 - 6/18" },
        ],
        title: 'Centene Corporation'
      },
      { data: [{ value: "Software Development Intern", date: "5/15 - 8/15"}], title: 'Mersoft Corporation' },
      {
        data: [
          { value: "Shift Manager", date: "12/15 - 6/16" },
          { value: "Cook/Carhop", date: "9/14 - 12/15" },
        ],
        title: 'Sonic Drive-In'
      },
      {
        data: [
          { value: "Certified Application Developer", date: "6/19" },
          { value: "Best UX (eHacks Hackathon)", date: "2018"},
          { value: "Best Mobile Application (eHacks Hackathon)", date: "2017"},
        ],
        title: 'Additional Achievements' },
    ];

    return (
      <SectionList
        style={styles.container}
        renderItem={this._renderItem}
        renderSectionHeader={this._renderSectionHeader}
        stickySectionHeadersEnabled={true}
        keyExtractor={(item, index) => index}
        ListHeaderComponent={ListHeader}
        sections={sections}
      />
    );
  }

  _renderSectionHeader = ({ section }) => {
    return <SectionHeader title={section.title} />;
  };

  _renderItem = ({ item }) => {
    if (item.type === 'color') {
      return <SectionContent>{item.value && <Color value={item.value} />}</SectionContent>;
    } else {
      return (
        <SectionContent>
          <View style={{flexDirection: "row", width: "100%" }}>
            <Text style={styles.sectionContentText}>{item.value}</Text>
            <View style={styles.dateTextWrapper}>
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
          </View>
        </SectionContent>
      );
    }
  };
}

const ListHeader = () => {
  const { manifest } = Constants;

  return (
    <View style={styles.titleContainer}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.nameText} numberOfLines={1}>
          ~4yrs Development Experience
        </Text>

        <Text style={styles.slugText} numberOfLines={1}>
          2 Internships & 1.5yrs Full-Time
        </Text>

        <Text style={styles.descriptionText}>{manifest.description}</Text>
      </View>
    </View>
  );
};

const SectionHeader = ({ title }) => {
  return (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );
};

const SectionContent = props => {
  return <View style={styles.sectionContentContainer}>{props.children}</View>;
};

const AppIconPreview = ({ iconUrl }) => {
  if (!iconUrl) {
    iconUrl = 'https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png';
  }

  return <Image source={{ uri: iconUrl }} style={{ width: 64, height: 64 }} resizeMode="cover" />;
};

const Color = ({ value }) => {
  if (!value) {
    return <View />;
  } else {
    return (
      <View style={styles.colorContainer}>
        <View style={[styles.colorPreview, { backgroundColor: value }]} />
        <View style={styles.colorTextContainer}>
          <Text style={styles.sectionContentText}>{value}</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    flexDirection: 'row',
  },
  titleIconContainer: {
    marginRight: 15,
    paddingTop: 2,
  },
  sectionHeaderContainer: {
    backgroundColor: '#fbfbfb',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ededed',
  },
  sectionHeaderText: {
    fontSize: 14,
  },
  sectionContentContainer: {
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 15,
  },
  sectionContentText: {
    color: '#808080',
    fontSize: 14,
  },
  dateTextWrapper: {
    color: '#416080',
    fontSize: 14,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  dateText: {
    color: '#416080'
  },
  nameText: {
    fontWeight: '600',
    fontSize: 18,
  },
  slugText: {
    color: '#a39f9f',
    fontSize: 14,
    backgroundColor: 'transparent',
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 6,
    color: '#4d4d4d',
  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorPreview: {
    width: 17,
    height: 17,
    borderRadius: 2,
    marginRight: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  colorTextContainer: {
    flex: 1,
  },
});

SettingsScreen.navigationOptions = {
  title: 'Experience',
};
