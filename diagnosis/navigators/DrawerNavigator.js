import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Image, TouchableOpacity} from 'react-native';

import KnowledgeTest from '../screens/KnowledgeTest';
import TeamInfo from '../screens/TeamInfo';
import Topics from '../screens/Topics';
import Donate from '../screens/Donate';
import Activities from '../screens/Activities';
import Lectures from '../screens/Lectures';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Books from '../screens/Books'
import Settings from '../screens/Settings';


import StackNavigator from './StackNavigator';

import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import AboutUs from '../screens/AboutUs';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name='Login' component={Login} // keep at top to start at this screen 
          options={{
            headerShown: false,
            swipeEnabled: false,
            drawerItemStyle: { height: 0 }
          }} />
        <Drawer.Screen name="Main Menu" component={StackNavigator}
          options={{
            headerTitleAlign: 'center',
            headerShown: true,
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: "#BFAA8C",
              height: 100,
            },
            drawerIcon: () => (
              <Ionicons name='home-outline' size={22} color={color} />
            )
          }} />
        <Drawer.Screen name="Topics" component={Topics}
          options={{
            headerTitleAlign: 'center',
            headerShown: true,
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: "#BFAA8C",
              height: 100,
            },

            drawerIcon: () => (
              <Ionicons name='pencil-outline' size={22} color={color} />
            )
          }} />
        <Drawer.Screen name="Lectures" component={Lectures}
          options={{
            headerTitleAlign: 'center',
            headerShown: true,
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: "#BFAA8C",
              height: 100,
            },
            drawerIcon: () => (
              <Ionicons name='play-outline' size={22} color={color} />
            )
          }} />
        <Drawer.Screen name="Books" component={Books} 
        options={{
          headerTitleAlign: 'center',
          headerShown: true,
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: "#BFAA8C",
            height: 100,
          },
          drawerIcon: () => (
            <Ionicons name="book-outline" size={22} color={color} />
          )
        }}  />
        <Drawer.Screen name="Quiz Yourself" component={KnowledgeTest}
          options={{
            headerTitleAlign: 'center',
            headerShown: true,
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: "#BFAA8C",
              height: 100,
            },
            drawerIcon: () => (
              <AntDesign name="question" size={24} color="black" />
            )
          }} />
        <Drawer.Screen name="Meet The Team" component={TeamInfo}
          options={{
            headerTitleAlign: 'center',
            headerShown: true,
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: "#BFAA8C",
              height: 100,
            },
            drawerIcon: () => (
              <AntDesign name="team" size={22} color="black" />
            )
          }} />
        <Drawer.Screen name="About Us" component={AboutUs}
          options={{
            headerTitleAlign: 'center',
            headerShown: true,
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: "#BFAA8C",
              height: 100,
            },
            drawerIcon: () => (
              <AntDesign name="info" size={22} color="black" />
            )
          }} />
        <Drawer.Screen name="Donate" component={Donate}
          options={{
            headerTitleAlign: 'center',
            headerShown: true,
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: "#BFAA8C",
              height: 100,
            },
            drawerIcon: () => (
              <FontAwesome5 name="donate" size={22} color="black" />
            )
          }} />
        <Drawer.Screen name="FeedBack" component={Activities}
          options={{
            headerTitleAlign: 'center',
            headerShown: true,
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: "#BFAA8C",
              height: 100,
            },
            drawerIcon: () => (
              <Ionicons name='chatbox' size={22} color={color} />
            )
          }} />
        <Drawer.Screen name="SignUp" component={Signup} //needs to be last 2 always
          options={{
            headerShown: false,
            swipeEnabled: false,
            drawerItemStyle: { height: 0 }
          }} />
        <Drawer.Screen name="Settings" component={Settings} //needs to be last 2 always
          options={{
            headerTitleAlign: 'center',
            headerShown: true,
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: "#BFAA8C",
              height: 100,
            },
            drawerItemStyle: { height: 0 }
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function LogoTitle() {
  //Kawikas New changes to logo title 
  const handlePress = () => {
    // Code to execute when the logo is pressed
    alert("Logo pressed");
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
      style={{ 
        width: 190, 
        height: 55,
      }}
      source={require('diagnosis/assets/simplePDXLogo.png')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuIcon: {
    top: 0,
    left: 15
  },
  AccIcon: {
    top: 0,
    right: 15
  }
});

export default DrawerNavigator;