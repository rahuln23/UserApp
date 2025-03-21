# React Native Project

## Overview

This repository contains a React Native application built as part of a technical assessment. The project demonstrates best practices for mobile development using React Native.

## Prerequisites

Before running the project, ensure you have the following installed:

- [npm](https://www.npmjs.com/)
- React Native CLI
- Android Studio (for Android development) or Xcode (for iOS development)
- A physical device or an emulator for testing

## Installation

Clone the repository and navigate to the project directory:

```sh
git clone https://github.com/rahuln23/UserApp.git
cd https://github.com/rahuln23/UserApp.git
```

Install the dependencies:

```sh
npm install
```

## 🚀 Running the Application

### 📱 Android

1. Start an Android emulator or connect a physical device.
2. Run the following command:

```sh
npx react-native run-android
```

### 🍏 iOS (Mac Only)

1. Install CocoaPods dependencies:

```sh
cd ios
pod install
cd ..
```

2. Run the project:

```sh
npx react-native run-ios
```

## 📦 Building APK (Android)

To generate an APK, use the following commands:

```sh
cd android
./gradlew assembleRelease
```

The APK will be located in `android/app/build/outputs/apk/release/`.

## 🛠 Additional Notes

- Ensure that the Metro Bundler is running before launching the application:
  ```sh
  npx react-native start
  ```
- If you encounter permission issues, try running:
  ```sh
  chmod +x android/gradlew
  ```
- For any missing dependencies, run:
  ```sh
  npm install --check-files
  ```

## 📜 License

This project is for assessment purposes only and is not intended for commercial use.

## 📩 Contact

For any queries, feel free to reach out via GitHub issues.
