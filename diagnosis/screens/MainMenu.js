import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import { ExtraText } from '../components/SignUpLoginStyles';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;
const MainMenu = ({ route, navigation }) => { 
    var now = new Date();
    const { name } = route.params;
    return(
        <View style={styles.mainContainer}> 
            <Image style={styles.stethoscopeImage} source={require('diagnosis/assets/stethoscope.jpeg')} blurRadius={1}></Image>
            <Text style={styles.welcomeText}>{now.getHours() < 12 ? "Good morning" : (now.getHours() < 18) ? "Good afternoon" : "Good evening"}, {"\n" + name}
            </Text>

            <View style={styles.middleLineLeft}></View>
            <ExtraText style={styles.PDXCenterText}>PDX</ExtraText>
            <View style={styles.middleLineRight}></View>
            
            <View style={styles.quickLinksView}>
                <TouchableOpacity testID='buttonOne' style={styles.quickLinkButtons} onPress={() => navigation.navigate("Topics")}> 
                    <Text style={styles.buttonText}>Topics</Text>    
                </TouchableOpacity>

                <TouchableOpacity testID='buttonTwo' style={styles.quickLinkButtons} onPress={() => navigation.navigate("Lectures")}> 
                    <Text style={styles.buttonText}>Lectures</Text>
                </TouchableOpacity>

                <TouchableOpacity testID='buttonThree' style={styles.quickLinkButtons} onPress={() => navigation.navigate("Books")}> 
                    <Text style={styles.buttonText}>Books</Text>
                </TouchableOpacity>

                <TouchableOpacity testID='buttonFour' style={styles.quickLinkButtons} onPress={() => navigation.navigate("TeamInfo")}> 
                    <Text style={styles.buttonText}>Our Team</Text>
                </TouchableOpacity>

                <TouchableOpacity testID='buttonFive' style={styles.quickLinkButtons} onPress={() => navigation.navigate("AboutUs")}> 
                    <Text style={styles.buttonText}>About Us</Text>
                </TouchableOpacity>

            </View>
        
        </View>
    );
};

// style sheet to keep the enhancements clean and readable
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BFAA8C",
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },

    headerContainer: {
        backgroundColor: "#ffffff",
        position: "absolute",
        top: 0,
        height: 0,
        justifyContent: "center",
        width: Dimensions.get('window').width,
    },

    MainMenu:{
        top: StatusBarHeight-20,
        left: Dimensions.get('window').width / 16
    },

    PDXLogo: {
        position:"absolute",
        resizeMode: "contain",
        //backgroundColor: 'red',
        width: 200,
        top: StatusBarHeight-100,
        left: Dimensions.get('window').width/4,
        flex: 1,
    },

    accountIcon: {
        position: "absolute",
        //backgroundColor: 'red',
        resizeMode: "contain",
        width: 50,
        height: 50,
        right: Dimensions.get('window').width / 16,
        top: StatusBarHeight
    },

    stethoscopeImage: {
        resizeMode: "stretch",
        position: "absolute",
        width: '100%',
        height: '40%',
        aspectRatio: 1,
        top: -60
    },

    welcomeText: {
        position: "absolute",
        color: "white",
        fontSize: 50,
        top: "5%",
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor:'#585858',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:10,
    },
    
    quickLinksView: {
        top: 0,
        backgroundColor: "white",
        justifyContent: 'center',
        position: "relative",
        marginTop: "50%",
        height:"50%",
        width: '90%',
        borderRadius: 30,
        borderColor: 'red',
        padding: 10,
        top: '5%',
        alignItems: 'center',
        marginBottom: "10%"
    },

    magGlassImg: {
        resizeMode: "contain",
        width: '15%',
        position: 'relative'
    },

    quickLinkButtons: {
        marginTop: Dimensions.get('window').height/64,
        alignItems: 'center',
        width: '75%',
        paddingVertical: 10,
        backgroundColor: 'red',
        borderRadius: 30,
    },

    centerView: {
        //top: 350,
        //position: "absolute",
        //backgroundColor: 'red',
        //height: 80,
        flex: 0.4,
        width: Dimensions.get('window').width
    },
    
    middleLineLeft: {
        width: 100,
        borderBottomColor: 'grey',
        borderBottomWidth: 6,
        borderRadius: 12,
        position: 'absolute',
        left: "5%",
        top: Dimensions.get('window').height*(5.2/16)
    },

    PDXCenterText: {
        alignContent: "center",
        top: "28%",
        fontSize: 50,
        color: 'white',
        textShadowColor:'#585858',
        textShadowOffset:{width: 1, height: 9},
        textShadowRadius:10,
        fontWeight: 'bold'
    },

    middleLineRight: {
        width: 100,
        borderBottomColor: 'grey',
        borderBottomWidth: 6,
        borderRadius: 12,
        position: 'absolute',
        right: "5%",
        top: Dimensions.get('window').height*(5.2/16)
    },

    buttonText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white"
    }
});
    
export default MainMenu; // send it off



