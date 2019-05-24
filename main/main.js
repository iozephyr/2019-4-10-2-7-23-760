module.exports = function main(inputs) {
    // write your code here...
    var distance_price = 6
    var parkPrice = inputs['parkTime'] * 0.25
    return Math.round(distance_price + parkPrice);
};
