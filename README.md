# email-inputs
Lightweight email inputs component without dependencies

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

# API of the component

|Name|Description|
|----|-----------|
|getAllEmails|A method to get all entered emails. Both valid and invalid.|
|replaceAll|A method to replace all entered emails with new ones.|
|subscribe|Ability to subscribe for emails list changes.|

# How to build the project
You can run the application with the next command:

For Linux/MacOS `./gradlew gulpDefault`

For Windows  `gradlew.bat gulpDefault`

# Playground

You can find a link to a playground [here](https://acierto.github.io/email-inputs/).
There are already some data pre-generated for testing some corner cases.

# How to run tests

Here are 2 types of tests - unit tests and integration tests.
To run only unit tests you can use this command:
`./gradlew gulpUnitTests`

To run only integration tests you can use this command:
`./gradlew gulpIntegrationTests`

To run all tests you can use this command:
`./gradlew gulpTests`

# How to update GitHub Pages

To update GitHub Pages you have to run this command:
`./gradlew gulpGhPages`
