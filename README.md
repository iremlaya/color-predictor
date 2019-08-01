# ColorPredictor
Takes a full path to an image and returns its predicted color.
Will be integrated to work with live cam in order to detect colors of objects in real time.
This project uses Node.js with integrated ECMAScript. So it's essential to run your code with `node -r esm your-file-name.js`
Or you can edit this project in a way there wouldn't be a need for esm. Your choice.

## How To Use
### As npm package
Download with `npm install color-predictor` or `yarn add color-predictor`
Request or import package and call `predictColor('path/to/img')`. Sample code:
```
var predictColor = require("color-predictor")
var path = "../../purple.jpg"
predictColor(path)
```
Run your code with `node -r esm your-file-name.js`
### As a seperate project
#### IMPORTANT
As I've adjusted the code for npm package, the path in the project where it calls for the model.json is different than if you had done npm install. Right now it is :

in predict.js:
`var path = "./node_modules/color-predictor/my-model/model.json"`

But if you are using this option, you should change this to :

in predict.js:
`var path = "./my-model/model.json`

or wherever your model.json is located.

1) Downloading to same directory of your project
Download this repository to the same directory of your project either manually or with Git.
Run `npm install`
Example usage:
```
var predictColor = require("./color-finder")

var path = "path/to/image.jpg"
predictColor(path)
```
and run `node -r esm your-file-name.js`

Since this project uses esm with node, you can either use `require` or `import`. Both works.

2) Downloading to a seperate directory

Download this repository either manually or with Git.
Copy and paste `package.json`to your working directory, or copy the dependencies inside `package.json` and add them to your own project's `package.json`.
Run `npm install`.
Example usage:
```
var predictColor = require("path/to/color-classification/color-finder")

var path = "path/to/image.jpg"
predictColor(path)
```
and run `node -r esm {fileNameToBeRun.js}`

Since this project uses esm with node, you can either use `require` or `import`. Both works.

### Note

The path to the trained model is given as `var path = "./my-model/model.json"` in `predict.js`. If you would like to use another model, just require it.

