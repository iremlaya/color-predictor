[![npm version](https://badge.fury.io/js/color-predictor.svg)](https://www.npmjs.com/package/color-predictor)
# Color Predictor
Takes a full path to an image and returns its predicted color.
This project uses Node.js with integrated ECMAScript. So it's essential to run your code with `node -r esm your-file-name.js`
Or you can edit this project in a way there wouldn't be a need for esm. Your choice.

## Installing
Install `color-predictor` (latest):
```
yarn add color-predictor
```
or
```
npm install color-predictor
```
## Usage
Request or import package and call `predictColor('path/to/img')`. Sample code with `node.js`:
```
import { predictColorWithRGB, predictColorWithImg} from "color-predictor";

const r = 95, g = 173, b = 215;

console.log(predictColorWithRGB(r, g, b));

console.log(predictColorWithImg("./okey.png"));
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
const { predictColorWithImg } = require("path/to/color-classification/color-finder")

const path = "path/to/image.jpg"
predictColorWithImg(path);
```
Then run:
```node -r esm your-file-name.js```


### Note

The path to the trained model is given in `predict.js`. If you would like to use another model, just require it.

### Issues
You're welcome to open new issues as you see fit. The first and foremost issue to be worked on is adding the feature of color detecting of objects with live cam in real time.

