module.exports = function main(inputs) {
    // write your code here...
    var distancePrice = StratingPrice()
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
    return Math.round(distancePrice + parkingFee)
}
