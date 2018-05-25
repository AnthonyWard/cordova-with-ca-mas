# Plugin to auto download SDK via Pods or Gradle

This plugin should pull down the MASFoundation 1.6 SDK, and MAS UI 1.6, and their dependencies.

## Notes on plugins

`plugman create --name <name> --plugin_id <name> --plugin_version 1.0.0 --path ./plugins-custom`

`plugman createpackagejson ./plugins-custom/<name>`

> Use NPM 4 - 5 give package.json not found when re-preparing in cordova