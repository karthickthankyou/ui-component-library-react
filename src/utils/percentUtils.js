exports.getWidthAsPercentOfTotalWidth = (width, percent) => {
    return parseInt(width * (percent / 100), 10);
}
