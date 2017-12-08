# twitter-clone

![Twitter](https://www.shareicon.net/data/256x256/2017/02/24/879396_logo_512x512.png)



This is a react-native project to construct the Twitter UI.

Created using CRNA (create-react-native-app).

Video:

[![Video](https://img.youtube.com/vi/YBD0QiRYoMw/0.jpg)](https://goo.gl/zj4Wy5)


## Quick Overview

Make sure you have Node v6 or later installed. I strongly recommend using Yarn, or npm v4. Create React Native App does not currently work with npm v5 due to bugs in npm ([you can track the issue here](https://github.com/react-community/create-react-native-app/issues/233#issuecomment-305638103)). No Xcode or Android Studio installation is required.

```sh
$ cd twitter-clone/
$ yarn install  # installs all dependencies as specified in package.json
.
.
.
$ yarn start
```

Install the [Expo](https://expo.io) app on your iOS or Android phone, and use the QR code in the terminal to open the app. Find the QR scanner in the Projects tab of the app.

## Sections

* [Getting Started](#getting-started)
* [Support and Contact](#support-and-contact)
* [Philosophy](#philosophy)

## Getting Started


### Install Dependencies 

```sh
$ npm install
  # or
$ yarn install
```

This will install all dependencies as specified in `package.json`:
```
"dependencies": {
    "@expo/vector-icons": "^6.2.1",
    "expo": "^23.0.4",
    "native-base": "^2.3.4",
    "react": "16.0.0",
    "react-native": "0.50.3",
    "react-navigation": "^1.0.0-beta.21"
}
```
[Create-React-Native-App](https://facebook.github.io/react-native/docs/getting-started.html)

[NativeBase](https://docs.nativebase.io/) 

[ReactNavigation](https://reactnavigation.org/)

If you're familiar with React Native already, you won't find any `ios` or `android` directories in this project, just JavaScript. Once this installation is done, there are some commands you can run in the project directory:

#### `npm start` or `yarn start`

Runs the app in development mode with an interactive prompt. To run it without a prompt, use the `--no-interactive` flag.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

#### `npm run ios` or `yarn run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android` or `yarn run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).

#### `npm run eject` or `yarn run eject`

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

**Warning:** Running eject is a **permanent** action. Please use a version control system, such as git, so you can revert back if necessary. An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.


## Support and Contact

If you're having issues with this app or would like to request new features, reach out to me at [@akshitbhalla13](https://goo.gl/kMku1B) on Twitter (the real one).

## Philosophy

* **Minimal "Time to Hello World"**: Create React Native App should reduce the setup time it takes to try building a mobile app to the absolute minimum, ideally on par with React web development (especially as seen with [Create React App](https://github.com/facebookincubator/create-react-app)).
* **Develop on Your Device**: It should be easy to develop on a physical device when you want to test how your app feels and responds to inputs.
* **One Build Tool**: If you just want to get started with React Native, you shouldn't need to install Xcode, Android Studio, NDKs, or mess with environment variables.
* **No Lock-In**: You can always "eject" to your own build setup if you need to write custom native code or modify how your app is built.
