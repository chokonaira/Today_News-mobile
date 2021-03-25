# Today News Mobile
A React Native mobile application for Android and IOS built on top of the NewsAPI

![React-Native.js CI](https://github.com/chokonaira/today-news/workflows/React-Native.js%20CI/badge.svg)

# Development Environment Setup

### Install React Native CLI globally 
- `npm install -g react-native-cli`
### Install Expo Cli globally
- `npm install -g expo-cli`

# Setup Project Locally
- git clone - `https://github.com/chokonaira/Today_News_Mobile.git`
- cd `Today_News_Mobile`
- run `npm install`
- run `npm start`

# Run Unit Test Locally
- run `npm install`
- create a `.env` file in the root of the project
- copy the variable in the `.env.example` file into your `.env` file, you can leave the values empty
- run `npm test`
### Preview App On Your Mobile Phone
- Download and install the `Expo Go` from your mobile app store
- Once installed, open app and choose the Barcode option 
- Scan the Barcode showing on your terminal after you have started the `Expo` server. This should launch App on your mobile phone.

## Setup Simulators
If you don't have a mobile simulator installed on your PC for Android or IOS or both, follow the instructions below to be able to preview react-native code across both operating system.

### Android Emulator
- Download Android studio here [Here](https://developer.android.com/studio)
- Follow the instructions on the [Article](https://developer.android.com/studio/run/managing-avds) to create and manage your own virtual device on android studio

### IOS Simulator (Mac users only)
- Download and install xcode from your Mac app store 
- After successful installation, open Xcode, go to Preference settings > Locations and select your Xcode version in the `Command Line Tools` dropdown. 

### Preview App with Simulators
- If you already have the andriod virtual device setup, manually run your Android Emulator on the background by opening Android studio > click Configure > click AVD Manager > click the green play button
- `npm run open-ios-simulator` to open your IOS Simulator on the background
- `npm start` to run expo server.
- In your Terminal where your server is running, type letter `a` to automatically preview app on your android emulator. type letter `i` to automatically preview the app on your IOS Simulator

### To run App on debug mode - 
- Follow this instructions to install react-native stand alone debugger Tool [here](https://github.com/jhen0409/react-native-debugger)
- After installation, Open React Native Debugger Tool > click debugger settings on the top left menu bar > Open config file > Modify defaultRNPackagerPorts to run on [19000] > Save and exit.
- Make sure your mobile virtual devices are running in the background
- `npm run debug` to run server in debug mode
- When you preview code on the running virtual devices, it will automatically connect to the dubugger which is running on port `19000`

<!-- ## Today News Backend
The Backend Logic can be found here: [Backend source code]()

### API server host
The Backend API is hosted on heroku here: [Heroku]()

### Documentation
The API documentation on Postmant can be found here: [Postman Documentation]() 

### News Api
Checkout the News Api here: [NewsApi](https://newsapi.org/)
-->


