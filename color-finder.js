import RGBFinder from "./get-rgb"
import Canvas from "canvas"
import getPixels from "get-pixels";
import { resolve } from "path";
import loadModal from "./predict";

global.Image = Canvas.Image;

var path = "../../blue.jpeg"

function loadImg(img) {
    return new Promise((resolve, reject) => {
        getPixels(img, function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    });
}


var main = async (path) => {

    const img = await loadImg(resolve(process.cwd(), path));
    const rgb = await new RGBFinder(img);

    return rgb.dominantColor
}

export var predictColorWithImg = function (path) {
    main(path).then((rgb) => {
        return loadModal(rgb[0], rgb[1], rgb[2])
    })
}

export var predictColorWithRGB = function (r, g, b) {

    return loadModal(r, g, b);

}
