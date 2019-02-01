# ReactTodoList
This is a React Native TodoList.

Setup
1. Download the latest version of Node.js: 
https://nodejs.org/
2. Open a terminal window in where you want to install the project.
3. Run npm install -g expo-cli.
4. Run expo init ReactNativeTodoList.
5. Run npm install react-native-datepicker.
6. Run npm install npm install react-native-elements.
4. Navigate to the root folder, remove all the contents and replace with the files in this repository.
5. Run npm start to begin testing.

Testing with Expo:
1. On a mobile device, connect to the same wifi network as your computer.
2. Install Expo client app on your device.
3. Select tunnel option on your computer browser.
4. Open expo app on mobile and scan the QR code that appears on your computer.
5. Wait for javascript bundle to build 100% then begin testing.

References:
https://facebook.github.io/react-native/docs/getting-started

https://medium.com/salamcinema/react-native-step-by-step-guide-to-create-a-to-do-app-9fc8b95554f7

Notes:
-Expo filesystem currently has little to no support for writing files to local directories on mobile:
https://docs.expo.io/versions/latest/sdk/filesystem/

Will have to research this more in depth.

-This is a basic implementation of React->ReactNative. For further learning purposes, React-Redux->ReactNative
will potentially be implemented down the road.