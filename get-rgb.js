import quantize from "quantize"
import jsdom from "jsdom"

const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

const document = dom.window.document

export default class RGBFinder {
    constructor(image) {
        this.image = image;
        this.imgData =  this.image.data;
        this.dominantColor = this.getDomColor();
    }


    getDomColor () {
        let colors = this.getAllColors();
        return colors[0]
    }

    getAllColors() {
        const options = {colorCount: 5, quality: 10};
        const pixelCount = this.image.shape[0] * this.image.shape[1];
        const pixelArray = this.getRGBArray(this.imgData, pixelCount, options.quality)
        var cmap = quantize(pixelArray, options.colorCount)
        var colors = cmap? cmap.palette() : null
        return colors
    }

    getRGBArray(pixels, pixelCount, quality) {
        const arr = []

        for (let i = 0, offset, r, g, b, a; i < pixelCount; i = i + quality) {
            offset = i*4;
            r = pixels[offset + 0];
            g = pixels[offset + 1];
            b = pixels[offset + 2];
            a = pixels[offset + 3];
            // If pixel is mostly opaque and not white
            if (typeof a === 'undefined' || a >= 125) {
                if (!(r > 250 && g > 250 && b > 250)) {
                   arr.push([r, g, b]);
                }
            }
        }

        return arr
    }
}