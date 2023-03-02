import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const Nephrology_MM = () => {
    const handleShare = () => {
        Share.share({
          message: 'Check out this neurology tutorial content: https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Neurology_Tutorial.php',
        });
  
      };
      
    const injectedJavaScript = `
      const style = document.createElement('style');
      style.innerHTML = 'body { font-family: sans-serif; }';
      document.body.style.backgroundColor = 'pink';
      document.head.appendChild(style);
    `;
    return(
    <View style={styles.mainContainer}>
        <WebView 
            javaScriptEnabled={true} source={{uri: 'https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Nephrology_MM.php'}} 
            style={styles.view}
        />
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

export default Nephrology_MM;