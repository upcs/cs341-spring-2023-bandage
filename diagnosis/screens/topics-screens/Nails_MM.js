import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const Nails_MM = () => (
    <View style={styles.mainContainer}>
        <WebView 
            javaScriptEnabled={true} source={{uri: 'https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Nails_MM.php'}} 
            style={styles.view}
            injectedJavaScript={injectedJavaScript}
        />
    </View>
);

const injectedJavaScript = `
const style = document.createElement('style');
style.innerHTML = 'body { font-family: sans-serif; }';
document.body.style.backgroundColor = '14CABA';
document.head.appendChild(style);
`;

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

export default Nails_MM;