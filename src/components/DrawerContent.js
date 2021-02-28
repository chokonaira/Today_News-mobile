import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";
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
                    "https://w1.pngwing.com/pngs/933/945/png-transparent-social-media-icons-avatar-user-profile-login-black-circle-silhouette-symbol.png",
                }}
                size={53}
              />
              <View style={{ flexDirection: "column", marginLeft: 15, width:'95%' }}>
                <Title style={styles.title}>LOGGED-IN AS</Title>
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
              onPress={() => {
                props.navigation.navigate("Today News");
              }}
            ></DrawerItem>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("Profile");
              }}
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
    borderBottomWidth: .3,
    borderBottomColor: "#333",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  caption: {
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 14,
    width: '70%'
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  }
});
