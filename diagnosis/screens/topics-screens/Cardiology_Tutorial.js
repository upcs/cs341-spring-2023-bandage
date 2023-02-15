import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const Cardiology_Tutorial = () => (
    <View style={styles.mainContainer}>
        <WebView 
            testID = {'CardioTutorial'}
            javaScriptEnabled={true} source={{uri: 'https://physicaldiagnosispdx.com/card-tutorial/'}} 
            //javaScriptEnabled={true} source={{uri: 'https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Cardiology_Tutorial.php'}} 
            style={styles.view}
        />
    </View>
);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#BFAA8C",
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    
    view: {
        resizeMode: 'stretch',
        top: 40
    }
});

export default Cardiology_Tutorial;