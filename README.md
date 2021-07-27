![Image of React Pomodoro Timer](https://i.postimg.cc/k5Zx8RSV/React-Pomodoro-Timer.png)
# 🍅 React Pomodoro Timer
> This is a very small project created with the purpose of learning the fundamentals of React.js starting from a simple [Create React App](https://github.com/facebook/create-react-app).

## 🎯 About ##

I've started this project with the idea of reworking one of the ending projects of the Front End Libraries Certification (300 hours) of [FreeCodeCamp](https://www.freecodecamp.org/learn).
I have structured the project with three React components and I have used some native and custom [React hooks](https://reactjs.org/docs/hooks-intro.html) in order to handle various project features and behaviours.<br/>
I have also used the [Context API](https://reactjs.org/docs/context.html) in order to be able to dispatch actions and to avoid prop-drilling (or threading). I have then styled everything with a little bit of custom SASS and I have added a theme switcher in order to be able to toggle the dark mode view.<br/>
You can set sessions and breaks for a maximum of 60 minutes: for each mode change you will hear an audio notification.<br/>
You can even follow the counter mode & timer in your browser tab name without have the focus on that tab.

## ▶️ Demo

Here you can find the demo link:

- [Netlify](https://react-tomato-clock.netlify.app/)

## :sparkles: Features ##

:heavy_check_mark:&nbsp; Use of React hooks and custom hooks<br/>
:heavy_check_mark:&nbsp; Use of React Context API<br/>
:heavy_check_mark:&nbsp; Counter state & timer in browser tab name<br/>
:heavy_check_mark:&nbsp; Audio notification when timer ends<br/>
:heavy_check_mark:&nbsp; Theme switcher (light/dark mode)<br/>
:heavy_check_mark:&nbsp; Gets theme preference from local storage<br/>
:heavy_check_mark:&nbsp; Responsive site

## :rocket: Technologies ##

- [React](https://reactjs.org/)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Context API](https://reactjs.org/docs/context.html)
- [SASS with vars switcher](https://sass-lang.com/)
- [Netlify - Responsible for the deploy (have a look below)](https://www.netlify.com/)

## Netlify deploy & configuration ##

> The site is developed with some specific https://netlify.com apis.

[![Netlify Status](https://api.netlify.com/api/v1/badges/b7827e25-ac49-44f3-b209-68c7b31b4bd3/deploy-status)](https://app.netlify.com/sites/react-tomato-clock/deploys)

### Deploy configuration steps

1. Connect your GitHub account to Netlify
3. Select the project
2. In Settings → Build & Deploy → Set **Build command** to : **_npm run build_**
3. In Settings → Build & Deploy → Set **Publish directory** to : **_build_**
<br/><br/>

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
