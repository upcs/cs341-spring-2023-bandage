## Developing PDX App for Physical Diagnosis PDX using React Native framework, Javascript, and Expo.

### PDX Company Website: https://physicaldiagnosispdx.com/

[![CI](https://github.com/upcs/cs341-spring-2022-diagnosis/actions/workflows/main.yml/badge.svg?branch=master&event=push)](https://github.com/upcs/cs341-spring-2022-diagnosis/actions/workflows/main.yml)

[![codecov](https://codecov.io/gh/upcs/cs341-spring-2022-diagnosis/branch/master/graph/badge.svg?token=3RL7cVKmmv)](https://codecov.io/gh/upcs/cs341-spring-2022-diagnosis)

App Authors: 
- Devam Patel
- Noelle Miller
- Aashish Anand
- Axl Martinez 
- Tamsen Dean
- Trystan L Wong 
- Kawika Suzuki
- Tyler Santos
- Lukas Miller
- Matthew Tran

Our Top 5 System Quality Attributes Are:
1) Usability
2) Localizability 
3) Accessibility
4) Modifiability
5) Simplicity

Currently attempted process for App building/submittal from terminal:
    1) npm install -g eas-cli
        This ensures the the proper EAS client is installed
    2) eas login
        Log in to EAS account that the build will be submitted to
    3) eas build:configure
        Configure build for EAS
    4) eas build --platform ios
        Begin the build with the desire platform (ios in our case)
        *App Developer Account Needed At This Step*

    The build is now visible on the according eas account on the website eas.dev
    Build status can be monitored until completion or failure

    The idea is that one an app binary is succsefully built, we then submit it through https://appstoreconnect.apple.com/

Updated: 4/25/23
