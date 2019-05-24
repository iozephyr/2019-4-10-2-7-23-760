module.exports = function main(inputs) {
    // write your code here...
    var distance = inputs['distance']
    var parkTime = inputs['parkTime']
    var distancePrice = StratingPrice() + PreKMFee(distance) + ExtraFee(distance)
    var parkingFee = ParkingFee(parkTime)
    return ShouldPay(distancePrice, parkingFee)
};

var PRE_KM_PRICE = 0.8

function StratingPrice() {
    // 起步价
    return 6
}

function PreKMFee(distance) {
    // 两公里后每公里收费
    var price = 0
    if (distance > 2) {
        price = Math.floor(distance - 2) * PRE_KM_PRICE
    }
    return price
}

function ExtraFee(distance) {
    // 超出8公里后，每公里加收50%
    var price = 0
    if (distance > 8) {
        price = Math.floor(distance - 8) * PRE_KM_PRICE * 0.5
    }
    return price
}

function ParkingFee(parkTime) {
    return parkTime * 0.25
}

function ShouldPay(distancePrice, parkingFee) {
    // return distancePrice + parkingFee
    return Math.round(distancePrice + parkingFee)
}
