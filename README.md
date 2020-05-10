# email-inputs
Lightweight email inputs component without third party dependencies

[![CircleCI](https://circleci.com/gh/acierto/email-inputs.svg?style=svg)](https://circleci.com/gh/acierto/email-inputs)

# How component works

* Email block creates by pressing Enter, entering comma, or by losing focus on the
  input field. A Block can be deleted.
* Input width depends on the parent container’s width and height. If parent width changes,
  emails redistributes by rows.
* Input neither depends on the form or page styles, nor conflicts with them.
* If input has too many emails, user can scroll it.
* Pasted emails converted into blocks immediately. If multiple comma-separated
  emails pasted (e.g., “ ivan@mail.ru , max@mail.ru ”), they are converted into multiple
  blocks.
* "Add email" button adds a random email to the list.
* "Get emails count" button shows an alert with valid emails count.
* Editing of added emails is impossible.
* It is possible to create several emails editors on the same page.
* "emails-input" has no external dependencies like React, Lodash or any polyfills.
* "emails-input" has no memory leaks or doesn't re-render all email blocks every time you add or remove a single email.

# Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE11, Edge| last version| last version| last version|

# Playground

You can find a link to a playground [here](https://acierto.github.io/email-inputs/).
There are already some data pre-generated for testing some corner cases.

# API of the component

|Name|Description|
|----|-----------|
|getAllEmails|A method to get all entered emails. Both valid and invalid.|
|replaceAll|A method to replace all entered emails with new ones.|
|subscribe|Ability to subscribe for emails list changes.|

# Requirements to the system
There are 2 options, to execute all command with [Gradle](https://gradle.org/) or [Gulp 4](https://gulpjs.com/).
* For first option you have to install on your computer JDK. Verified on [JDK 1.8](https://www.oracle.com/java/technologies/javase-jdk8-downloads.html).
* For the second option you have to install locally [Node.js](https://nodejs.org/en/), verified on 14.2.0 and [Yarn](https://yarnpkg.com/)
verified on version 1.22.4

First version of running commands is less intrusive for the system as it won't require changing locally installed versions 
of Node.js, Gulp and Yarn. Even install them if something hasn't been installed yet.

# How to run the project
You can run the application with the next command:

For Linux/MacOS `./gradlew gulpDefault` or `gulp`

For Windows  `gradlew.bat gulpDefault`

The project will be accessible via [http://localhost:3000/](http://localhost:3000/).

# How to run tests

Here are 2 types of tests - unit tests and integration tests.
To run only unit tests you can use this command:
`./gradlew gulpUnitTests` or `gulp jest`.

To run only integration tests you can use this command:
`./gradlew gulpIntegrationTests` or `gulp clean && gulp build-development && gulp e2e`.

To run all tests you can use this command:
`./gradlew gulpTests` or `gulp clean && gulp build-development && gulp selenium-install && gulp e2e && gulp jest`.

# How to update GitHub Pages

To update GitHub Pages you have to run this command:
`./gradlew gulpGhPages` or `gulp gh-pages`.

# Examples of component usages in the code 
