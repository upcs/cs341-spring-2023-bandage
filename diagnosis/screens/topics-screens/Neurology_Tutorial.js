import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { Share } from 'react-native';

const Neurology_Tutorial = () => {

    const handleShare = () => {
      Share.share({
        message: 'Check out this neurology tutorial content: https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Neurology_Tutorial.php',
      });

    };
  const injectedJavaScript = `
    var style = document.createElement('style');
    style.innerHTML = 'body { font-family: sans-serif; }';
    document.body.style.backgroundColor = ' FFF5EE';
    document.head.appendChild(style);
  `; // THE JS THAT INJECTS
    return (
      <View style={styles.mainContainer}>
        <WebView
          javaScriptEnabled={true}
          injectedJavaScript={injectedJavaScript}
          source={{uri: 'https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Neurology_Tutorial.php'}}
          style={styles.view}
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

export default Neurology_Tutorial;