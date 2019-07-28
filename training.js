
var tf = require("@tensorflow/tfjs-node");
let data =  require('./dataset.json'); 



let colors = [];
let labels = [];

let xs, ys;

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
async function loadMod() {
    console.log("load");
    if (localStorage.length > 0) {
        const LEARNING_RATE = 0.25;
        const optimizer = tf.train.sgd(LEARNING_RATE);
        let item = Number(localStorage.getItem('saveNo'));
        model = await tf.loadLayersModel(`indexeddb://colorClassifier-${item}`);
        model.compile({
            optimizer: optimizer,
            loss: 'categoricalCrossentropy',
            metrics: ['accuracy'],
        });
    } else {
        alert("no saved models");
    }
}

async function saveModel() {
    console.log("saving");
    if (localStorage.length > 0) {
        let item = Number(localStorage.getItem('saveNo'));
        await model.save(`indexeddb://colorClassifier-${item + 1}`);
        localStorage.setItem('saveNo', item + 1);
    } else {
        await model.save(`indexeddb://colorClassifier-1`);
        localStorage.setItem('saveNo', 1);
    }
}


for (let rec of data.entries) {
        let col = [rec.r/255, rec.g/255, rec.b/255];
        colors.push(col);
        labels.push(labelList.indexOf(rec.label));
    }


xs = tf.tensor2d(colors);
//console.log(xs.shape);
//xs.print();
let labelsTensor = tf.tensor1d(labels, 'int32');

ys = tf.oneHot(labelsTensor, 9).cast('float32');
labelsTensor.dispose();

model = tf.sequential();
let hidden = tf.layers.dense({
    units: 16,
    activation: 'sigmoid',
    inputDim: 3,
});
let output = tf.layers.dense({
    units: 9,
    activation: 'softmax',
});
model.add(hidden);
model.add(output);

const lr = 0.25;
const optim = tf.train.sgd(lr);

//metrics

model.compile({
    optimizer: optim,
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy'],
});


async function train() {
    const opts = {
        epochs: 50,
        validationSplit: 0.1,
        shuffle: true ,
        
    }
    return await model.fit(xs,ys,opts);
}

train().then(results => {
   
            let r = 255
            let g = 255
            let b = 0
            
            const new_xs = tf.tensor2d([[r/255,g/255,b/255]]);
            let result = model.predict(new_xs);
            let index = result.argMax(1).dataSync()[0];
            let label = labelList[index];
            console.log(label);
            save().then(() => {
                console.log("saved")
            });


         
    
});

async function save(){
    return await model.save('file:///Users/asus/Desktop/work/color-classification/my-model');
}

