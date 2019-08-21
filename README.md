[![npm version](https://badge.fury.io/js/color-predictor.svg)](https://www.npmjs.com/package/color-predictor)
# Color Predictor
Takes a full path to an image and returns its predicted color.
This project uses Node.js with integrated ECMAScript. So it's essential to run your code with `node -r esm your-file-name.js`
Or you can edit this project in a way there wouldn't be a need for esm. Your choice.

## Installing
Install `color-predictor` (latest):
```
npm install color-predictor
```
or
```
yarn add color-predictor
```
## Usage
Request or import package and call `predictColor('path/to/img')`. Sample code with `node.js`:
```
var predictColor = require("color-predictor")
var path = "../../purple.jpg" //full or relative path to your image
var predictedColor = predictColor(path)
```
Run your code with `node -r esm your-file-name.js`

### IMPORTANT
#### Downloading as a local project
To download dependencies, run
```npm install```
in the project.

As I've adjusted the code for npm package, the path in the project where it calls for the model.json is different than if you had done npm install.

##### predict.js:
change the path variable to
```var path = "path/to/color-predictor/my-model/model.json"```

or wherever your model.json is located.

Example code:

```
var predictColor = require("path/to/color-classification/color-finder")

var path = "path/to/image.jpg"
predictColor(path)
```
Then run:
```node -r esm your-file-name.js```


### Note

The path to the trained model is given in `predict.js`. If you would like to use another model, just require it.

### Issues
You're welcome to open new issues as you see fit. The first and foremost issue to be worked on is adding the feature of color detecting of objects with live cam in real time.

