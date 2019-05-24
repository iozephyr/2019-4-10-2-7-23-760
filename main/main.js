module.exports = function main(inputs) {
    // write your code here...
    var distancePrice = StratingPrice()
    if (inputs['distance'] > 2) {
        distancePrice += Math.floor(inputs['distance'] - 2) * 0.8
    }
    if (inputs['distance'] > 8) {
        distancePrice += Math.floor(inputs['distance'] - 8) * 0.4
    }
    var parkingFee = ParkingFee(inputs['parkTime'])
    return ShouldPay(distancePrice, parkingFee)
};

function StratingPrice() {
    return 6
}

function ParkingFee(parkTime) {
    return parkTime * 0.25
}

function ShouldPay(distancePrice, parkingFee) {
    // return distancePrice + parkingFee
    return Math.round(distancePrice + parkingFee)
}
