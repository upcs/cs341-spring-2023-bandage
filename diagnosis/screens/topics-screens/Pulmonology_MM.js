import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const Pulmonolgy_MM = () => {

    const handleShare = () => {
        Share.share({
          message: 'Check out this pulmonology multimedia content: https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Pulmonolgy_MM.php',
        });
      };
      const injectedJavaScript = `
      var style = document.createElement('style');
      style.innerHTML = 'body { font-family: sans-serif; }';
      document.body.style.backgroundColor = '14CABA';
      document.head.appendChild(style);
      `; // THE JS THAT INJECTS
    return (
    <View style={styles.mainContainer}>
        <WebView 
            javaScriptEnabled={true} 
            source={{uri: 'https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Pulmonolgy_MM.php'}} 
            style={styles.view}
            injectedJavaScript={injectedJavaScript} // INJECT JS
        />
        <TouchableOpacity style={styles.button} onPress={handleShare}>
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
    </View>
    );
};

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

export default Pulmonolgy_MM;