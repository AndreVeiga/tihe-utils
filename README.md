# Tihe-utils
  Application to assist in app development in JS.

####  What: 
  Module developed for my projects using react / react-native, with the purpose of assisting with masking tasks for data input and validation.
  
####  Why:
  During my web training, I realized that there are several modules that do this, but I often needed 2, 3 or even 4 modules that made masks, validations and the like.
   
####  Goal:
  Helping in the development of my software and learning would even be extremely happy if I could help others.

  
###  Installation

#####  Download and in a browser:
```
  <script src='tihe.js'></script>
```

#####  Using npm (global):
```
  $ npm i -g tihe-utils  

  $ npm install -g tihe-utils
```

#####  Using npm (local):
```
  $ npm i tihe-utils  

  $ npm install tihe-utils
```
> Note: add a flag --save if you are using npm < 5.0.0

#####  Nodejs example:

```
  // All functions core
  const tihe = require('tihe-utils)
```

  or

```
  // Time functions only
  const { time } = require('tihe-utils')
```

## Features 
 The implemented characteristics are the masks and validators
 
  * Date
  * Time
  * Money

#### Example

 Example with date
```
const { _date } = require('tihe-utils')

const data = '30/02/2020'

if( _date.isValidDate(data) ) {
    ....
}
...
```

Developed by [André Veiga](https://about.me/eltonveiga) 🇧🇷
