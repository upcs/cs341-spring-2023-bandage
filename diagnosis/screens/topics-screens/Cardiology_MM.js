import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { Share } from 'react-native';

const Cardiology_MM = () => {

    const handleShare = () => {
      Share.share({
        message: 'Check out this cardiology multimedia content: https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Cardiology_MM.php',
      });
    };

    const injectedJavaScript = `
    const style = document.createElement('style');
    style.innerHTML = 'body { font-family: sans-serif; }';
    document.body.style.backgroundColor = 'pink';
    document.head.appendChild(style);
  `;
    return (
      <View style={styles.mainContainer}>
        <WebView
          javaScriptEnabled={true}
          injectedJavaScript={injectedJavaScript}
          source={{uri: 'https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Cardiology_MM.php'}}
        />
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleShare}
          testID="shareButton" // add a testID prop
        >
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
        top: 40,
    },

    button: {
        backgroundColor: 'red',
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});



export default Cardiology_MM;