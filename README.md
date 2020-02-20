# AiPassportPhotoAndroid

-------------------------------------------------------------------------------
Set Up:
1. Node.js is require, installing Node.js. Suggesting LTS version
https://nodejs.org/en/

2. Android Studio is used for running emulator to simulate developing app. 
It is optional becaues the app could be simulate on your own device.
And we do not need to develop Android native libary yet.

3. IDE. 
Intellij should be ready for developing react native app.
Visual Studio code, installing extension. 
- click Extensions button on left or Ctrl+Alt+X
- search "React Native" and installing any React Native developing tool.
   suggesting install "ES7 React/Redux/GraphQL/React-Native snippets"
   
4. Installing Expo CLI (Doc URL: https://facebook.github.io/react-native/docs/getting-started). 
Type "npm install -g expo-cli" in terminal to install 

------------------------------------------------------------------------------------------
Simulate app:

Go into the directory of project.

Type "npm start" or "expo start" in terminal. A web page will be opened.

For Emulator:
- Run emulator in Android Studio
- Co to opened web page, click "Android device/emulator" button on the left.
- If error happen, manually install expo client in Goolge play store in emulator and retry
- Wait until JS bundle is 100% builded, the app should be simulated on emulator

For Android device:
- Install expo client in Goolge play store
- Run the expo client and click scan QR code
- Scanning the QR code on said opened web page
- Wait until JS bundle is 100% builded, the app should be simulated on devic
------------------------------------------------------------------------------------------------
Generating the release APK and Publishing to Google Play Store

Doc URL: https://facebook.github.io/react-native/docs/signed-apk-android

To be continue...

