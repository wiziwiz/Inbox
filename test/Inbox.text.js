const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());


// class Car {
//     park()
//     {
//         return 'stop';
//     }

//     drive () {
//         return 'vroom';
//     }
// }

// let car;

// beforeEach(() => {
//      car = new Car();
// })

// describe('Car', () => {
//     it('park can', () => {
//         assert.equal(car.park(), 'stop');
//     });
//     it('drive can', () => {
//         assert.equal(car.drive(), 'vroom');
//     });
// });