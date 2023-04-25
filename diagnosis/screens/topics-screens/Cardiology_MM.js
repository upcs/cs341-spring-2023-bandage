import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { Share } from 'react-native';
import LottieView from 'lottie-react-native';
import loadingAnimation from '../../assets/loading.json';


const Cardiology_MM = () => {
  const [isLoading, setIsLoading] = useState(true);

  const injectedJavaScript = `
  // remove header element from the HTML
  const header = document.querySelector('header');
  if (header) {
    header.remove();
  }

  var element1 = document.querySelector('div.footer-wrap');
  element1.parentNode.removeChild(element1);
  element1.remove();
  
  window.ReactNativeWebView.postMessage('loaded');
  true;
`;

  const handleShare = () => {
    Share.share({
      message: 'Check out this cardiology multimedia content: https://physicaldiagnosispdx.com/cardiology-multimedia-new/',
    });
  };

  const onMessage = (event) => {
    if (event.nativeEvent.data === 'loaded') {
      setTimeout(() => setIsLoading(false), 2000); // Delay setting isLoading to false by 2 seconds
    }
  };

  return (
    <View style={styles.mainContainer}>
      {isLoading ? (
        <View style={styles.animationContainer}>
          <LottieView
            source={loadingAnimation}
            autoPlay
            loop
            style={styles.animation}
          />
        </View>
      ) : null}
      <WebView
        javaScriptEnabled={true}
        injectedJavaScript={injectedJavaScript}
        source={{ uri: 'https://physicaldiagnosispdx.com/cardiology-multimedia-new/'}}
        onMessage={onMessage}
        style={isLoading ? { display: 'none' } : { flex: 1 }}
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

  animationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BFAA8C'
  },

  animation: {
    width: 200,
    height: 200
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
