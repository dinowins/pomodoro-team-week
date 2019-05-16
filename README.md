# _PomoDogo Timer_

#### _Pomodoro Timer with a dog theme (multiple themes)_

#### By _**Philip Eskins**_, _**Dino Nguyen**_, _**Jack Collins**_, _**Drew Yoxsimer**_, _**Riley Benson**_

## Description

_Pomodoro timer with a dog theme that shows a dog gif when the timer ends._

_Visit the timer at https://pomodoro-e857a.firebaseapp.com/#/ _ 

## Current Features
* Focus timer (25 minutes), short break (5 minutes), long break (15 minutes)
* Login and signup functionality
* Show user's timer history
* Show dog gif at end of each timer
* Sound called at end of timer and toggle sound button
* Alert at end of timer if sound is off

## Future Features
* Button to click between multiple themes (PomoDrogo, PokeDoro)
* Alert functionality that shows up on window other than the timer window
* Make into PWA
* Host on Netlify/Firebase

## Setup/Installation Requirements

* _Download repository from https://github.com/jackpaulcollins/pomodoro-team-week.git
* _Type npm install from the command line interface_
* _Type npm run start from the command line interface_
* _If you'd like to alter or see the code for the project, after downloading open the project up in your favorite code editor._
* _Add Giphy API key in .env file as_ ``` REACT_APP_API_KEY = YOURAPIKEYHERE ```
* _.env file needs to be the root directory.
* _Create a config/fbConfig.js file.
* _Add firebase api information to config/fbConfig.js as:_

```

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "YOURAPIKEY",
   authDomain: "YOURAUTHDOMAIN",
   databaseURL: "YOURDATABASEURL",
   projectId: "YOURPROJECTID",
   storageBucket: "YOURSTORAGEBUCKET",
   messagingSenderId: "YOURID",
   appId: "YOURAPPID"
};
firebase.initializeApp(config);


export default firebase
```
## Known Bugs

_Background does not sync up._

## Support and contact details

_If you have problems or would like to comment about something feel free to contact the team at philipeskins@gmail.com_

## Technologies Used

_This website uses HTML, CSS, Materialize, JavaScript, Webpack, React, React Router and eslint_


### License

*MIT*

Copyright (c) 2019 **_Philip Eskins_**, **_Drew Yoxsimer_**, **_Jack Collins_**, **_Riley Benson_**, **_Dino Nguyen_**
