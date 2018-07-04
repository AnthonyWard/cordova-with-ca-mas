# Plugin to auto download SDK via Pods or Gradle

This is a test project for plugin: https://github.com/AnthonyWard/cordova-plugin-mas-automation

> You will need to add an `android_msso_config.json` and `ios_msso_config.json` in the www folder.

## Dependencies

- For Android you need Android Studio installed on a MacOS, Windows or Linux along with the Java 1.8 SDK
- For iOS you need xcode installed on MacOS
- You will need `nodeJS`, `npm` andf `git` installed
- Run `npm install -g cordova@8`

Full instructions are here: https://cordova.apache.org/docs/en/latest/guide/cli/index.html

## Run on a device

Clone the master branch of this repo

`npm i`

`cordova run android`
`cordova run ios`

## Notes

> Delete `plugins`, `platforms`, `node_modules` and `package.json` if Cordova gets itself in a confused state while building
