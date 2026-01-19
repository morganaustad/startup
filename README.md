# Virtual Feature Suggestion Box

[My Notes](notes.md)

A web app designed for various individuals to send feature suggestions to one individual or company for review. (Possible addition of others being able to see suggested features and have the ability to upvote them.)

> [!NOTE]
> Markdown [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

## 🚀 Specification Deliverable

> [!NOTE]
> Startup README.md [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

During the development of software or video games, user feedback is remarkably important. This web app is designed to compile suggestions, and bugs found, from users for developers and designers to use in their development process. It will also offer an opportunity for users to see other suggestions and vote for those to be added, which will help decrease the number of submissions and allow the developers to see the most desired feature.

### Design

![Design image](FeatureReacherMockup.png)

Having a login option will allow the person seeking suggestions to limit who can enter and suggest features. Once past the login stage, the individual may suggest a feature or vote on already suggested features. Features with the most votes will be at the top.

### Key features

- List of suggested features by users
- Ability to vote on liked features for host to see preferences
- Login capabilities
- Display featured game through grabbing steam API

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Will use two HTML pages for structure of content. One page for login and another for suggesting features and voting.
- **CSS** - Styling the application with reasonable color tones and spacing.
- **React** - Login, suggesting features and updating what is shown, voting for features and showing the changes.
- **Service** - Backend service with endpoints for:
    - retrieving suggested features
    - submitting suggested feature
    - retrieving vote counts
    - Register, login, and logout users. Cannot suggest features without being registered.
- **DB/Login** - Stores login information and data, users, votes, and suggestions.
- **WebSocket** - As suggestions are submitted and votes are casted, that is broadcast to other users.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://lintloopinteractive.com/).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - I created three pages for the startup: index, features, and store. 
- [x] **Proper HTML element usage** - Each elements were used appropriately.
- [x] **Links** - All links on the startup connect to each other or where they need to go.
- [x] **Text** - There is text where it is required.
- [x] **3rd party API placeholder** - The store.html page has a placeholder of what will be contained from the 3rd party API.
- [x] **Images** - No images required except for the placeholder image on store.html.
- [x] **Login placeholder** - `index.html` contains a login placeholder using `<form>`.
- [x] **DB data placeholder** - `features.html` contains the DB placeholder.
- [x] **WebSocket placeholder** - `features.html` contains the WebSocket placeholder.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Visually appealing colors and layout. No overflowing elements.** - I did not complete this part of the deliverable.
- [ ] **Use of a CSS framework** - I did not complete this part of the deliverable.
- [ ] **All visual elements styled using CSS** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing using flexbox and/or grid display** - I did not complete this part of the deliverable.
- [ ] **Use of a imported font** - I did not complete this part of the deliverable.
- [ ] **Use of different types of selectors including element, class, ID, and pseudo selectors** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
