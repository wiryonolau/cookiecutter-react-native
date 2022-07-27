# Android React Native Project #

React native for android
Script are created with "npx react-native init" 

We strip the ios part
We bundle it inside virtualenv
We don't use Expo CLI

Project Structure Reference 

 - https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/
 - https://cheesecakelabs.com/blog/atomic-design-react

## Prerequisite ##

1. Make sure below library is installed

   ```bash
   sudo apt install nodejs nodeenv openjdk-17-jre
   ```

2. Install Android SDK and create Android device

   Android SDK is bundle inside Android Studio so use Android Studio for easier device management

   ```bash
   sudo snap install --classic android-studio 
   ```

3. Open Android Studio and create your device there

4. Setup environment in your ~/.bashrc or ~/.bash_aliases file

   ```bash
   export ANDROID_SDK_ROOT=$HOME/Library/Android/Sdk
   export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
   export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
   ```

5. Install and cookiecutter this project

   ```bash
   pip3 install --user cookiecutter
   cookiecutter gh:wiryonolau/cookiecutter-react-native
   ```

6. After finish activate virtualenv inside project root directory

   ```bash
   source .env/bin/activate
   ```

   

## Running Application ##

Running Application require two separate terminal 

First Terminal is to auto refresh your application on component change when developing

```bash
npx react-native start
```

Second Terminal to start android emulator with react-native

```bash
npx react-native run-android
```


## TODO ##

- Install and using watchman
- Tutorial creating apk