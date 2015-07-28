ionic-angular-google-maps-example
=========================

Example of using angular-google-maps in an Ionic app

Example of using angular-google-maps in Ionic, to display data from an API.

View the running app on [Heroku](https://ionic-angular-google-maps.herokuapp.com/)


Development
-----------

    ionic platform add ios
    ionic platform add android

    ionic plugin add https://github.com/apache/cordova-plugin-whitelist.git
    ionic plugin add cordova-plugin-geolocation
    
    npm install
    bower install

    ionic serve
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
