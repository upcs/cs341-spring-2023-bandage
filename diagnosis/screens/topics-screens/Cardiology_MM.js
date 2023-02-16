import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';


const Cardiology_MM = () => (
    <View style={styles.mainContainer}>
        <WebView
            javaScriptEnabled={true} source={{uri: 'https://physicaldiagnosispdx.com/cardiology-multimedia-new/'}}
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
        top: 40,
    }
});


export default Cardiology_MM;