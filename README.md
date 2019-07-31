# ColorPredictor
Takes a full path to an image and returns its predicted color.
Will be integrated to work with live cam in order to detect colors of objects in real time.

## How To Use
1) Downloading to same directory of your project
Download this repository to the same directory of your project either manually or with Git.
Run `npm install`
Example usage:
```
var predictColor = require("./color-finder")

var path = "path/to/image.jpg"
predictColor(path)
```
and run `node -r esm {fileNameToBeRun.js}`

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

