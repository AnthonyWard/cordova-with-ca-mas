# Plugin to auto download SDK via Pods or Gradle

This plugin should pull down the MASFoundation 1.6 SDK, and MAS UI 1.6, and their dependencies.

> You will need to add an `android_msso_config.json` and `ios_msso_config.json` in the www folder.

## Notes on plugins

`plugman create --name <name> --plugin_id <name> --plugin_version 1.0.0 --path ./plugins-custom`

`plugman createpackagejson ./plugins-custom/<name>`

> Use NPM 4. NPM 5+ gives package.json not found when re-preparing in cordova

> Delete `plugins`, `platforms`, `node_modules` and `package.json` if Cordova gets itself in a confused state while building