import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import icons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Avatar.Image
                source={{
                  uri:
                    "https://themindsetproject.com.au/wp-content/uploads/2017/08/avatar-icon.png",
                }}
                size={50}
              />
              <View style={{ flexDirection: "column", marginLeft: 15}}>
                <Title style={styles.title}>Henry</Title>
                <Caption style={styles.caption}>henry@gmail.com</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="book-open" color={color} size={size} />
              )}
              label="Today News"
              onPress={() => {props.navigation.navigate('Today News')}}
            ></DrawerItem>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {props.navigation.navigate('Profile')}}
            ></DrawerItem>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="poll-box" color={color} size={size} />
              )}
              label="Faqs"
              onPress={() => {props.navigation.navigate('Faqs')}}
            ></DrawerItem>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
        ></DrawerItem>
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingBottom: 6,
    borderBottomWidth: .2,
    borderBottomColor: '#333'
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: '#333'
  },
  caption: {
    fontStyle: 'italic',
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    marginRight: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
