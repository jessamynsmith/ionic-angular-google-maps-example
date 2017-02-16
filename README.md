ionic-angular-google-maps-example
=========================

Example of using angular-google-maps in an Ionic app

Example of using angular-google-maps in Ionic, to display data from an API.

View the running app on [Heroku](https://ionic-angular-google-maps.herokuapp.com/)


Development
-----------

Ensure you have executables on path:

    npm install -g cordova ionic gulp bower

Do once to initialize the app:

    ionic platform add ios
    ionic platform add android

    ionic plugin add https://github.com/apache/cordova-plugin-whitelist.git
    ionic plugin add cordova-plugin-geolocation

Do each time dependencies have changed:

    npm install

Do each time anything in the scss directory changes:

    gulp sass

See the app in the browser:

    ionic serve

To see the app on a device, connect a device with USB and run using one of the following commands:

    ionic run android
    ionic run ios

Continuous Integration
----------------------

### Circle CI

[Circle CI](https://circleci.com/) is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. Circle is 
configured using the `circle.yml` file. You need to sign up for Circle and enable this project, then
set up Heroku deployment from Circle. To make this work, you need to create a herokuapp and put the
name of that app in `circle.yml`.
