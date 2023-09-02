
const RandSelect = (ImageArray) => {
    const selector = Math.floor(Math.random * ImageArray.length);
    return ImageArray[selector];
}



