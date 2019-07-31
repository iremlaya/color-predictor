var tfnode = require("@tensorflow/tfjs-node");
//var path = require("./path")
let labelList = [
    'red-ish',
    'green-ish',
    'blue-ish',
    'orange-ish',
    'yellow-ish',
    'pink-ish',
    'purple-ish',
    'brown-ish',
    'grey-ish'
  ]
  
var path = "./my-model/model.json"

async function loadModel(r, g, b){
    const model = await tfnode.loadLayersModel(`file://${path}`);
    
    const new_xs = tfnode.tensor2d([[r/255,g/255,b/255]]);
    let result = model.predict(new_xs);
    let index = result.argMax(1).dataSync()[0];
    let label = labelList[index];
    console.log(label);
    return label;
}

export default loadModel;
    


