import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { Share } from 'react-native';
import LottieView from 'lottie-react-native';
import loadingAnimation from '../assets/loading.json';

const Endocrinology_Tutorial = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleShare = () => {
    Share.share({
      message: 'Check out this endocrinology tutorial content: https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Endocrinology_Tutorial.php',
    });
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <View style={styles.mainContainer}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <LottieView
            source={loadingAnimation}
            autoPlay
            loop
            style={styles.loadingAnimation}
          />
        </View>
      ) : (
        <>
          <WebView
            javaScriptEnabled={true}
            source={{ uri: 'https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Endocrinology_Tutorial.php' }}
            style={styles.view}
            onLoad={handleLoad}
          />
          <TouchableOpacity style={styles.button} onPress={handleShare}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </>
      )}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingAnimation: {
    width: 200,
    height: 200,
  },
});

export default Endocrinology_Tutorial;
